import { createSlice } from "@reduxjs/toolkit";

//INITIAL STATE FOR USER
export const initialState = {
    email: "emre.kzltprkk@gmail.com",
    password: "12345",
    token: null
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    setToken: (state, action) => {
      state.token = action.token;
    },

    userReducer: (state, action) => {

      console.log("REDUCER IS WORKING");

      console.log("ACTION TYPE", action.payload.type);

      switch (action.payload.type) {
        
        case "SET_TOKEN": {
          console.log("action.type");
          return {
            ...state,
            token: action.payload.token,
          };
        }

        case "SET_USEREMAIL":
          return {
            ...state,
            email: action.payload.email,
          };

        case "SET_PASSWORD":
          return {
            ...state,
            password: action.payload.password,
          };

        default:
          return state;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
