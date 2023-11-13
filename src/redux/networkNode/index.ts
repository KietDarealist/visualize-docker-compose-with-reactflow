import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NetworkNodeState {
  backgroundColor: string;
  textColor: string;
  fontWeight: number;
  fontSize: number;
  borderRadius: number;
}

const initialState: NetworkNodeState = {
  backgroundColor: "#f3f4f6",
  textColor: "black",
  fontWeight: 400,
  fontSize: 14,
  borderRadius: 0,
};

export const networkNodeSlice = createSlice({
  name: "networkNode",
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
} = networkNodeSlice.actions;

export default networkNodeSlice.reducer;
