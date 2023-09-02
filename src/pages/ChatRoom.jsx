import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";
import { Routes } from "react-router-dom";

import backgroundImage from "../pages/wallpaperflare.com_wallpaper.jpg";

const ChatRoom = () => {
  const chatRoomStyle = {
    position: "relative",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
  };

  const overlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    pointerEvents: "none",
  };

  return (
    <div style={chatRoomStyle}>
      {/* Add the overlay using a pseudo-element */}
      <div style={overlayStyle}></div>
      <ChatBox />
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
