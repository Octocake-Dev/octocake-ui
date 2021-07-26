import styled from "styled-components";
import { variant, buttonStyle } from "styled-system";

import { ButtonProps } from "../../types/button";

export const StyledButton = styled("button")<ButtonProps>(
  {
    cursor: "pointer",
    transition: "250ms ease-in-out",
    fontFamily: "inherit",

    //
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "10px",
    //
  },

  (props) =>
    variant({
      prop: "variant",
      variants: {
        primary: {
          border: "none",
          color: "white",
          backgroundColor: props.theme.colors.primary[400],

          ":hover": {
            backgroundColor: props.theme.colors.primary[500],
          },
          ":focus": {
            backgroundColor: props.theme.colors.primary[600],
            boxShadow: `0px 0px 0px 4px rgba(53,143,128,0.4)`,
          },
        },

        secondary: {},

        ghost: {},
      },
    }),

  variant({
    prop: "size",
    variants: {
      sm: {
        padding: "10px 20px",
      },

      md: {
        padding: "12px 22px",
      },

      lg: {
        padding: "14px 24px",
      },
    },
  }),

  buttonStyle
);
