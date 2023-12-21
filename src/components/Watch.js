import React from "react";
import VideoBackground from "./VideoBackground";
// import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const Watch = () => {
  // const [id, setId] = useState();
  const { movieId } = useParams();
  // setId(movieId);
  // const navigate = useNavigate();
  // const handleBackClick = () => {
  //   navigate("/browse");
  // };
  return (
    <div className="absolute bg-black pb-5">
      <Link to="/browse">
        <button className="font-bold text-3xl">🔙</button>
      </Link>
      <VideoBackground movieId={movieId} />
    </div>
  );
};

export default Watch;
