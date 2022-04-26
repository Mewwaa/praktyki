import { ReactSlackChat } from "react-slack-chat/dist/react-slack-chat-with-default-hooks";
import React, { Component } from 'react';
import './dashboard.css';
// import store1 from './App.js'
     


class Dashboard extends Component {
  render() {
    // const  failedMessagesList = messages.filter(message => message.includes("FAILED")).map(failedMessage => (
    //     <li>
    //       {failedMessage.content}
    //     </li>
    // ));

    // const filteredFailed = messages.filter(message => {
    //     return (<li>{message.ifSucceded === 'FAILED'}</li>)
    // });

    // console.log(messages)
    const channels = this.props.store1;
    const messages = this.props.store2;
    const channelList = channels.map((channel) =>
    <li>{channel.name}</li>
    );
    
    
    const messagesList = messages.map((message) =>
    <li>{message.content}</li>
    );


    return (
      <div className="dashboard_div">
          <div className="logo_div">
          </div>
          <div className="searchDivs">
            <div className="searchCategory_tab">
                <div className="input_container">
                    <input type="text" placeholder='Search brand' className="brandSearchBar" />
                </div>
            <h1>SEARCHED BRANDS</h1>
            <ul className='searchedFromList'>
                {channelList}
            </ul>
        </div>
        <div className="searchResults_tab">
            
            <h1>SAVED BRANDS</h1>
                
            <ul className='addedFromList'>
            {channelList}
            </ul>
        </div>
    </div>

            <div className="succeded_tab">
                            <h1 className='h1divs'>SUCCEDED</h1>
        
                                <div className="scrollSucceded" id="scrollSuccededID">
                                <ol>
                                {messagesList} 
                                </ol>
                                </div>
                        </div>

                    <div className="failed_tab">
                        <h1 className='h1divs'>FAILED <input type="text" placeholder='Search records' className="recordsSearchBar" />
                            </h1>
                        <div className="scrollFailed">
                        <ol>
                               {messagesList} 
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


