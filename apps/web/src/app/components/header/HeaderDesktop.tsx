"use client";
import { Logo } from "@flownodes/ui/logo";
import { CloudDoneRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import { ChevronDown, Download, LogOut, Share2, UserCog } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { HeaderProps } from "../../../../types/components/header.types";
import { ROUTES } from "../../../../types/routes.enum";

export const HeaderDesktop = ({
  path,
  data,
  status,
  canvasName,
  setCanvasName,
}: HeaderProps) => {
  const [showProfileOptions, setProfileOptions] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 6px 10px #cccccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Logo image="/data-flow.png" />

        <Typography
          onClick={(e) => setAnchorEl(e.currentTarget)}
          component="div"
          variant="body1"
          className="text-slate-500 cursor-pointer hover:text-slate-700 flex items-center gap-[10px]"
        >
          My Canvases
          <ChevronDown
            className="text-slate-500 hover:text-slate-700"
            strokeWidth={3.5}
            size={16}
          />
        </Typography>
        <Popover
          sx={{
            "& .MuiPaper-root": {
              top: "65px !important",
              left: "200px !important",
            },
          }}
          anchorEl={anchorEl}
          id="Profile-options"
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <List
            className="text-slate-500"
            sx={{
              padding: "5px 0",
              maxWidth: "500px",
            }}
          >
            <ListItemButton className="my-1 font-bold text-sm">
              All Canvases
            </ListItemButton>
            <Divider />
            <ListItem className="text-sm hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
              Web Development Roadmap
            </ListItem>
            <ListItem className="text-sm hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
              AI Roadmap
            </ListItem>
            <ListItem className="text-sm hover:underline cursor-pointer text-slate-500 hover:text-slate-800">
              Placement Preparation
            </ListItem>
          </List>
        </Popover>
      </Box>
      {path !== ROUTES.HOME && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              onBlur={(t) => {
                t.currentTarget.innerText?.length
                  ? setCanvasName(t.currentTarget.innerText)
                  : setCanvasName("Untitled");
              }}
              contentEditable
              suppressContentEditableWarning
              className="text-slate-500 whitespace-nowrap truncate text-center font-bold min-w-[150px] max-w-[400px]"
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
        {path !== ROUTES.HOME && (
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
              endIcon={<Share2 size={16} />}
            >
              Share
            </Button>
            <Button
              sx={{
                backgroundColor: "#c144fc",
                "&:hover": {
                  backgroundColor: "#9c00e6",
                },
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
        )}
        {status === "loading" ? (
          <CircularProgress className="mr-[30px] w-[40px] h-[40px] p-2" />
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
                  top: "65px !important",
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
