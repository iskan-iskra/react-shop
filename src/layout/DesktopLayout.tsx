import {
  AppBar,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

type TiRoute = {
  path: string;
  title: string;
};

export default function DesktopLayout() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const listOfRoutes: TiRoute[] = [
    {
      path: "/",
      title: "main",
    },
    {
      path: "/products",
      title: "products",
    },
    {
      path: "/cart",
      title: "cart",
    },
    {
      path: "/about",
      title: "about",
    },
  ];

  return (
    <>
      <AppBar>
        <Toolbar component="nav">
          <ToggleButtonGroup
            color="primary"
            value={pathname}
            exclusive
            onChange={(_event, newValue) => navigate(newValue)}
          >
            {listOfRoutes.map((item, index) => (
              <ToggleButton value={item.path} key={index}>
                {item.title}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
