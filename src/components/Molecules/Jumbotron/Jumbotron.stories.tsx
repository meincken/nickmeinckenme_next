import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Jumbotron } from './Jumbotron';

const meta = {
  title: 'Molecules/Jumbotron',
  component: Jumbotron,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Jumbotron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
