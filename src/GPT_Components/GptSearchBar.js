import React, { useRef } from "react";
import lang from "../utils/LaunguageContants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch(0);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTsearch = async () => {

    const gptQuery =
      "Act as a movie recommendation and suggest some movies for query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result gven ahead. Example result: Gadar, Don, Sholay, Golamal, Koi mil gya";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });


    const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");

    //for each movie need to search TMDB api

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieResults: tmdbResult, movieNames: gptMovies })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault(0)}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptPlaceholder}
        />
        <button
          className="py-2 px-4 my-4 md:m-4 bg-red-500 text-white rounded-lg col-span-3"
          onClick={handleGPTsearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
