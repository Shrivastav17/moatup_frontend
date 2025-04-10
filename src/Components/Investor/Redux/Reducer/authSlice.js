import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // ✅ Stores the logged-in user
  users: [], // ✅ Stores all users (needed for filtering)
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("token", action.payload.token);
    },
    setUser: (state, action) => {
      state.user = action.payload; // ✅ Set logged-in user
    },
    setUsers: (state, action) => {
      state.users = action.payload; // ✅ Set all users
    },
    logout: (state) => {
      state.user = null;
      state.users = []; // ✅ Clear all users on logout
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, setUser, setUsers, logout } = authSlice.actions;
export default authSlice.reducer;