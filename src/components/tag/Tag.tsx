import React from "react";

import { StyledTag } from "./Tag.styles";
import { TagProps } from "../../types/tag";

const Tag = (props: TagProps) => {
  const { children, size = "md", colorScheme = "primary" } = props;

  return (
    <StyledTag size={size} colorScheme={colorScheme} {...props}>
      {children}
    </StyledTag>
  );
};

export default Tag;
