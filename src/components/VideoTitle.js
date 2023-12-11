import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <p className="font-bold text-3xl">{title}</p>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="p-4 bg-white text-black px-12 text-xl hover:bg-opacity-80 rounded-lg">
          ▶️Play
        </button>
        <button className="mx-2 p-4 bg-gray-500 text-white px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
