import { PayloadAction } from "@reduxjs/toolkit";
import { Options } from "../slices/options.slice";

export const updateHandlePositionReducer = (
  state: Options,
  action: PayloadAction<any>
) => {
  state.handlePosition = action.payload;
};

export const updateEdgeStyleReducer = (
  state: Options,
  action: PayloadAction<any>
) => {
  state.edgeStyle = action.payload;
};
