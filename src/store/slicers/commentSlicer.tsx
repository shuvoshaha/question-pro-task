import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  comments: any[],
  posts: any[],
  loading: boolean,
  filterPosts: any[],
  value?: number
}

const initialState: Comment = {
  comments: [],
  posts: [],
  loading: false,
  filterPosts: [],
  value: 0
};

const slicer = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<any[]>) => {
      state.comments = action.payload;
    },
    setPosts: (state, action: PayloadAction<any[]>) => {
      state.posts = action.payload;
    },

    setFilterPosts: (state, action: PayloadAction<any[]>) => {
      state.filterPosts = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },


    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
  
});

export const { setComments, setPosts, setFilterPosts, setLoading, setValue } = slicer.actions
export default slicer.reducer