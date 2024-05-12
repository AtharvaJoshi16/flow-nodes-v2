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

export const updateSingleNodeReducer = (
  state: NodesState,
  action: PayloadAction<Node>
) => {
  const idx = state.nodes.findIndex((node) => node.id === action.payload.id);
  state.nodes[idx] = action.payload;
};
