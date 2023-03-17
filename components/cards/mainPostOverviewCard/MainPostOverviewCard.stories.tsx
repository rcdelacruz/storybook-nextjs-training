import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import MainPostOverviewCard, {
  type IMainPostOverviewCard,
} from "./MainPostOverviewCard";
import { mockMainPostOverviewCardProps } from "./MainPostOverviewCard.mock";

export default {
  title: "Posts/Main-PostOverviewCard",
  component: MainPostOverviewCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainPostOverviewCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainPostOverviewCard> = (args) => (
  <MainPostOverviewCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockMainPostOverviewCardProps.base,
} as IMainPostOverviewCard;
