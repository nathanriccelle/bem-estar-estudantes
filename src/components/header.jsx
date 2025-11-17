import React from "react";
import "./header.css";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link as RouterLink, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FaHome } from "react-icons/fa";
import { GiConqueror } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation().pathname;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Divider />
      <br />
      <List>
        {[
          { icon: <FaHome size={28} />, text: "Home", url: "/home" },
          {
            icon: <GiConqueror size={28} />,
            text: "Conquistas",
            url: "/conquistas",
          },
          {
            icon: <GiMeditation size={28} />,
            text: "Respiração",
            url: "/respiracao",
          },
          {
            icon: <HiOutlineSpeakerphone size={28} />,
            text: "Mural",
            url: "/mural",
          },
          { icon: <IoCloseSharp size={28} />, text: "Sair", url: "/" },
        ].map(({ icon, text, url }, index) => (
          <ListItem key={text}>
            <ListItemButton component={RouterLink} to={url}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="cabecalho-container">
      <div>
        {location !== "/home" && location !== "/" && (
          <IconButton size="large" component={RouterLink} to="/home">
            <FaHome size={28} />
          </IconButton>
        )}

        <IconButton size="large" onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </div>

      <IconButton size="large">
        <NotificationsIcon fontSize="large" />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </header>
  );
}

export default Header;
