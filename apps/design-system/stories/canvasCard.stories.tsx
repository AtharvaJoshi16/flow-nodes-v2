import { CanvasCard } from "@flownodes/ui/canvas-card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CanvasCard> = {
  component: CanvasCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CanvasCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <CanvasCard {...args} />,
  args: {
    title: "Web Development Roadmap",
    createdOn: "9 hours",
    updatedOn: "1 hour",
    isStarred: true,
    onClick: () => console.log("Card clicked"),
    onDelete: () => console.log("Deleted"),
    onStar: () => console.log("Starred"),
  },
};
