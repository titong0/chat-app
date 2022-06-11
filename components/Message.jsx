import React from "react";

const Message = ({ content, username, author, joined, createdAt }) => {
  const isOwn = author === username;

  const pt = !joined ? "pt-3" : "pt-0";
  return (
    <>
      <div className={`grid grid-cols-12 h-fit text-slate-900 p-1 ${pt}`}>
        {isOwn ? (
          <div
            className={`grid grid-cols-2 justify-self-end col-start-3 sm:col-start-8 
            col-span-full bg-teal-200 dark:bg-teal-500 gap-1 sm:gap-3 rounded-sm  min-w-32 pl-1 `}
          >
            <p className="p-1 inline-block">{content}</p>
            <span className="text-xs place-self-end justify-en pb-1 pr-1">
              {`${createdAt.getHours()}:${createdAt.getMinutes()}`}
            </span>
          </div>
        ) : (
          <div
            className={`grid grid-cols-2 col-span-10 sm:col-span-6
             bg-gray-100 dark:bg-gray-300 rounded-sm  min-w-32 pl-1 `}
          >
            {!joined && (
              <h3
                className={`col-span-full pl-2 pt-1 font-semibold text-rose-700 text-left`}
              >
                {author}
              </h3>
            )}
            <p className="pl-2 pb-1">{content}</p>
            <span className="text-xs place-self-end justify-en pb-1 pr-1">{`${createdAt.getHours()}:${createdAt.getMinutes()}`}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Message;
