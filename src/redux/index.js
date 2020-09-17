import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import Axios from "axios";
export const fetch = createAsyncThunk("fetch/Posts", async (id, thunkApi) => {
  const posts = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  return posts.data;
});
const postSlice = createSlice({
  name: "Posts",
  initialState: {},
  extraReducers: {
    [fetch.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
  },
});

export const store = configureStore({ reducer: postSlice.reducer });
