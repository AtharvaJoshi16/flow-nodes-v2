import { Button, ButtonProps } from "@mui/material";
import "./global.css";

export const AuthButton = (props: ButtonProps) => {
  return (
    <Button
      fullWidth
      sx={{
        backgroundColor: "#F4F4F4",
        color: "#000000",
        padding: "6px 30px",
        borderRadius: "50px",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: "18px",
        boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;",
      }}
      {...props}
    />
  );
};
