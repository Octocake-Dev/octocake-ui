import React from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "src/types/button";

// TODO: replace scheme => variant
const Button = (props: ButtonProps) => {
  const { children, type = "button", size = "sm", scheme = "primary" } = props;

  return (
    <StyledButton type={type} size={size} scheme={scheme} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
