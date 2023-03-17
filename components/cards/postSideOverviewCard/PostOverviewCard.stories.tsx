import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import PostOverviewCard, { type IPostOverviewCard } from "./PostOverviewCard";
import { mockPostOverviewCardProps } from "./PostOverviewCard.mock";

export default {
  title: "Posts/Side-PostOverviewCard",
  component: PostOverviewCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof PostOverviewCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PostOverviewCard> = (args) => (
  <PostOverviewCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockPostOverviewCardProps.base,
} as IPostOverviewCard;
