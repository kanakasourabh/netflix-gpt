import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_LOGO } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND_LOGO} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
