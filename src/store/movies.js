import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
        nowPlayingMovies: null,
        trailer:null,
        bgMovieId:null
    },
    reducers:{
      addNowPlayingMovies : (state,action) => {
        state.nowPlayingMovies = action.payload;
      },
      addTrailer : (state,action) => {
        state.trailer = action.payload;
      },
      addBgMovieId : (state,action) =>{
        state.bgMovieId = action.payload;
      }
    }
});
export const movieSliceactions = movieSlice.actions;
export default movieSlice.reducer;
