"use client";
import { TooltipMenu } from "@flownodes/ui/tooltip-menu";
import { AddRounded, ControlCameraRounded } from "@mui/icons-material";
import { Box, Button, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Node } from "reactflow";
import { v4 } from "uuid";
import { EDGE_STYLES, HANDLE_POSITIONS } from "../constants/options";
import { addNode } from "../redux/slices/nodes.slice";
import {
  updateEdgeStyle,
  updateHandlePosition,
} from "../redux/slices/options.slice";
import { RootState } from "../redux/store";

export const Toolbar = () => {
  const dispatch = useDispatch();
  const handlePosition = useSelector(
    (state: RootState) => state.options.handlePosition
  );
  const edgeStyle = useSelector((state: RootState) => state.options.edgeStyle);
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
        flexDirection: "column",
        gap: "4px",
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
      <Tooltip
        title={
          <TooltipMenu
            onSelect={(selected) => {
              dispatch(updateHandlePosition(selected));
            }}
            option={handlePosition}
            options={HANDLE_POSITIONS}
          />
        }
        arrow
        placement="right"
      >
        <Button
          variant="text"
          sx={{
            padding: "6px",
            minWidth: "auto",
          }}
        >
          <ControlCameraRounded className="text-slate-600" />
        </Button>
      </Tooltip>
      <Tooltip
        title={
          <TooltipMenu
            onSelect={(selected) => {
              dispatch(updateEdgeStyle(selected));
            }}
            option={edgeStyle}
            options={EDGE_STYLES}
          />
        }
        arrow
        placement="right"
      >
        <Button
          variant="text"
          sx={{
            padding: "6px",
            minWidth: "auto",
          }}
        >
          {edgeStyle.component}
        </Button>
      </Tooltip>
    </Box>
  );
};
