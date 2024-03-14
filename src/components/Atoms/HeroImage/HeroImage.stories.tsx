import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HeroImage } from './HeroImage';

const meta = {
  title: 'Atom/HeroImage',
  component: HeroImage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeroImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};
