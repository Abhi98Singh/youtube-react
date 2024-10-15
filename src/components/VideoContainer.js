import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import ShimmerVideoContainer from "./ShimmerVideoContainer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return videos.length === 0 ? (
    <ShimmerVideoContainer />
  ) : (
    <div className="flex flex-wrap  mt-3 justify-center">
      {videos.map((vidInfo) => (
        <Link to={"/watch?v=" + vidInfo.id} key={vidInfo.id}>
          {" "}
          <VideoCard vidInfo={vidInfo} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
