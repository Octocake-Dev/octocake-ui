import styled from "styled-components";
import { variant, buttonStyle } from "styled-system";

import { ButtonProps } from "@/types/button";

export const StyledButton = styled("button")<ButtonProps>(
  {
    cursor: "pointer",
    transition: "250ms ease-in-out",

    //
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "10px",
    //
  },

  variant({ prop: "variant", scale: "buttons.variants" }),
  variant({ prop: "size", scale: "buttons.sizes" }),

  buttonStyle
);
