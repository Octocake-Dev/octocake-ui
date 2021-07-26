import React from "react";

import { StyledTag } from "./Tag.styles";
import { TagProps } from "../../types/tag";

const Tag = (props: TagProps) => {
  const {
    children,
    variant = "outline",
    size = "md",
    colorScheme = "primary",
  } = props;

  return (
    <StyledTag
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      {...props}
    >
      {children}
    </StyledTag>
  );
};

export default Tag;
