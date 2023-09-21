import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics, id } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <Link to={"/watch?v=" + id}>
        <img
          className="rounded-lg"
          alt="thumbnails"
          src={thumbnails.medium.url}
        ></img>
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
