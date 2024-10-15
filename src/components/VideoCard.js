import React from "react";

const VideoCard = ({ vidInfo }) => {
  console.log(vidInfo);

  const { snippet, statistics } = vidInfo;

  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 mx-2 mb-2 mt-2 w-[320px] h-[325px] shadow-md">
      <img
        src={thumbnails?.medium?.url}
        alt="vid thumbnail"
        className="rounded-lg"
      />
      <h2 className="font-medium py-1">{title}</h2>
      <h3 className="text-gray-600 text-md pl-2 pb-1 font-semibold">
        {channelTitle} ☑️
      </h3>
      <h5 className="text-gray-600 text-md pl-2 pb-1">
        {statistics.viewCount} views
      </h5>
    </div>
  );
};

export default VideoCard;
