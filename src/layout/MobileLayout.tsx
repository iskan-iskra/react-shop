import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useThemeContext } from "@use";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import StoreIcon from "@mui/icons-material/Store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function MobileLayout() {
  const { pathname } = useLocation();

  const { toggleMode, mode, themeMode } = useThemeContext();

  const [activeRoute, setActiveRoute] = useState<string>(pathname);

  const [extraMenu, setExtraMenu] = useState(false);

  const listOfThemeMode: Array<typeof mode> = ["light", "dark", "system"];

  return (
    <>
      <main>
        <Outlet />
      </main>

      <BottomNavigation
        sx={{ minHeight: "56px", maxHeight: "56px", height: "56px" }}
        showLabels
        value={activeRoute}
        onChange={(_event, newValue) => {
          setActiveRoute(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="main"
          value="/"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/products"
          label="products"
          value="/products"
          icon={<StoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/cart"
          label="cart"
          value="/cart"
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction
          label="menu"
          onClick={() => {
            setExtraMenu(true);
            setActiveRoute(activeRoute);
          }}
          icon={<MenuIcon />}
        />
      </BottomNavigation>

      <Drawer
        anchor="bottom"
        open={extraMenu}
        onClose={() => setExtraMenu(false)}
      >
        <List>
          <ListItemButton
            component={Link}
            selected={activeRoute === "/about"}
            to="/about"
            onClick={() => {
              setExtraMenu(false);
              setActiveRoute("/about");
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="about" />
          </ListItemButton>

          <ListItem>
            <ListItemIcon>
              {(themeMode === "dark" && <DarkModeIcon />) ||
                (themeMode === "light" && <LightModeIcon />)}
            </ListItemIcon>
            <ListItemText primary="theme" />
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={(_event, newValue) => toggleMode(newValue)}
            >
              {listOfThemeMode.map((item, index) => (
                <ToggleButton value={item} key={index}>
                  {item}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
