import { TurnSharpLeftRounded, TurnSharpLeftSharp } from "@mui/icons-material";
import {
  Move,
  MoveHorizontal,
  MoveVertical,
  Slash,
  Spline,
} from "lucide-react";

export const HANDLE_POSITIONS = [
  {
    id: 0,
    left: true,
    right: true,
    component: <MoveHorizontal size={16} />,
    title: "Horizontal",
  },
  {
    id: 1,
    top: true,
    bottom: true,
    component: <MoveVertical size={16} />,
    title: "Vertical",
  },
  {
    id: 2,
    left: true,
    right: true,
    top: true,
    bottom: true,
    component: <Move size={16} />,
    title: "Horizontal & Vertical",
  },
];

export enum EDGE_STYLES_ENUM {
  BEZIER = "simplebezier",
  SMOOTHSTEP = "smoothstep",
  STRAIGHT = "straight",
  STEP = "step",
}

export const EDGE_STYLES = [
  {
    id: 0,
    title: EDGE_STYLES_ENUM.BEZIER,
    style: EDGE_STYLES_ENUM.BEZIER,
    component: <Spline size={18} />,
  },
  {
    id: 1,
    title: EDGE_STYLES_ENUM.SMOOTHSTEP,
    style: EDGE_STYLES_ENUM.SMOOTHSTEP,
    component: (
      <TurnSharpLeftRounded
        sx={{
          width: "18px",
          height: "18px",
        }}
      />
    ),
  },
  {
    id: 2,
    title: EDGE_STYLES_ENUM.STRAIGHT,
    style: EDGE_STYLES_ENUM.STRAIGHT,
    component: <Slash size={18} />,
  },
  {
    id: 3,
    title: EDGE_STYLES_ENUM.STEP,
    style: EDGE_STYLES_ENUM.STEP,
    component: (
      <TurnSharpLeftSharp
        sx={{
          width: "18px",
          height: "18px",
        }}
      />
    ),
  },
];
