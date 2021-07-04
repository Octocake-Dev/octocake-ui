import React from "react";
import PropTypes from "prop-types";

import { StyledBox } from "./Box.styles";

const Box = ({ children, ...props }) => (
  <>
    <StyledBox {...props}>{children}</StyledBox>
  </>
);

Box.defaultProps = {};

Box.propTypes = {
  /**
   * Box content
   */
  children: PropTypes.node.isRequired,
};

export default Box;
