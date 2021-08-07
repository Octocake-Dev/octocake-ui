import React from "react";

import { StyledInput } from "./Input.styles";
import { InputProps } from "../../types/input";

const Input = (props: InputProps) => {
  const { variant = "primary", error, ...rest } = props;

  return (
    <StyledInput
      placeholder="Enter email address"
      variant={variant}
      {...rest}
    />
  );
};

export default Input;
