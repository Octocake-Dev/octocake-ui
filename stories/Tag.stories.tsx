import React from "react";

import { Story } from "@storybook/react";

import { TagProps } from "../src/types/tag";
import OctocakeProvider from "../src/theme/OctocakeProvider";
import TagComponent from "../src/components/tag/Tag";

export default {
  title: "Components/Tag",
  component: TagComponent,
  argTypes: {},
};

const Template: Story<TagProps> = (args) => (
  <OctocakeProvider>
    <TagComponent {...args} />
  </OctocakeProvider>
);

export const Tag = Template.bind({});
Tag.args = {
  children: "Tag",
};
