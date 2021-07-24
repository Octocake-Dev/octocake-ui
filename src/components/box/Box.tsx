import React from "react";

import { StyledBox } from "./Box.styles";
import { BoxProps } from "src/types/box";

const Box = ({ children, ...props }: BoxProps) => (
  <StyledBox {...props}>{children}</StyledBox>
);

export default Box;
