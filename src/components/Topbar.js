import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../App";

function Topbar() {
  const context = useContext(MyContext);

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, flexGrow: 1, textAlign: "left" }}
        >
          Mini App
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ mr: 2, flexGrow: 1, textAlign: "left" }}
        >
          Global context count: {context.count}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
