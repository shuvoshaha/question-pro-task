import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string,
  email: string,
}

const initialState: User = {
    name: 'Shuvo',
    email: 'shuvocsediu@gmail.com',
};

const slicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<any>) => {
        state.email = action.payload;
      },
  },
  
});

export const { setEmail, setName } = slicer.actions
export default slicer.reducer