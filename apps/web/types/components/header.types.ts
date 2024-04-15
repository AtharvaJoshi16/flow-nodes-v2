import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  path?: string;
  data: any;
  status: string;
  canvasName: string;
  setCanvasName: Dispatch<SetStateAction<string>>;
}
