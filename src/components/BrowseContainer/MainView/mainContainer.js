import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from '../MainView/videoTitle';
import VideoBg from '../MainView/videoBg';

const MainContainer = () => {

 const movies = useSelector((store) => store.movies?.nowPlayingMovies);
 
 if(movies === null) return;
 const BgMovie = movies[0];

 



  return (
    <div>
     <VideoTitle BgMovie = {BgMovie} />
     <VideoBg movieId = {BgMovie.id}/>
    </div>
  )
}

export default MainContainer