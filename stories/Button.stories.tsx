import React from "react";

import { Story } from "@storybook/react";

import { ButtonProps } from "../src/types/button";
import OctocakeProvider from "../src/theme/OctocakeProvider";
import ButtonComponent from "../src/components/button/Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

const Template: Story<ButtonProps> = (args) => (
  <OctocakeProvider>
    <ButtonComponent {...args} />
  </OctocakeProvider>
);

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Button",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "lg",
};
