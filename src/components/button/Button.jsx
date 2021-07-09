import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Button.styles";

const Button = ({ children, type, size, scheme, ...props }) => (
  <>
    <StyledButton type={type} size={size} scheme={scheme} {...props}>
      {children}
    </StyledButton>
  </>
);

Button.defaultProps = {
  size: "md",
  scheme: "primary",
};

Button.propTypes = {
  /**
   * Button content
   */
  children: PropTypes.node.isRequired,

  /**
   * Button type
   */
  type: PropTypes.oneOf(["button", "reset", "submit"]).isRequired,

  /**
   * Button size
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),

  /**
   * Button scheme
   */
  scheme: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
