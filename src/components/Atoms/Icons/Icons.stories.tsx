import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Icons } from './Icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Atom/Icons',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LinkedIn: Story = {
  render: () => (
    <>
      <svg className="icon h-8 w-8"><use xlinkHref="#linkedin"></use></svg>
      <Icons />
    </>
  )
};

export const GitHub: Story = {
  render: () => (
    <>
      <svg className="icon h-8 w-8"><use xlinkHref="#github"></use></svg>
      <Icons />
    </>
  )
};

export const Instagram: Story = {
  render: () => (
    <>
      <svg className="icon h-8 w-8"><use xlinkHref="#instagram"></use></svg>
      <Icons />
    </>
  )
};
