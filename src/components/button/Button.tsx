import React from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "../../types/button";

const Button = (props: ButtonProps) => {
  const { children, size = "sm", variant = "primary" } = props;

  return (
    <StyledButton size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
