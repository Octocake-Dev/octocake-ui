import styled from "styled-components";
import { variant, buttonStyle } from "styled-system";

export const StyledButton = styled("button")(
  {
    cursor: "pointer",
    transition: "250ms ease-in-out",

    //
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "10px",
    //
  },

  variant({ prop: "scheme", scale: "buttons.schemes" }),
  variant({ prop: "size", scale: "buttons.sizes" }),

  buttonStyle
);
