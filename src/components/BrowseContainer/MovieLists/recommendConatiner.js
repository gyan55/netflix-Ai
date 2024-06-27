import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const RecommendConatiner = () => {
  const movies  = useSelector((store) => store.movies.nowPlayingMovies)
  return (
    <div>
      <MovieList title = {"Now playing"} movies = {movies}/>
    </div>
  )
}

export default RecommendConatiner;