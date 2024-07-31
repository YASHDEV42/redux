import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  password: string;
  role: string;
  age: number;
  isLogged: boolean;
}

const initialState: UserState = {
  name: "",
  email: "",
  password: "",
  role: "user",
  age: 0,
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLogged = true;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      state.isLogged = false;
    },
    register: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.role = action.payload.role;
      state.age = action.payload.age;
      state.isLogged = true;
      console.log("you did register successfully");
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
