import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(
    () => {
      const duration = setInterval(() => {
        // API polling
        //console.log("Checking API polling");

        dispatch(
          addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(16) + " 🚀",
          })
        );
      }, 600);
      return () => {
        clearInterval(duration);
      };
    }, // eslint-disable-next-line
    []
  );

  const [usermessage, setUserMessage] = useState("");

  return (
    <>
      <h1 className="font-bold mx-2">Live Chat</h1>
      <div className="w-[360px] h-[336px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} {...chat} />
          ))}
        </div>
      </div>
      <form
        className="w-[360px] pt-2 pb-1  ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "John Wick",
              message: usermessage,
            })
          );
          setUserMessage("");
        }}
      >
        <input
          className="px-2 ml-2 w-[278px] border border-black rounded-lg"
          type="text"
          value={usermessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 border  bg-green-100 rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
