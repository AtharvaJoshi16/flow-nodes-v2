import { NewBlankCanvasCard } from "@flownodes/ui/new-canvas-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NewBlankCanvasCard> = {
  component: NewBlankCanvasCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof NewBlankCanvasCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <NewBlankCanvasCard />,
  args: {},
};
