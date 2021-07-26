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

const Template: Story<TagProps> = ({ tags, ...args }: any) => (
  <OctocakeProvider>
    {tags.map((tag: TagProps) => (
      <TagComponent {...tag} />
    ))}
  </OctocakeProvider>
);

export const Small = Template.bind({});
Small.args = {
  tags: [
    { children: "Tag", size: "sm", variant: "outline" },
    { children: "Tag", size: "sm", variant: "solid" },
  ],
};

export const Medium = Template.bind({});
Medium.args = {
  tags: [
    { children: "Tag", size: "md", variant: "outline" },
    { children: "Tag", size: "md", variant: "solid" },
  ],
};

export const Large = Template.bind({});
Large.args = {
  tags: [
    { children: "Tag", size: "lg", variant: "outline" },
    { children: "Tag", size: "lg", variant: "solid" },
  ],
};
