import { Card, CardActionArea, CardContent, CardProps } from "@mui/material";
import { NewCanvasIcon } from "./Icons/NewCanvasIcon";

export const NewBlankCanvasCard = (props: CardProps) => {
  return (
    <Card
      sx={{
        width: "200px",
        height: "250px",
      }}
      {...props}
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
