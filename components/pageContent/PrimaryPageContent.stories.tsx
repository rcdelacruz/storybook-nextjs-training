import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import PrimaryPageContent, {
  type IPrimaryPageContent,
} from "./PrimaryPageContent";
import { mockPrimaryPageContentProps } from "./PrimaryPageContent.mock";

export default {
  title: "Page/PrimaryPageContent",
  component: PrimaryPageContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PrimaryPageContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryPageContent> = (args) => (
  <PrimaryPageContent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockPrimaryPageContentProps.base,
} as IPrimaryPageContent;
