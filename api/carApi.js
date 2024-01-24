import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const carApi = createApi({
    reducerPath:"carApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://0027-88-252-67-234.ngrok-free.app/api/Car/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            return headers;
          },
    }), 
    tagTypes:["car"],
    endpoints:(builder) => ({
        GetAllCar:builder.query({
            query:()=>({
                url:"GetAllCar"
            }),
            providesTags:["car"]
        }),
        GetCarById:builder.query({
            query:(id)=>({
                url:`GetCarById/${id}`  
            }),
            providesTags:["car"]
        }),
        createCar:builder.mutation({
            query:(carModel)=>({
                url:'CreateCar',
                method:"POST", 
                body:carModel
            }),
            invalidatesTags:["car"]
        }),
        removeCar:builder.mutation({
            query:(carId) => ({
                url:`DeleteCar/${carId}`,
                method:"POST",
            }),
            invalidatesTags:["car"]
        }),
        updateCar: builder.mutation({
            query: (model) => {
                console.log("updateCar query is called with carId:", model);
         
                return {
                    url: `UpdateCar/${model.selectedWillUpdateCar}`,
                    body: model.updateCarModel, 
                    method: 'PUT'
                };
            } ,
            invalidatesTags:["car"]
            
        }) 
        
    })
})


export const {useGetAllCarQuery,useGetCarByIdQuery,useCreateCarMutation,useRemoveCarMutation,useUpdateCarMutation} = carApi
export default carApi


