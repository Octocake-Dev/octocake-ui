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

  (props) =>
    variant({
      prop: "colorScheme",
      variants: {
        primary: {
          backgroundColor: props.theme.colors.primary[100],
          color: props.theme.colors.primary[900],
          border: `1px solid ${props.theme.colors.primary[500]}`,
        },
      },
    }),

  variant({
    prop: "size",
    variants: {
      sm: {
        padding: "0.3rem 0.8rem",
      },
      md: {
        padding: "0.4rem 1rem",
      },
      lg: {
        padding: "0.5rem 1.2rem",
      },
    },
  })
);
