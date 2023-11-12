import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EdgeState {
  backgroundColor: string;
  textColor: string;
  fontWeight: number;
  fontSize: number;
  borderRadius: number;
}

const initialState: EdgeState = {
  backgroundColor: "#f3f4f6",
  textColor: "black",
  fontWeight: 400,
  fontSize: 14,
  borderRadius: 24,
};

export const edgeSlice = createSlice({
  name: "edge",
  initialState,
  reducers: {
    setBackGroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    },
    setFontWeight: (state, action) => {
      state.fontWeight = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
    setBorderRadius: (state, action) => {
      state.borderRadius = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setBackGroundColor,
  setTextColor,
  setFontWeight,
  setFontSize,
  setBorderRadius,
} = edgeSlice.actions;

export default edgeSlice.reducer;
