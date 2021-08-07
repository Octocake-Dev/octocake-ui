import { variant } from "styled-system";
import styled from "styled-components";

import { TagProps } from "../../types/tag";

export const StyledTag = styled("span")<TagProps>(
  {
    borderRadius: "5px",
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    fontSize: "15px",
    fontWeight: 500,
  },

  ({ theme: { colors }, variant: Variant }) =>
    variant({
      prop: "colorScheme",
      variants: {
        primary: {
          backgroundColor:
            Variant === "solid" ? colors.primary[500] : colors.primary[100],

          color: Variant === "solid" ? "white" : colors.primary[900],

          border: `1px solid ${colors.primary[500]}`,
        },
      },
    }),

  variant({
    prop: "size",
    variants: {
      sm: {
        padding: "0.2rem 0.8rem",
      },
      md: {
        padding: "0.3rem 1rem",
      },
      lg: {
        padding: "0.4rem 1.2rem",
      },
    },
  })
);
