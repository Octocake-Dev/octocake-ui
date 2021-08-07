import React from "react";

import { StyledInput } from "./Input.styles";
import { InputProps } from "../../types/input";

const Input = (props: InputProps) => {
  const { variant = "primary", ...rest } = props;

  return <StyledInput variant={variant} {...rest} />;
};

export default Input;
