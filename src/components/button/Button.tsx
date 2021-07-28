import React from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "../../types/button";

const Button = (props: ButtonProps) => {
  const { children, size = "md", variant = "primary", ...rest } = props;

  return (
    <StyledButton size={size} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
