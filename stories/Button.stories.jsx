import React from "react";

import OctocakeProvider from "@/theme/OctocakeProvider";

import ButtonComponent from "@/components/button/Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

const Template = (args) => (
  <OctocakeProvider>
    <ButtonComponent {...args} />
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
