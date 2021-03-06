import React from "react";

import { Story } from "@storybook/react";

import { InputProps } from "../src/types/input";
import OctocakeProvider from "../src/theme/OctocakeProvider";
import InputComponent from "../src/components/input/Input";

export default {
  title: "Components/Input",
  component: InputComponent,
};

const Template: Story<InputProps> = (args) => (
  <OctocakeProvider>
    <InputComponent {...args} />
  </OctocakeProvider>
);

export const Default = Template.bind({});
Default.args = { placeholder: "Enter email address" };

export const Disabled = Template.bind({});
Disabled.args = { placeholder: "Enter email address", disabled: true };

export const Error = Template.bind({});
Error.args = { placeholder: "Enter email address", error: true };
