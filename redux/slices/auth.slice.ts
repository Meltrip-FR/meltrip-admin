//Redux && Persist
import { createSlice } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

export const initialState: any = {
  login: false,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: 0,
    terms: false,
    newsletter: false,
    roles: ["user"],
    accessToken: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const load = action.payload;
      state.login = load.login;
      state.user.id = load.id;
      state.user.firstname = load.firstname;
      state.user.lastname = load.lastname;
      state.user.email = load.email;
      state.user.phone = load.phone;
      state.user.address = load.address;
      state.user.city = load.city;
      state.user.zip = load.zip;
      state.user.terms = load.terms;
      state.user.newsletter = load.newsletter;
      state.user.roles = load.roles;
      state.user.accessToken = load.accessToken;
    },
    logout: (state) => {
      state.login = false;
      state.user.accessToken = "";
      storage.removeItem("persist:root");
      console.log("logout");
    },
  },
});

const { actions, reducer } = authSlice;
export const { login, logout } = actions;
export default reducer;
