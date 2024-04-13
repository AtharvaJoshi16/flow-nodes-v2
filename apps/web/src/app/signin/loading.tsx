import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <CircularProgress
      size={48}
      className="h-screen flex items-center justify-center"
    />
  );
}
