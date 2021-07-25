import React from "react";

import { StyledTag } from "./Tag.styles";
import { TagProps } from "../../types/tag";

const Tag = ({ children, ...props }: TagProps) => (
  <StyledTag {...props}>{children}</StyledTag>
);

export default Tag;
