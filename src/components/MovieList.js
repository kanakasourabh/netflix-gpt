import React from "react";
import MovieCard from "./MovieCard";
import ShimmerMovies from "../ShimmerCard/ShimmerMovies";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 scrollbar-hide">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies ? (
            movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))
          ) : (
            <ShimmerMovies />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
