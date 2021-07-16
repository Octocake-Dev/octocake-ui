import React from "react";

import OctocakeProvider from "../../theme/OctocakeProvider";

import TagComponent from "./Tag";

export default {
  title: "Components/Tag",
  component: TagComponent,
  argTypes: {},
};

const Template = (args) => (
  <OctocakeProvider>
    <TagComponent {...args} />
  </OctocakeProvider>
);

export const Tag = Template.bind({});
Tag.args = {
  children: "Tag",
};
