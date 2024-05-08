import { useState } from "react";

import {
  ChevronLeft as ChevronLeftIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";
import {
  Typography,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { CSSObject, Theme, styled as muiStyled } from "@mui/material/styles";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

import {
  DrawerHeader,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "src/components/sidebar/Sidebar.styled";
import { logOut } from "src/utils/authentication";
import { Path } from "src/utils/paths";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = muiStyled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

/**
 * Renders the sidebar component.
 *
 * @returns The sidebar component.
 */
const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader open={open}>
        {open ? (
          <Typography variant="h5">{t("shared.app_name")}</Typography>
        ) : null}
        <IconButton onClick={toggleOpen}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem key={"home"} disablePadding>
          <StyledListItemButton
            onClick={() => {
              navigate(Path.HOME);
            }}
          >
            <StyledListItemIcon open={open}>
              <HomeIcon />
            </StyledListItemIcon>
            <StyledListItemText open={open} primary={t("shared.home")} />
          </StyledListItemButton>
        </ListItem>
        <ListItem key={"products"} disablePadding>
          <StyledListItemButton
            onClick={() => {
              navigate(Path.PRODUCTS);
            }}
          >
            <StyledListItemIcon open={open}>
              <CategoryIcon />
            </StyledListItemIcon>
            <StyledListItemText open={open} primary={t("shared.products")} />
          </StyledListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"logout"} disablePadding>
          <StyledListItemButton
            onClick={() => {
              logOut(navigate);
            }}
          >
            <StyledListItemIcon open={open}>
              <LogoutIcon />
            </StyledListItemIcon>
            <StyledListItemText open={open} primary={t("sidebar.logout")} />
          </StyledListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
