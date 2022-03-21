import * as React from "react";
import { drawerWidth } from "../App";
import { Link } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { name: "Home", link: "/", icon: <InboxIcon /> },
              { name: "About", link: "/about", icon: <MailIcon /> },
            ].map((el, index) => (
              <Link to={el.link}>
                <ListItem button key={el.name}>
                  <ListItemIcon>{el.icon}</ListItemIcon>
                  <ListItemText primary={el.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
