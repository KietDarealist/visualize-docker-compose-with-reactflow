import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EdgeState {
  color: string;
  thickness: number;
}

const initialState: EdgeState = {
  color: "black",
  thickness: 10,
};

export const edgeSlice = createSlice({
  name: "edge",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setThickness: (state, action) => {
      state.thickness = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColor, setThickness } = edgeSlice.actions;

export default edgeSlice.reducer;
