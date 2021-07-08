import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";

import theme from "./theme";

const OctocakeProvider = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

OctocakeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OctocakeProvider;
