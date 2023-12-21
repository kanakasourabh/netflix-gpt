import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    playButton: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addtrailerVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
    enablePlayButton: (state) => {
      state.playButton = !state.playButton;
    },
  },
});

export const {
  addNowPlayingMovies,
  addtrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  enablePlayButton,
} = moviesSlice.actions;
export default moviesSlice.reducer;
