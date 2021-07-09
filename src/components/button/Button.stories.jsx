import React from "react";

import OctocakeProvider from "../../theme/OctocakeProvider";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => (
  <OctocakeProvider>
    <Button {...args} />
  </OctocakeProvider>
);

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  size: "sm",
  type: "button",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Button",
  type: "button",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "lg",
  type: "button",
};
