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
        <Box width="150px" padding={3} paddingTop={1}>
          <List>
            <ListItem>
              <Button
                color="inherit"
                sx={{
                  width: "150px",
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{textAlign:"left"}}>Home</ListItemText>
              </Button>
            </ListItem>
            <ListItem></ListItem>
          </List>
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
          <Box sx={{ flexGrow: 1 }}>
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
            >
              Create
            </Typography>
          </IconButton>
          <IconButton>
            <Badge badgeContent={5} color="primary">
              <NotificationsIcon fontSize="large" />
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
