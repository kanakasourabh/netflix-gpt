import React, { useState } from "react";
import VideoBackground from "./VideoBackground";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Watch = () => {
  const [id, setId] = useState();
  const { movieId } = useParams();
  setId(movieId);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/browse");
  };
  return (
    <div className="absolute">
      <button className="font-bold text-3xl" onClick={handleBackClick}>
        🔙
      </button>
      {/* <VideoBackground /> */}
    </div>
  );
};

export default Watch;
