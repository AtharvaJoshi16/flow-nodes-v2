"use client";
import { AddRounded } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Node } from "reactflow";
import { v4 } from "uuid";
import { addNode } from "../redux/slices/nodes.slice";

export const Toolbar = () => {
  const dispatch = useDispatch();

  const addNodeHandler = () => {
    const newNode: Node = {
      id: v4().substring(0, 8),
      position: {
        x: Math.random() * 300,
        y: Math.random() * 300,
      },
      data: {
        label: "New Node",
      },
      type: "basic",
      draggable: true,
      dragging: true,
    };
    dispatch(addNode(newNode));
  };
  return (
    <Box
      className="bg-white border-2 rounded-lg"
      sx={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        zIndex: 1000,
        position: "absolute",
        left: "20px",
        top: "30%",
      }}
    >
      <Button
        variant="text"
        sx={{
          padding: "6px",
          minWidth: "auto",
        }}
        onClick={addNodeHandler}
      >
        <AddRounded className="text-slate-600" />
      </Button>
    </Box>
  );
};
