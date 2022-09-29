import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Buffer } from "buffer";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://test001.testnet.mobiliz.com.tr/interview",

    prepareHeaders: (headers, { getState }) => {
      const email = getState().userSlice.email;
      const password = getState().userSlice.password;

      headers.set(
        "authorization",
        `Basic ${new Buffer.from(email + ":" + password).toString("base64")}`
      );

      return headers;
    },
  }),

  tagTypes: ["user", "cars", "models", "modelWBrand", "locations"],

  endpoints: (builder) => ({
    //USER API FUNCTION FOR LOGIN
    doLogin: builder.mutation({
      query: (e) => ({
        url: "/login",
        method: "POST",
        body: e,
        providesTags: ["user"],
      }),
    }),

    // TODO: GET CARS
    getCars: builder.query({
      query: () => "/vehicles",
      providesTags: ["cars"],
    }),

    // TODO: GET CARS FILTER
    carFilter: builder.query({
      query: (params) => ({
        url: "/vehicles",
        providesTags: ["cars"],
        params: {
          plate: params.plate,
          brand: params.brand,
          model: params.model,
        },
      }),
    }),

    // TODO: GET CARS WITH ID
    getCarsWithID: builder.query({
      query: (id) => `/vehicles/${id}`,
      providesTags: ["cars"],
    }),

    // TODO: ADD A CAR
    addCar: builder.mutation({
      query: (car) => ({
        url: "/vehicles",
        method: "POST",
        body: car,
        invalidatesTags: ["cars"],
      }),
    }),

    //TODO: UPDATE CAR
    updateCar: builder.mutation({
      query: (car) => ({
        url: `/vehicles/${car.id}`,
        method: "PUT",
        body: car,
      }),
      invalidatesTags: ["cars"],
    }),

    //TODO: DELETE CAR
    deleteCar: builder.mutation({
      query: (id) => ({
        url: `/vehicles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),

    // TODO: GET MODELS
    getModels: builder.query({
      query: () => "/models",
      method: "GET",
      providesTags: ["models"],
    }),

    // TODO: GET MODELS
    getModelsWBrand: builder.query({
      query: (brand) => `/models/brand/${brand}`,
      method: "GET",
      providesTags: ["models"],
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }),

    // TODO: GET MODELS
    getLocations: builder.query({
      query: () => "/locations",
      method: "GET",
      providesTags: ["locations"],
    }),
  }),
});

export const {
  useDoLoginMutation,
  useGetCarsQuery,
  useCarFilterQuery,
  useGetCarsWithIDQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useGetModelsQuery,
  useGetModelsWBrandQuery,
  useGetLocationsQuery
} = apiSlice;
