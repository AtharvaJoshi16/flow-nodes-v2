"use client";
import { Logo } from "@flownodes/ui/logo";
import { CloudDoneRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import { LogOut, Menu as MenuIcon, UserCog } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { HeaderProps } from "../../../../types/components/header.types";
import { ROUTES } from "../../../../types/routes.enum";
import { HeaderButtons } from "../headerButtons/headerButtons";

export const HeaderMobile = ({
  path,
  data,
  status,
  canvasName,
  setCanvasName,
}: HeaderProps) => {
  const [menuOpen, setOpenMenu] = useState(false);
  const [showProfileOptions, setProfileOptions] = useState(false);
  const DrawerList = () => {
    return (
      <Box
        sx={{
          padding: "30px 15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          minWidth: "200px",
          maxWidth: "250px",
        }}
      >
        <List
          subheader="My Canvases"
          sx={{
            fontWeight: 600,
          }}
          className="text-slate-500 flex flex-col gap-[10px]"
        >
          <ListItem className="text-sm font-normal hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
            Web Development Roadmap
          </ListItem>
          <ListItem className="text-sm font-normal hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
            AI Roadmap
          </ListItem>
          <ListItem className="text-sm font-normal hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
            DSA Roadmap
          </ListItem>
          <ListItem className="text-sm font-normal hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
            Placement Preparation
          </ListItem>
        </List>
        <Divider />
        {path !== ROUTES.HOME && <HeaderButtons view="mobile" />}
      </Box>
    );
  };
  return (
    <Box
      sx={{
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 6px 10px #cccccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <IconButton size="medium" onClick={() => setOpenMenu(!menuOpen)}>
          <MenuIcon size={24} />
        </IconButton>
        <Drawer open={menuOpen} onClose={() => setOpenMenu(false)}>
          <DrawerList />
        </Drawer>
        <Logo image="/data-flow.png" />
      </Box>
      {path !== ROUTES.HOME && (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              onBlur={(t) => {
                console.log(t.currentTarget.innerText?.length);
                t.currentTarget.innerText?.length
                  ? setCanvasName(t.currentTarget.innerText)
                  : setCanvasName("Untitled");
              }}
              suppressContentEditableWarning
              contentEditable
              className="text-slate-500 whitespace-nowrap truncate text-center font-bold min-w-[150px] max-w-[200px]"
            >
              {canvasName}
            </div>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <CloudDoneRounded className="text-slate-500" />
              <Typography variant="body2" className="text-slate-500">
                Saved Just Now
              </Typography>
            </Box>
          </Box>
        </>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {status === "loading" ? (
          <CircularProgress size={24} />
        ) : (
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Avatar
              component="button"
              onClick={() => setProfileOptions(!showProfileOptions)}
              sx={{
                cursor: "pointer",
              }}
              className="mr-[30px]"
              src={data?.user?.image!}
              alt={data?.user?.name!}
            />
            <Popover
              sx={{
                "& .MuiPaper-root": {
                  top: "58px !important",
                  left: "auto !important",
                  right: "35px !important",
                },
              }}
              id="Profile-options"
              open={showProfileOptions}
              onClose={() => setProfileOptions(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <List
                className="text-slate-500"
                sx={{
                  padding: "5px 0",
                  width: "170px",
                }}
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 600,
                  }}
                >
                  My Profile
                  <UserCog size={20} />
                </ListItemButton>
                <ListItemButton
                  onClick={() => signOut()}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 600,
                  }}
                >
                  Logout
                  <LogOut size={20} />
                </ListItemButton>
              </List>
            </Popover>
          </Box>
        )}
      </Box>
    </Box>
  );
};
