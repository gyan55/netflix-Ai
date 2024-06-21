import { useDispatch } from "react-redux";
import { movieSliceactions } from "../store/movies";
import { useEffect } from "react";
import axios from "axios";


const useNowMovies = () => {

 const dispatch = useDispatch();

  async function GetMovies() {
  

    const req = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1",{
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGI3MGY1MzhmYzgxZTc0NDNjMDMxMzQ5YzU5MDhkMyIsInN1YiI6IjYzYTE4ZjgyOGRkYzM0MTRhYTAyZDhmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i4lkFEQG4KfEU9l-c0tXKoi7PWMwg4v0DVglOs3FDcc'
    }});

    dispatch(movieSliceactions.addNowPlayingMovies(req.data.results))
    console.log("data",req.data.results);
  }
    useEffect(() => {
        GetMovies();
     },[])

  }

  export default useNowMovies;
