import React from "react";
import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import { Routes } from "react-router-dom";
import chatVideo from "../pages/video.mp4";

const ChatRoom = () => {
  const chatRoomStyle = {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden", // Prevent video overflow
  };

  const videoStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover", // Cover the entire container
    objectPosition: "center", // Center the video content
    opacity: 0.01, // Adjust the opacity value as needed (0.0 to 1.0)
  };

  return (
    <div style={chatRoomStyle}>
      {/* Use the <video> element as a background */}
      <video autoPlay loop muted style={videoStyle}>
        <source src={chatVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
