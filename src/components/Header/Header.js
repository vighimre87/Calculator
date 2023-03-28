import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CalculateIcon from "@mui/icons-material/Calculate";

import { NavLink as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Header.css";

const drawerWidth = 240;
const navItems = [
  { label: "Home", href: "" },
  { label: "Calculator", href: "calculator" },
  { label: "Currency", href: "currency" },
  { label: "Units Converter", href: "units" }
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // retrieve the path from useLocation
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <CalculateIcon className="side-header-icon" />
      {/* <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem
            disablePadding
            key={item.label}
            className={
              splitLocation[1] === item.href ? "side-button active" : ""
            }
          >
            <ListItemButton
              sx={{ textAlign: "center" }}
              {...{ to: item.href, component: RouterLink }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",

        height: { xs: "56px", md: "64px" }
      }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#3F91BF" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <CalculateIcon className="header-icon" />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                className={
                  splitLocation[1] === item.href ? "header-button active" : ""
                }
                key={item.label}
                sx={{ color: "#fff" }}
                {...{
                  to: item.href,
                  component: RouterLink
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default DrawerAppBar;
