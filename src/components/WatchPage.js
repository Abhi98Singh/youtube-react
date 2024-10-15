import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full">
      <div className=" flex justify-center ">
        <div className="mt-7  mr-0 pr-0   ">
          <iframe
            className="rounded-lg"
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="   mt-7 ml-4">
          <LiveChat />
        </div>
      </div>
      <div className="grid grid-flow-col">
        <div className="col-start-2 col-span-8 mr-[400px]">
          <CommentsContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
