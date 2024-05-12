import { createSlice } from "@reduxjs/toolkit";
import { Node } from "reactflow";
import {
  addNodeReducer,
  updateNodesReducer,
  updateSingleNodeReducer,
} from "../reducers/nodes.reducers";
export interface NodesState {
  nodes: Node[];
}

const initialState: NodesState = {
  nodes: [],
};

export const nodeSlice = createSlice({
  name: "nodes",
  initialState,
  reducers: {
    addNode: addNodeReducer,
    updateNodes: updateNodesReducer,
    updateSingleNode: updateSingleNodeReducer,
  },
});

export const { addNode, updateNodes, updateSingleNode } = nodeSlice.actions;
export default nodeSlice.reducer;
