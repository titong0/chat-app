import React from "react";
import Message from "./Message";

const ChatMessages = ({ messages, username }) => {
  return (
    <div className=" overflow-y-auto h-full bg-slate-600 dark:bg-slate-900 py-2 px-16 ">
      {messages.length ? (
        <>
          {messages.map((message, idx) => (
            <Message
              joined={messages[idx - 1]?.author === message.author}
              key={message.createdAt}
              username={username}
              content={message.content}
              author={message.author}
              createdAt={new Date(message.createdAt)}
            />
          ))}
        </>
      ) : (
        <div className="grid justify-center place-items-center h-full">
          <div className="w-fit p-4 border bg-black bg-opacity-25 border-sky-500">
            Empty...
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
