import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const collapseSideBar = () => {
    dispatch(closeMenu());
  };
  useEffect(
    () => {
      collapseSideBar();
    }, // eslint-disable-next-line
    []
  );
  const [seacrhParams] = useSearchParams();
  const params = seacrhParams.get("v");
  //console.log(params);
  return (
    <div className="flex flex-col w-full">
      <div className="px-4 m-3 flex">
        <div>
          <iframe
            className="rounded-lg"
            width="640"
            height="400"
            src={
              "https://www.youtube.com/embed/" + params + "?si=zjvDtPjclk4GQz-j"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
