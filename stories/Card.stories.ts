import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/common/Card';
import familyPhoto from "@/public/assets/Family_portfolio .png"

const meta = {
    title: 'Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
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

  export const ImgVariant: Story = {
    args: {
        variant: 'img',
        imgSrc: familyPhoto
    }
  }