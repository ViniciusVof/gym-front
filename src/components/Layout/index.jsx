import * as React from "react";
import * as Components from "@mui/material";
import * as Icons from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";

const drawerWidth = 240;

export default function ClippedDrawer({ children }) {
  const navigate = useNavigate();
  const { logoutUser } = useUser();

  const routes = [
    {
      icon: <Icons.Home />,
      label: "Página Inicial",
      action: () => navigate("/"),
    },
    {
      icon: <Icons.Receipt />,
      label: "Recibos",
      action: () => navigate("/receipts"),
    },
    {
      icon: <Icons.SportsGymnastics />,
      label: "Professores",
      action: () => navigate("/teachers"),
    },
    {
      icon: <Icons.Person />,
      label: "Usuários",
      action: () => navigate("/users"),
    },
    {
      icon: <Icons.Logout />,
      label: "Sair",
      action: () => logoutUser(),
    },
  ];
  return (
    <Components.Box sx={{ display: "flex" }}>
      <Components.AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Components.Toolbar>
          <Components.Typography variant="h6" noWrap component="div">
            GymFull
          </Components.Typography>
        </Components.Toolbar>
      </Components.AppBar>
      <Components.Drawer
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
        <Components.Toolbar />
        <Components.Box sx={{ overflow: "auto" }}>
          <Components.List>
            {routes.map((route) => (
              <Components.ListItem
                key={route.label}
                disablePadding
                onClick={route.action}
              >
                <Components.ListItemButton>
                  <Components.ListItemIcon>
                    {route.icon}
                  </Components.ListItemIcon>
                  <Components.ListItemText primary={route.label} />
                </Components.ListItemButton>
              </Components.ListItem>
            ))}
          </Components.List>
        </Components.Box>
      </Components.Drawer>
      <Components.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Components.Toolbar />
        {children}
      </Components.Box>
    </Components.Box>
  );
}
