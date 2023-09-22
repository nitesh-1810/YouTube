import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 rounded-full"
        alt="user"
        src="https://yt4.ggpht.com/_G2BVMvcZH6lH3qcjNh1pdXxqNqe469D8t_5G7MmrIUol9vDtIyezQT3F5T1sWgV319cBN5Djg=s32-c-k-c0x00ffffff-no-rj"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
