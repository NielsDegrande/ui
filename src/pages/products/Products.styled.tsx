import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { Color } from "src/utils/colors";

export const Container = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.main`
  display: grid;
  flex-grow: 1;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(0px, 250px));
  justify-content: center;
  padding-bottom: 64px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 64px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(0px, 150px));
  }
`;

export const Card = styled(Box)`
  background-color: ${Color.PRIMARY_SOFT};
  max-height: 128px;
  padding: 1rem;
`;
