import styled from "styled-components";
import {
  variant,
  compose,
  space,
  typography,
  layout,
  position,
  buttonStyle,
} from "styled-system";

import { ButtonProps, SystemProps } from "../../types/button";

export const StyledButton = styled("button")<ButtonProps & SystemProps>(
  {
    cursor: "pointer",
    transition: "250ms ease-in-out",
    fontFamily: "inherit",
    fontWeight: 600,
    borderRadius: "10px",
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
        fontSize: "14px",
        padding: "10px 20px",
      },

      md: {
        fontSize: "16px",
        padding: "12px 22px",
      },

      lg: {
        fontSize: "18px",
        padding: "14px 24px",
      },
    },
  }),

  compose(buttonStyle, space, typography, layout, position)
);
