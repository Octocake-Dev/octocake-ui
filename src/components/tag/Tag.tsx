import React from "react";

import { StyledTag } from "./Tag.styles";
import { TagProps } from "../../types/tag";

const Tag = (props: TagProps) => {
  const {
    children,
    variant = "outline",
    size = "md",
    colorScheme = "primary",
    ...rest
  } = props;

  return (
    <StyledTag
      variant={variant}
      size={size}
      colorScheme={colorScheme}
      {...rest}
    >
      {children}
    </StyledTag>
  );
};

export default Tag;
