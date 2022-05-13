import { ReactSlackChat } from 'react-slack-chat';
import React, { Component } from 'react';
import './dashboard.css';
import { AuthFailedModal } from './dialog.js';
import { createStore } from 'redux'
const { WebClient }  = require('@slack/web-api');
const token = 'xoxb-3372401797858-3433774164354-9puqoJvdvrcmp8YroTxeZBMF'
const web = new WebClient(token);
delete web["axios"].defaults.headers["User-Agent"];



const store1 = createStore(b_channles, [])

const allItems = store1.name
const savedChannelsStore = createStore(b_channles, [])

function b_channles(state = [], action) {
  switch (action.type) {
    case 'BROWSE':
      return state.concat(action.text)
    default:
      return state
  }
}

function browseChannels(text) {
  return{
    type: 'BROWSE',
    text
  }
}


async function insertName() {
    let username = prompt("Please enter your name");
    if (username != null) {
        return ('Guest')
    }
  }

async function getAllChannels(options) {
    async function pageLoaded(accumulatedChannels, res) {
      const mergedChannels = accumulatedChannels.concat(res.channels);
      if (res.response_metadata && res.response_metadata.next_cursor && res.response_metadata.next_cursor !== '') {
        const pageOptions = { ...options };
        pageOptions.cursor = res.response_metadata.next_cursor;
        return pageLoaded(mergedChannels, await web.conversations.list(pageOptions));
      }
      return mergedChannels;
    }
    return pageLoaded([], await web.conversations.list(options));
}

async function fetchMessage(id, ts) {
  try {
    const result = await web.conversations.history({
      channel: id,
    });
    return result.messages
  }
  catch (error) {
    console.error(error);
  }
}
  
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            searchChannelsQuery: '',
            searchMessagesQuery: '',
            channelsFromSlack: [],
            channelsSaved: [],
            messagesSucceded : [],
            messagesFailed: [],
            shouldRenderChat : false,
            tempsav : []
        }
        this.moveSearchedToSavedChannels = this.moveSearchedToSavedChannels.bind(this);
        this.moveSavedToSearchedChannels = this.moveSavedToSearchedChannels.bind(this);
        this.handleClickChannel = this.handleClickChannel.bind(this)
    }

    moveSearchedToSavedChannels(itemId) {
        let tempChannelsFromSlack = [...this.state.channelsFromSlack];
        let tempFilteredChannels = tempChannelsFromSlack.filter(item => item.id === itemId)

        let tempChannelsSaved = [ ...this.state.channelsSaved ]
        tempChannelsSaved = tempChannelsSaved.concat(tempFilteredChannels)

        const channelsInStore = savedChannelsStore.getState()
        for (let index = 0; index < tempChannelsSaved.length; index++) {
            const element = tempChannelsSaved[index];
            if(element.id == itemId && !channelsInStore.find((elem) => elem.id == itemId)){
                savedChannelsStore.dispatch(browseChannels(element))
            }
        }
        this.setState({
            channelsFromSlack : tempChannelsFromSlack.filter(item => item.id != itemId),
            channelsSaved : savedChannelsStore.getState(),
        })
        localStorage.setItem('savedChannels', JSON.stringify(savedChannelsStore.getState()));
    }
    
    moveSavedToSearchedChannels(itemId) {
        
        let tempChannelsSaved = [...this.state.channelsSaved];
        let tempFilteredSavedChannels = tempChannelsSaved.filter(item => item.id === itemId)
        let tempChannelsFromSlack = [...this.state.channelsFromSlack ]
        tempChannelsFromSlack = tempChannelsFromSlack.concat(tempFilteredSavedChannels)
        this.state.tempsav = tempChannelsSaved
        this.setState({
            channelsFromSlack : tempChannelsFromSlack,
            channelsSaved : tempChannelsSaved.filter(item => item.id !== itemId),
        })
        for (let index = 0; index < tempChannelsSaved.length; index++) {
            const element = tempChannelsSaved[index];
            if(element.id == itemId){
                this.state.tempsav.splice(index,1)
                
            }
        }
        localStorage.removeItem('savedChannels');
        localStorage.setItem('savedChannels', JSON.stringify(this.state.tempsav));
    }

    handleClickChannel(channel) {
        fetchMessage(channel.id, channel.shared_team_ids).then((messages) =>{
            const messagesSucceded = messages.filter((message) => message.text.includes('Succeded'))
            const messagesFailed = messages.filter((message) => message.text.includes('Failed'))
            this.setState({
                messagesSucceded : messagesSucceded,
                messagesFailed : messagesFailed
            })
        })

    }
  
    getName() {
        let username = prompt("Please enter your name");
        if (username != null) {
            return username
        } else if(username == null){
            return ("Guest")
        }
        
        (async () => {
            const userName = await insertName();
            return userName;
        })
        ().then((botName)=> {
            this.setState({
                Names: botName,
                shouldRenderChat: true
            })
      })

    componentDidMount(){
        var client_id_return = localStorage.getItem('clientId');
        const client_id_return_slice = client_id_return.slice(0,13);
        if(!window.location.href.includes(client_id_return_slice)){
            this.setState({ isLoggedIn : false})
            console.log("Login failed");
        }

        (async () => {
            const allChannels = await getAllChannels({ exclude_archived: true, types: 'public_channel' });
            return allChannels;
        })
        ().then((channels)=> {
            let channelsFromStore = JSON.parse(localStorage.getItem('savedChannels'))
            if (channelsFromStore) {
                channelsFromStore.map((channel) =>  savedChannelsStore.dispatch(browseChannels(channel)))
                this.setState({
                    channelsFromSlack: channels,
                    channelsSaved: savedChannelsStore.getState() 
                })
            }
        })
    };

  render() {
    let loclstr1 =[]
    let loclstr = localStorage.getItem('savedChannels')
    loclstr1.concat(loclstr)
 
    const isLoggedIn = this.state.isLoggedIn;
    if (!isLoggedIn) {
        return (
            <AuthFailedModal/>
        )
    }
    return (
      <div className="dashboard_div">
          
          <div className="logo_div">
          </div>
          <div className="searchDivs">
            <div className="searchCategory_tab">
            <h1>SEARCHED BRANDS  <input type="text" placeholder='Search brand' className="brandSearchBar" onChange={event => this.setState({searchChannelsQuery : event.target.value})} /></h1>
            <ul className='searchedFromList'>
                {
                    this.state.channelsFromSlack.filter(channel => {
                            if (this.state.searchChannelsQuery === '') {
                                return channel
                            } else if (channel.name.toLowerCase().includes(this.state.searchChannelsQuery.toLowerCase())) {
                            return channel;
                            }
                            return ''
                        }).map((channel, idChannels) => (
                            <div className="searchedFromList" key={idChannels}>
                                <ul>
                                    <li>
                                        {channel.name}<button className='AddToListButton' onClick={() => this.moveSearchedToSavedChannels(channel.id)}>+</button>
                                    </li>
                                    <br></br>
                                </ul>
                            </div>
                            
                        ))
                    }
            </ul>
        </div>
        <div className="searchResults_tab">
            
            <h1>SAVED BRANDS</h1>
                
            <ul className='addedFromList'>
                {   
                    this.state.channelsSaved.map((item) =>  <ul className='addedFromList'>
                        <li onClick={() => this.handleClickChannel(item)}>
                            {item.name}
                            <button className='removeFromListButton' onClick={() => this.moveSavedToSearchedChannels(item.id)}>-</button>
                        </li>
                    <br></br>
                    </ul>)
                }
            </ul>
        </div>
    </div>

            <div className="succeded_tab">
                            <h1 className='h1divs'>SUCCEDED</h1>
                                <div className="scrollSucceded" id="scrollSuccededID">
                                <ol className='success_from_list'>
                                {
                                    this.state.messagesSucceded.filter((message) => {
                                            if (this.state.searchMessagesQuery === '') {
                                                return message.text
                                            } else if (message.text.toLowerCase().includes(this.state.searchMessagesQuery.toLowerCase())) {
                                            return message.text;
                                            }
                                            return ''
                                        }).map((message, idMessages) => (
                                            <div className="success_from_list" key={idMessages}>
                                                <ul>
                                                    <li className='singleMessageSucceded'>{message.text} </li>
                                                </ul>
                                            
                                            </div>
                                        ))
                                    }
                                </ol>
                                </div>
                        </div>

                    <div className="failed_tab">
                        <h1 className='h1divs'>FAILED <input type="text" placeholder='Search records' className="recordsSearchBar" onChange={event => this.setState({searchMessagesQuery : event.target.value})} />
                            </h1>
                        <div className="scrollFailed">
                        <ol className='failed_from_list'>
                        {
                                    this.state.messagesFailed.filter((message) => {
                                            if (this.state.searchMessagesQuery === '') {
                                                return message.text
                                            } else if (message.text.toLowerCase().includes(this.state.searchMessagesQuery.toLowerCase())) {
                                            return message.text;
                                            }
                                            return ''
                                        }).map((message, idMessages) => (
                                            <div className="failed_from_list" key={idMessages}>
                                                <ul>
                                                    <li className="singleMessageFailed">{message.text}</li>
                                                </ul>
                                            
                                            </div>
                                        ))
                                    }
                        </ol>
                        </div>
                    </div>
                    { this.state.shouldRenderChat ?
                        (
                            <ReactSlackChat
                                botName= {this.getName()} // VisitorID, CorpID, Email, IP address etc.
                                apiToken="eG94Yi0zMzcyNDAxNzk3ODU4LTM0NDM3MDQ4ODU4OTMtc1BpTHhONmxIbUV6NXJCZENaZkZwMEtZ"
                                channels={this.state.channelsFromSlack.length > 0 ? this.state.channelsFromSlack : []}
                                helpText="Chat"
                                themeColor="#82CAFF"
                                userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
                            />
                        ) : ''
                    }
        </div>
    );
  }
}
export default Dashboard;


