import { ReactSlackChat } from 'react-slack-chat';
import React, { Component } from 'react';
import './dashboard.css';
import { AuthFailedModal } from './dialog.js';















const { WebClient }  = require('@slack/web-api');
const token = 'xoxb-3372401797858-3387082004324-yivwwMv90jBNa2wAuATL67YP'
const web = new WebClient(token);
delete web["axios"].defaults.headers["User-Agent"];


async function getAllChannels(options) {
    async function pageLoaded(accumulatedChannels, res) {
      // Merge the previous result with the results in the current page
      const mergedChannels = accumulatedChannels.concat(res.channels);
  
      // When a `next_cursor` exists, recursively call this function to get the next page.
      if (res.response_metadata && res.response_metadata.next_cursor && res.response_metadata.next_cursor !== '') {
        // Make a copy of options
        const pageOptions = { ...options };
        // Add the `cursor` argument
        pageOptions.cursor = res.response_metadata.next_cursor;
  
        return pageLoaded(mergedChannels, await web.conversations.list(pageOptions));
      }
  
      // Otherwise, we're done and can return the result
      return mergedChannels;
    }
    return pageLoaded([], await web.conversations.list(options));
  }
  

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};
        this.state = {
            searchChannelsQuery: '',
            searchMessagesQuery: '' 
        }
      }

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
        })().then((channels)=> {
            console.log(channels);
            // toDO, PUSH IT USING REDUCER
        })
      
    };
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (!isLoggedIn) {
            return (
                <AuthFailedModal/>
            )
        }
    
        
    }  

  render() {
    const channels = this.props.store1;
    const messages = this.props.store2;
    return (
      <div className="dashboard_div">
          
          <div className="logo_div">
          </div>
          <div className="searchDivs">
            <div className="searchCategory_tab">
                <div className="input_container">
                    <input type="text" placeholder='Search brand' className="brandSearchBar" onChange={event => this.setState({searchChannelsQuery : event.target.value})} />
                    
                </div>
            <h1>SEARCHED BRANDS</h1>
            <ul className='searchedFromList'>
                {
                    channels.filter(channel => {
                            if (this.state.searchChannelsQuery === '') {
                                return channel
                            } else if (channel.name.toLowerCase().includes(this.state.searchChannelsQuery.toLowerCase())) {
                            return channel;
                            }
                        }).map((channel, idChannels) => (
                            <div className="searchedFromList" key={idChannels}>
                                <ul>
                                    <li>{channel.name}</li>
                                </ul>
                            
                            </div>
                        ))
                    }
            </ul>
        </div>
        <div className="searchResults_tab">
            
            <h1>SAVED BRANDS</h1>
                
            <ul className='addedFromList'>
            </ul>
        </div>
    </div>

            <div className="succeded_tab">
                            <h1 className='h1divs'>SUCCEDED</h1>
        
                                <div className="scrollSucceded" id="scrollSuccededID">
                                <ol className='success_from_list'>
                                {
                                    messages.filter(message => {
                                            if (this.state.searchMessagesQuery === '') {
                                                return message
                                            } else if (message.content.toLowerCase().includes(this.state.searchMessagesQuery.toLowerCase()) && message.ifSucceded === "SUCCEDED") {
                                            return message;
                                            }
                                        }).map((message, idMessages) => (
                                            <div className="success_from_list" key={idMessages}>
                                                <ul>
                                                    <li>{message.content}</li>
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
                                    messages.filter(message => {
                                            if (this.state.searchMessagesQuery === '') {
                                                return message
                                            } else if (message.content.toLowerCase().includes(this.state.searchMessagesQuery.toLowerCase()) && message.ifSucceded === "FAILED") {
                                            return message;
                                            }
                                        }).map((message, idMessages) => (
                                            <div className="failed_from_list" key={idMessages}>
                                                <ul>
                                                    <li>{message.content}</li>
                                                </ul>
                                            
                                            </div>
                                        ))
                                    }
                        </ol>
                        </div>
                    </div>
        <ReactSlackChat
        botName="490bot" // VisitorID, CorpID, Email, IP address etc.
        apiToken="eG94Yi0xNTI2NjcyMDA4NTI4LTE1MDI5NTcwNTc2MzQteEdWRU1YWkd1SzBPbWlSdzBKZmJ0UjFE"
        channels={[
          {
            name: "random",
            id: "",
          },
          {
            name: "general",
            id: ""
          }
        ]}
        helpText="Chat"
        themeColor="#82CAFF"
        userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
      />
    );
        </div>

    );
  }
}
export default Dashboard;


