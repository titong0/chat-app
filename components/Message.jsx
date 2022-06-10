import React from "react";

const Message = ({ content, username, author, joined, createdAt }) => {
  const isOwn = author === username;
  const column = isOwn
    ? "justify-self-end col-start-3 sm:col-start-8 col-span-full"
    : "col-span-10 sm:col-span-6";
  const color = isOwn ? "bg-teal-200" : "bg-gray-100";
  const pt = !joined ? "pt-4" : "pt-0";
  return (
    <div className={`grid grid-cols-12 h-fit text-slate-900 w-full p-1 ${pt}`}>
      <div
        className={`grid grid-cols-2 ${column} ${color} gap-1 sm:gap-3 rounded-sm  min-w-32 pl-1 `}
      >
        {/* only show username in other people's messages */}
        {!isOwn && !joined && (
          <h3 className={`px-2 pt-1 font-semibold text-rose-700 text-left`}>
            {author}
          </h3>
        )}
        {isOwn ? (
          <p className="p-1 inline-block">{content}</p>
        ) : (
          <p className="p-2 pt-0">{content}</p>
        )}
        <span className="text-xs place-self-end justify-en pb-1 pr-1">{`${createdAt.getHours()}:${createdAt.getMinutes()}`}</span>
      </div>
    </div>
  );
};

export default Message;
