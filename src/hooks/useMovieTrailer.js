import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Api_Options } from '../utils/constants';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { movieSliceactions } from '../store/movies';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    console.log(movieId,"llll")
    const getMovieVideos = async () => {
        
        const req = await axios.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",Api_Options);
       
       const videos = req.data.results;
       const trailers = videos.filter(video => video.type === "Trailer");
       const trailer = trailers.length ?trailers[0]:videos[0]
      
       dispatch(movieSliceactions.addTrailer(trailer));
    }

    useEffect(() =>{
      getMovieVideos();
    },[]);
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;
