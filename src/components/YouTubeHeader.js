/* eslint-disable no-unused-vars */
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  Box,
  InputAdornment,
  Badge,
  Avatar,
  Tooltip,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeLogo from "../assets/YoutubeLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicNoneIcon from "@mui/icons-material/MicNone";
import HomeIcon from "@mui/icons-material/Home";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShortsLogo from "../assets/ShortsLogo.png";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MovieIcon from "@mui/icons-material/Movie";
const YouTubeHeader = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box width="200px">
          <List disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 219, 219, 1)",
                },
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 219, 219, 1)",
                },
              }}
            >
              <ListItemIcon>
                <PlayArrowIcon />
              </ListItemIcon>
              <ListItemText>Shorts</ListItemText>
            </ListItemButton>
          </List>
          <Divider orientation="horizontal" fullWidth />
          <Typography variant="body1" p={2}>
            Subscriptions
          </Typography>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <Avatar src="https://yt3.googleusercontent.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s160-c-k-c0x00ffffff-no-rj"></Avatar>
            </ListItemIcon>
            <ListItemText>Akshay Saini</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <Avatar src="https://yt3.googleusercontent.com/dSkEwiYrGlZPE6t9irfN8RlpDlaU_n7u3oEnHxJIY_knycUXPzEVlFKbYtwzkcysNDVZPn5zmHg=s160-c-k-c0x00ffffff-no-rj"></Avatar>
            </ListItemIcon>
            <ListItemText>Take U Forward</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <Avatar src="https://yt3.googleusercontent.com/CZz3YkQI3pkX-F9yoNrKG1KDWWtcas4jXPcZ98ldQx6T-dGdo1t30kKKXHpZ4k4tjfEY4pskoQ=s160-c-k-c0x00ffffff-no-rj"></Avatar>
            </ListItemIcon>
            <ListItemText>Codevolution</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal"></Divider>
          <Typography variant="body1" p={2}>
            You
          </Typography>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <HistoryIcon></HistoryIcon>
            </ListItemIcon>
            <ListItemText>History</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <PlaylistPlayIcon />
            </ListItemIcon>
            <ListItemText>Playlists</ListItemText>
          </ListItemButton>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <ListItemIcon>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText>Watch Later</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText>Liked Videos</ListItemText>
          </ListItemButton>
          <Divider orientation="horizontal"></Divider>
          <Typography variant="body1" p={2}>
            Explore
          </Typography>
          <ListItemButton></ListItemButton>
          <ListItemButton></ListItemButton>
          <ListItemButton></ListItemButton>
          <ListItemButton></ListItemButton>
        </Box>
      </Drawer>
      <AppBar
        sx={{ bgcolor: "white", width: "100%", height: "60px" }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
            disableRipple
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Button href="/">
            <img src={YouTubeLogo} />
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "24px",
                },
                maxWidth: "550px",
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
              flexGrow: 1,
            }}
          ></Box>
          <SearchIcon
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          />
          <Tooltip title="Search with your Voice">
            <IconButton
              size="large"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(222, 219, 219, 1)",
                },
              }}
            >
              <MicNoneIcon />
            </IconButton>
          </Tooltip>
          <IconButton
            color="rgba(0, 0, 0, 1)"
            sx={{
              "&:hover": {
                backgroundColor: "rgba(222, 219, 219, 1)",
                borderRadius: "30px",
              },
            }}
          >
            <AddIcon fontSize="large" />
            <Typography
              variant="h6"
              color="rgba(0, 0, 0, 1)"
              fontSize="small"
              fontStyle="bold"
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Create
            </Typography>
          </IconButton>
          <IconButton sx={{ display: { xs: "none", sm: "block" } }}>
            <Badge badgeContent={5} color="primary">
              <NotificationsIcon fontSize="large" overlap="circular" />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar sx={{ bgcolor: "success.main" }}>D</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default YouTubeHeader;
