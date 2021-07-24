import React from "react";

import OctocakeProvider from "../src/theme/OctocakeProvider";
import BoxComponent from "../src/components/box/Box";

export default {
  title: "Components/Box",
  component: BoxComponent,
  argTypes: {},
};

const Template = (args) => (
  <OctocakeProvider>
    <BoxComponent {...args} />
  </OctocakeProvider>
);

export const Box = Template.bind({});
Box.args = {
  children: "Box",
};
