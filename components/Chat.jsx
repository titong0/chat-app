import React, { useContext, useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import Input from "./Input";
import { Io } from "../pages/_app";

const Chat = ({ username }) => {
  const socket = useContext(Io);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (socket === null) return;

    const updateMessages = (newMessage) => {
      setMessages([...messages, newMessage]);
    };

    socket.on("newMessage", updateMessages);
    socket.on("sent");
    return () => {
      socket.off("newMessage", updateMessages);
    };
  }, [socket, messages]);
  return (
    <div className="flex flex-col h-full bg-slate-500 text-gray-200 dark:bg-zinc-700 transition-colors">
      <header className="flex items-center h-16 w-full p-2">
        <h2 className="text-xl">Coolest group ever</h2>
      </header>
      <ChatMessages messages={messages} username={username} />
      {socket !== null && <Input username={username} />}
    </div>
  );
};

export default Chat;
