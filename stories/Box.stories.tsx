import React from "react";

import { Story } from "@storybook/react";

import { BoxProps } from "../src/types/box";
import OctocakeProvider from "../src/theme/OctocakeProvider";
import BoxComponent from "../src/components/box/Box";

export default {
  title: "Components/Box",
  component: BoxComponent,
  argTypes: {},
};

const Template: Story<BoxProps> = (args) => (
  <OctocakeProvider>
    <BoxComponent {...args} />
  </OctocakeProvider>
);

export const Box = Template.bind({});
Box.args = {
  children: "Box",
};
