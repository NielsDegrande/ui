import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { Color } from "src/utils/colors";

export const LoginImage = styled.img`
  height: 16vh;
  max-height: 128px;
`;

export const WelcomeText = styled(Typography)`
  color: ${Color.TEXT_BACKGROUND};
  margin-top: 2vh;
`;

export const AppNameText = styled(Typography)`
  color: ${Color.PRIMARY};
  margin-bottom: 4vh;
`;
