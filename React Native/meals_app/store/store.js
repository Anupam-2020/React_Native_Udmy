import { configureStore } from "@reduxjs/toolkit";
import { favouriteReducers } from "./favourites";


const store = configureStore({
    reducer: {
        favourite: favouriteReducers
    }
})

export default store;