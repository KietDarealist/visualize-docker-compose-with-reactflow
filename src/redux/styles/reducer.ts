import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StylesState {
  serviceNodeStyle: string;
  networkNodeStyle: string;
  volumeNodeStyle: string;
  portNodeStyle: string;
  edgeStyle: string;
}

const initialState: StylesState = {
  serviceNodeStyle: "",
  networkNodeStyle: "",
  volumeNodeStyle: "",
  portNodeStyle: "",
  edgeStyle: "",
};

export const stylesSlice = createSlice({
  name: "styles",
  initialState,
  reducers: {
    setServiceNodeStyle: (state, action) => {
      state.serviceNodeStyle = action.payload;
    },
    setNetworkNodeStyle: (state, action) => {
      state.networkNodeStyle = action.payload;
    },
    setVolumeNodeStyle: (state, action) => {
      state.volumeNodeStyle = action.payload;
    },
    setPortNodeStyle: (state, action) => {
      state.portNodeStyle = action.payload;
    },
    setEdgeStyle: (state, action) => {
      state.edgeStyle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setServiceNodeStyle } = stylesSlice.actions;

export default stylesSlice.reducer;
