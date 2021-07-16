import React from "react";
import PropTypes from "prop-types";

import { StyledTag } from "./Tag.styles";

const Tag = ({ children, ...props }) => (
  <>
    <StyledTag {...props}>{children}</StyledTag>
  </>
);

Tag.defaultProps = {};

Tag.propTypes = {
  /**
   * Tag content
   */
  children: PropTypes.node.isRequired,
};

export default Tag;
