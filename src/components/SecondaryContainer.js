import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerMovies from "../ShimmerCard/ShimmerMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies) return <ShimmerMovies />;

  return (
    <div className=" bg-black ">
      <div className="mt-0 md:-mt-52 pl-0 md:pl-4 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
