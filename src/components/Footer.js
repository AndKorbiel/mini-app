import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import { MyContext } from "../App";

function Footer() {
  const theme = useTheme();
  const context = useContext(MyContext);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          background: theme.palette.dark.primary,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {" "}
            <button onClick={() => context.action()}>
              Change global context
            </button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" sx={{ textAlign: "right" }}>
              Mini © 2022
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Footer;
