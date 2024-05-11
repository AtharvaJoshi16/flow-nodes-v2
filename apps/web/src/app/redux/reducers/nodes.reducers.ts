import { PayloadAction } from "@reduxjs/toolkit";
import { Node } from "reactflow";
import { NodesState } from "../slices/nodes.slice";

export const addNodeReducer = (
  state: NodesState,
  action: PayloadAction<Node>
) => {
  state.nodes.push(action.payload);
};

export const updateNodesReducer = (
  state: NodesState,
  action: PayloadAction<Node[]>
) => {
  state.nodes = action.payload;
};
