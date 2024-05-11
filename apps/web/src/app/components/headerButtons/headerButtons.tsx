import { Box, Button } from "@mui/material";
import { Download, Save, Share2 } from "lucide-react";

export const HeaderButtons = ({ view }: { view: "mobile" | "desktop" }) => {
  const MobileButtons = () => (
    <>
      <Button
        fullWidth
        sx={{
          padding: "4px 20px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        variant="contained"
        size="small"
        color="success"
        endIcon={<Save size={16} />}
      >
        Save
      </Button>
      <Button
        fullWidth
        sx={{
          padding: "4px 20px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        variant="contained"
        size="small"
        endIcon={<Share2 size={16} />}
      >
        Share
      </Button>
      <Button
        fullWidth
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#c144fc",
          "&:hover": {
            backgroundColor: "#9c00e6",
          },
          padding: "4px 20px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
        }}
        variant="contained"
        size="small"
        endIcon={<Download size={16} />}
      >
        Export
      </Button>
    </>
  );

  const DesktopButtons = () => (
    <Box
      sx={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        marginRight: "40px",
      }}
    >
      <Button
        sx={{
          width: "100px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
        }}
        variant="contained"
        size="small"
        color="success"
        endIcon={<Save size={16} />}
      >
        Save
      </Button>

      <Button
        sx={{
          width: "100px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
        }}
        variant="contained"
        size="small"
        endIcon={<Share2 size={16} />}
      >
        Share
      </Button>
      <Button
        sx={{
          width: "100px",
          color: "#fff",
          fontSize: "16px",
          textTransform: "capitalize",
        }}
        variant="contained"
        size="small"
        endIcon={<Download size={16} />}
      >
        Export
      </Button>
    </Box>
  );

  return view === "mobile" ? <MobileButtons /> : <DesktopButtons />;
};
