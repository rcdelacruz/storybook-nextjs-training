import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import SideMenu, { type ISideMenu } from "./SideMenu";
import { mockSideMenuProps } from "./SideMenu.mock";

export default {
  title: "Menu/Side",
  component: SideMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SideMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SideMenu> = (args) => (
  <SideMenu {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSideMenuProps.base,
} as ISideMenu;
