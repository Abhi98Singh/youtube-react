import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="px-2 border w-[400px] border-black bg-gray-100 rounded-t-lg  h-[500px] overflow-y-scroll flex flex-col-reverse">
        <h1 className="text-center font-bold text-lg  bg-slate-400">
          Live Chat
        </h1>

        {chatMessages.map((ch, index) => (
          <ChatMessage key={index} name={ch.name} message={ch.message} />
        ))}
      </div>
      <form
        className="w-full border border-black p-2 rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onSubmit form", liveMessage);
          dispatch(
            addMessage({
              name: "Abhishek",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-80 text-base pl-2 py-1 font-medium rounded-xl bg-gray-200 border border-gray-700"
        />
        <button className="border bg-green-500 px-3 py-1 rounded-lg ml-1">
          Chat
        </button>
      </form>
    </>
  );
};

export default LiveChat;
