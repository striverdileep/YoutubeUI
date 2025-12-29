import React from "react";
import "./YouTubeHeader.css";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Drawer} from "@mui/material"
import { useState } from "react";
import { grey } from "@mui/material/colors";
const YouTubeHeader = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <div className="header">
      <Drawer
        open={openDrawer}
        onClose={() => {
          setopenDrawer(false);
        }}
      >
        <Box width="150px" p={3}>
          <IconButton>
            <div style={{display:"flex"}}>
              <HomeIcon/>
              <Typography>Home</Typography>
            </div>
          </IconButton>
        </Box>
      </Drawer>
      <div
        style={{
          alignSelf: "center",
        }}
      >
        <IconButton
          sx={{ marginLeft: "20px" }}
          onClick={() => {
            setopenDrawer(true);
            console.log(openDrawer);
          }}
        >
          <MenuIcon color="error.main" />
        </IconButton>
        <IconButton size="large">
          <YouTubeIcon color="red" />
          <Typography variant="h6">YouTube</Typography>
        </IconButton>
      </div>

      <div
        style={{
          flexGrow: 1,
          maxWidth: "1200px",
        }}
      >
        <TextField
          placeholder="search"
          sx={{
            flexGrow: 1,
            borderRadius: "24px",
            maxWidth: "700px",
            width: "700px",
            alignSelf: "center",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>

        <Tooltip title="Search with your Voice">
          <IconButton
            size="large"
            sx={{
              "&:hover": {
                backgroundColor: grey,
              },
            }}
          >
            <MicIcon />
          </IconButton>
        </Tooltip>
      </div>

      <Stack direction="row" spacing={2} alignSelf="center">
        <IconButton edge="start">
          <AddIcon color="action" />
          <Typography>Create</Typography>
        </IconButton>
        <Badge badgeContent={5} color="primary">
          <IconButton size="large">
            <NotificationsIcon />
          </IconButton>
        </Badge>
        <IconButton sx={{ alignSelf: "center" }}>
          <Avatar sx={{ bgcolor: "success.light" }}>D</Avatar>
        </IconButton>
      </Stack>
    </div>
  );
};

export default YouTubeHeader;
