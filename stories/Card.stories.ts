import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/about/Card';

const meta = {
    title: 'Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    //   backgroundColor: { control: 'color' },
    },
    args: { title: '', blurbs: [] },
  } satisfies Meta<typeof Card>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Primary: Story = {
    args: {
      variant: 'text',
      title: "title",
      blurbs: ['Blurb 1', 'Blurb 2'],
    },
  };