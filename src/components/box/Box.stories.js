import React from "react";

import BoxComponent from "./Box";

export default {
  title: "Components/Box",
  component: BoxComponent,
  argTypes: {},
};

const Template = (args) => <BoxComponent {...args} />;

export const Box = Template.bind({});
Box.args = {
  children: "Box",
};
