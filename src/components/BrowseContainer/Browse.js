import React, { useEffect } from 'react'
import Header from '../Header';
import useNowMovies from '../../hooks/useNowMovies';
import MainContainer from './mainContainer';
import RecommendConatiner from './recommendConatiner';

const Browse = () => {
  
  useNowMovies();
  
  return (
    <>
     <Header/>
     <MainContainer/>
     <RecommendConatiner/>
     </>
  )
}

export default Browse;