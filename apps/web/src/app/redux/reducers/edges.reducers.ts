import { PayloadAction } from "@reduxjs/toolkit";
import { Edge } from "reactflow";
import { EdgeState } from "../slices/edges.slice";

export const addEdgeReducer = (
  state: EdgeState,
  action: PayloadAction<Edge>
) => {
  state.edges.push(action.payload);
};

export const updateEdgesReducer = (
  state: EdgeState,
  action: PayloadAction<Edge[]>
) => {
  state.edges = action.payload;
};
