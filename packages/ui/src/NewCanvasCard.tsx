import { Card, CardActionArea, CardContent } from "@mui/material";
import { NewCanvasIcon } from "./Icons/NewCanvasIcon";

export const NewBlankCanvasCard = () => {
  return (
    <Card
      sx={{
        width: "200px",
        height: "250px",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <NewCanvasIcon />
          {/* <Typography variant="h6" fontWeight={600}>
            Start Editing!
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
