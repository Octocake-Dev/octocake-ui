import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./theme";

type OctocakeProviderProps = {
  children: React.ReactNode;
};

const OctocakeProvider = ({ children }: OctocakeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default OctocakeProvider;
