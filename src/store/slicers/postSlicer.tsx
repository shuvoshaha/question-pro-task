import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Post {
  posts: any[],
  users: any[],
  loading: boolean,
  filterPosts: any[],
  value?: number

}

const initialState: Post = {
  posts: [],
  users: [],
  loading: false,
  filterPosts: [],
  value: 0
};

const slicer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },

    setFilterPosts: (state, action: PayloadAction<any[]>) => {
      state.filterPosts = action.payload;
    },

    setUsers: (state, action: PayloadAction<any[]>) => {
      state.users = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },


    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
  
});

export const { setPosts, setFilterPosts, setLoading, setUsers, setValue } = slicer.actions
export default slicer.reducer