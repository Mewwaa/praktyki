import React from "react";
import { ReactSlackChat } from "react-slack-chat/dist/react-slack-chat-with-default-hooks";
import './chat.css';

export default function Chat() {
  return (
    <ReactSlackChat
      botName="490bot" // VisitorID, CorpID, Email, IP address etc.
      apiToken="eG94Yi0xNTI2NjcyMDA4NTI4LTE1MDI5NTcwNTc2MzQteEdWRU1YWkd1SzBPbWlSdzBKZmJ0UjFE"
      channels={[
        {
          name: "random",
          id: "",
          icon: "./logo.svg"
        },
        {
          name: "general",
          id: ""
        }
      ]}
      helpText="Chat"
      themeColor="#856090"
      userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
    />
  );
}
