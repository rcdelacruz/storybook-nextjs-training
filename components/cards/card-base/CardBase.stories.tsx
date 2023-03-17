import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardBase, { ICardBase } from './CardBase';
import { mockCardBaseProps } from './CardBase.mocks';

export default {
  title: 'cards/CardBase',
  component: CardBase,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardBase>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardBase> = (args) => (
  <CardBase {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardBaseProps.base,
} as ICardBase;