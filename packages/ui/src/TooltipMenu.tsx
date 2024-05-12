import { List, ListItemButton, Typography } from "@mui/material";
import { useState } from "react";

export interface TooltipMenuProps {
  option: any;
  options: any[];
  onSelect: (selected: any) => void;
}

export const TooltipMenu = ({
  option,
  options,
  onSelect,
}: TooltipMenuProps) => {
  const [selected, setSelected] = useState<any>(option);

  return (
    <List component="div">
      {options.map((option) => (
        <ListItemButton
          title={option.title}
          sx={{
            borderRadius: "5px",
          }}
          onClick={() => {
            setSelected(option);
            onSelect?.(option);
          }}
          selected={option.id === selected.id}
          id="menu button"
        >
          <Typography
            sx={{
              textTransform: "uppercase",
            }}
            variant="body1"
          >
            {option.component}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
};
