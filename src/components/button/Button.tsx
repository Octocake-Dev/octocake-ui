import React from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "@/types/button";

// TODO: replace scheme => variant
const Button = (props: ButtonProps) => {
  const { children, size = "sm", scheme = "primary" } = props;

  return (
    <StyledButton size={size} scheme={scheme} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
