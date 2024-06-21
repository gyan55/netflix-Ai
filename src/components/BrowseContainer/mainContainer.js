import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './videoTitle';
import VideoBg from './videoBg';

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