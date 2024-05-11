import { createSlice } from "@reduxjs/toolkit";
import { Edge } from "reactflow";
import { addEdgeReducer, updateEdgesReducer } from "../reducers/edges.reducers";
export interface EdgeState {
  edges: Edge[];
}

const initialState: EdgeState = {
  edges: [],
};

export const edgeSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {
    addEdge: addEdgeReducer,
    updateEdges: updateEdgesReducer,
  },
});

export const { addEdge, updateEdges } = edgeSlice.actions;
export default edgeSlice.reducer;
