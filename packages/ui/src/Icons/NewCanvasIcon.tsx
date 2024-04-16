import { DrawRounded } from "@mui/icons-material";

export const NewCanvasIcon = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient
        id="iconColor"
        x1={1}
        y1={0}
        x2={1}
        y2={1}
        gradientTransform="rotate(45)"
      >
        <stop offset="0%" stopColor="#4BC0C8" />
        <stop offset="50%" stopColor="#C779D0" />
        <stop offset="70%" stopColor="#FEAC5E" />
      </linearGradient>
    </svg>
    <DrawRounded
      sx={{
        fill: "url(#iconColor)",
        width: "85px",
        height: "85px",
      }}
    />
  </>
);
