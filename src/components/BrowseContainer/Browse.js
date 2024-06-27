import React, { useEffect } from 'react'
import Header from '../Header';
import useNowMovies from '../../hooks/useNowMovies';
import MainContainer from '../BrowseContainer/MainView/mainContainer';
import RecommendConatiner from '../BrowseContainer/MovieLists/recommendConatiner';

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