import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieList;
