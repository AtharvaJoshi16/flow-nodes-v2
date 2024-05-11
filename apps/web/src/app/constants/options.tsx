import { Move, MoveHorizontal, MoveVertical } from "lucide-react";

export const HANDLE_POSITIONS = [
  {
    id: 0,
    left: true,
    right: true,
    component: <MoveHorizontal size={16} />,
  },
  {
    id: 1,
    top: true,
    bottom: true,
    component: <MoveVertical size={16} />,
  },
  {
    id: 2,
    left: true,
    right: true,
    top: true,
    bottom: true,
    component: <Move size={16} />,
  },
];
