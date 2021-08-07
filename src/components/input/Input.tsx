import React from "react";

import { StyledInput } from "./Input.styles";
import { InputProps } from "../../types/input";

const Input = (props: InputProps) => {
  const { ...rest } = props;

  return <StyledInput {...rest} />;
};

export default Input;
