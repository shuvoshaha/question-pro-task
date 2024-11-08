import { configureStore } from "@reduxjs/toolkit";
import postReducer from './slicers/postSlicer'
import userReducer from './slicers/userSlicer'
import commentReducer from './slicers/commentSlicer'


export const store: any = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
    comments: commentReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

