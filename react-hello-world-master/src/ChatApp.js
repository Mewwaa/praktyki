import { ReactSlackChat } from "react-slack-chat/dist/react-slack-chat-with-default-hooks";
import React from "react";

export default function ChatApp() {
  return (
    <ReactSlackChat
      botName=""
      apiToken=""
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
