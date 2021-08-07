import { variant } from "styled-system";
import styled from "styled-components";

import { InputProps } from "../../types/input";

export const StyledInput = styled("input")<InputProps>(
  {
    borderRadius: "6px",
    display: "block",
    padding: "6px",
    height: "24px",
    fontSize: "14px",

    ":focus": {
      outline: "none",
    },
  },

  ({ theme: { colors }, error }) =>
    variant({
      prop: "variant",
      variants: {
        primary: {
          border: error ? "2px solid red" : `2px solid ${colors.primary[200]}`,

          ":focus": {
            border: `2px solid ${colors.primary[400]}`,
            boxShadow: "0px 5px 5px 0px rgba(70,157,137,0.15)",
          },
        },
      },
    })
);
