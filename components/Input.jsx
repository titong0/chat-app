import React, { useState, useContext, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Io } from "../pages/_app";
import ContentEditable from "react-contenteditable";

const Input = ({ username }) => {
  const socket = useContext(Io);
  const [content, setContent] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    socket.emit("message", {
      content,
      author: username,
      createdAt: new Date(),
    });
    setContent("");
  };

  return (
    <>
      <form
        className="flex justify-around items-end m-2 gap-2 h-auto"
        onSubmit={sendMessage}
      >
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          minLength="1"
          required
          className="w-full p-1 resize-none rounded-sm bg-teal-100 text-slate-900 dark:bg-zinc-800 dark:text-zinc-200"
        />

        <button type="submit">
          <AiOutlineSend className="h-8 w-12 rounded-lg p-1 border bg-cyan-500 dark:bg-cyan-200 dark:text-black cursor-pointer" />
        </button>
      </form>
    </>
  );
};

export default Input;
