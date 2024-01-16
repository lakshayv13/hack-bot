import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

import "./chat.css";

function ChatMessageBox(props) {
  return (
    <div className="chat-message-box">
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaUser className="chat-message-icon" />
        <p>{props.message}</p>
      </div>
    </div>
  );
}

function ChatBotMessageBox(props) {
    return (
      <div className="chat-message-box">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="images/logo.png" className="chat-bot-logo" />
          <p>{props.message}</p>
        </div>
      </div>
    );
  }

function Chat() {
  const [chatMessage, setChatMessage] = useState("");
  const [chatList, setChatList] = useState([]);
  const [chatBotList, setChatBotList] = useState([]);

  const handleChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleClick = () => {
    if (chatMessage.trim() !== "") {
      setChatList([...chatList, chatMessage]);
      setChatMessage("");
      setTimeout(() => {
        setChatBotList([...chatBotList, "Hackathon is at 15th Jan 2024"]);
      }, 2000)
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chatList.map((message, index) => (
          <ChatMessageBox message={message} />
        ))}
        {chatBotList.map((message, index) => (
          <ChatBotMessageBox message={message} />
        ))}
      </div>
      <div className="d-flex">
        <input
          className="chat-input"
          onChange={handleChange}
          placeholder="Write your query here..."
          type="text"
          value={chatMessage}
        />
        <IoIosSend className="chat-send-button" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Chat;
