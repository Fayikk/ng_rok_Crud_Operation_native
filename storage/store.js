import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./redux/carSlice";
import carApi from "../api/carApi";

export const store = configureStore({
    reducer:{
        carStore:carReducer,
        

        [carApi.reducerPath] : carApi.reducer

    },middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(carApi.middleware)
})



