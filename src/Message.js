import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ timestamp, message, user }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message_info">
        <h4>
          {user.displayName}
          <span className="message_timeStamp">
            {new Date(timestamp?.toDate()).toLocaleTimeString() +
              " " +
              new Date(timestamp?.toDate()).toLocaleDateString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
