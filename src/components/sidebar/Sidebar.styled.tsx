import styled from "@emotion/styled";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export const DrawerHeader = styled(Box)<{ open: boolean }>`
  align-items: center;
  display: flex;
  justify-content: ${(props) => (props.open ? "space-between" : "center")};
  margin-left: ${(props) => (props.open ? "20px" : "0")};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledListItemButton = styled(ListItemButton)`
  padding-left: 20px;
  padding-right: 20px;
`;

export const StyledListItemIcon = styled(ListItemIcon)<{ open: boolean }>`
  justify-content: center;
  margin-right: ${(props) => (props.open ? "24px" : "0")};
  min-width: 0;
`;

export const StyledListItemText = styled(ListItemText)<{ open: boolean }>`
  opacity: ${(props) => (props.open ? 1 : 0)};
`;
