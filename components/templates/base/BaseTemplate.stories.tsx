import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import BaseTemplate, { type IBaseTemplate } from "./BaseTemplate";
import { mockBaseTemplateProps } from "./BaseTemplate.mock";

export default {
  title: "Template/BaseTemplate",
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
