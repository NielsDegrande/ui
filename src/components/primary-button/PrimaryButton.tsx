import styled from "@emotion/styled";
import { Button } from "@mui/material";

import { Color } from "src/utils/colors";

export const PrimaryButton = styled(Button)`
  background-color: ${Color.PRIMARY};
  color: ${Color.TEXT};
  margin-top: 2vh;
  &:hover {
    background-color: ${Color.PRIMARY_SOFT};
    color: ${Color.TEXT_SOFT};
  }
`;
