import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
export const Logo = ({ image }: { image: string }) => {
  const isPhone = useMediaQuery({ minWidth: 360, maxWidth: 639 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        style={{
          width: "36px",
          height: "36px",
          maxWidth: "36px",
        }}
        src={image}
        alt="main-icon"
      />
      {!isPhone && !isTablet && (
        <Typography
          variant="h5"
          sx={{
            color: "#00237C",
          }}
          fontWeight={600}
        >
          Flow Nodes
        </Typography>
      )}
    </Box>
  );
};
