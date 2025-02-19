import React from "react";
import "../styles/Message.css";

const Message = ({ user, content, timestamp }) => {
  return (
    <div className="message">
      <div className="message__info">
        <span className="message__user">{user}</span>
        <span className="message__time">{timestamp}</span>
      </div>
      <p className="message__content">{content}</p>
    </div>
  );
};

export default Message;
