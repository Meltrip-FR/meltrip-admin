// Redux && Persist
import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export const initialState: any = {
  login: false,
  user: {
    id: undefined,
    username: "",
    civility: "",
    email: "",
    phone: "",
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
    login: (state: any, action: any) => {
      const load = action.payload;
      state.login = load.login;
      state.user.id = load.user?.id;
      state.user.username = load.user?.username;
      state.user.civility = load.user?.civility;
      state.user.email = load.user.email;
      state.user.phone = load.user.phone;
      state.user.terms = load.user.terms;
      state.user.newsletter = load.user.newsletter;
      state.user.roles = load.user.roles;
      state.user.accessToken = load.user.accessToken;
    },
    logout: (state: any) => {
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
