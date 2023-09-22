import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videoData = await data.json();
    //console.log(videoData.items);
    setVideo(videoData.items);
  };
  return (
    <div className="flex flex-wrap">
      {video.map((item) => (
        <VideoCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
