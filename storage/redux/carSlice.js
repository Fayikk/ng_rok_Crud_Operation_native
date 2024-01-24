import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    cars:[],
    vehicleId:"",
}



export const carSlice = createSlice({
    name:"car",
    initialState:initalState,
    reducers:{
        getAllCar:(state,action) => {
            state.cars = action.payload
        },
        getCar:(state,action) => {
            state.vehicleId = action.payload
        }

    }
})


export const {getAllCar,getVehicle} = carSlice.actions
export const carReducer = carSlice.reducer