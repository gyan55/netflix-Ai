import userReducer from "./user";
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";


const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
            movies: moviesReducer
        }
    }
)

export default appStore;