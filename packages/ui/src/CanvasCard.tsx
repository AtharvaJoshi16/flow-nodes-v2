import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardProps,
  IconButton,
  Typography,
} from "@mui/material";
import { Star, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";

interface CanvasCardProps extends CardProps {
  canvasId: string;
  title: string;
  isStarred?: boolean;
  onDelete: (canvasId: string) => void;
  onStar: (canvasId: string) => void;
  createdOn: string;
  updatedOn: string;
}

export const CanvasCard = ({
  canvasId,
  title,
  isStarred = false,
  onDelete,
  onStar,
  createdOn,
  updatedOn,
  ...props
}: CanvasCardProps) => {
  const [starred, setStarred] = useState<boolean>(isStarred);

  useEffect(() => {
    setStarred(isStarred);
  }, [isStarred]);

  return (
    <Card
      key={canvasId}
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
        disableRipple
      >
        <CardContent
          sx={{
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                borderRadius: "6px",
                padding: "6px",
                minWidth: "6px",
              }}
              variant="contained"
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(canvasId);
              }}
            >
              <Trash2Icon size={16} />
            </Button>
            <IconButton
              sx={{
                padding: "6px",
                minWidth: "6px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setStarred(!starred);
                onStar?.(canvasId);
              }}
            >
              <Star
                fill={starred ? "#ffb812" : "none"}
                color="#ffb812"
                size={16}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "72%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                marginTop: "10px",
              }}
              variant="h6"
              fontWeight={600}
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#b3b3b3",
                }}
                fontSize={12}
              >
                Created {createdOn} ago
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#b3b3b3",
                }}
                fontSize={12}
              >
                Updated {updatedOn} ago
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
