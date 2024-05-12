import { EDGE_STYLES, HANDLE_POSITIONS } from "@/app/constants/options";
import { createSlice } from "@reduxjs/toolkit";
import {
  updateEdgeStyleReducer,
  updateHandlePositionReducer,
} from "../reducers/options.reducers";
export interface Options {
  handlePosition: any;
  edgeStyle: any;
}

const initialState: Options = {
  handlePosition: HANDLE_POSITIONS[0],
  edgeStyle: EDGE_STYLES[0],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    updateHandlePosition: updateHandlePositionReducer,
    updateEdgeStyle: updateEdgeStyleReducer,
  },
});

export const { updateHandlePosition, updateEdgeStyle } = optionsSlice.actions;
export default optionsSlice.reducer;
