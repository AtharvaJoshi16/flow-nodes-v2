import { TooltipMenu } from "@flownodes/ui/tooltip-menu";
import { Button, Tooltip } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { MoveHorizontal } from "lucide-react";

const meta: Meta<typeof TooltipMenu> = {
  component: TooltipMenu,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TooltipMenu>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => (
    <Tooltip title={<TooltipMenu {...args} />} arrow placement="right">
      <Button>Hover me</Button>
    </Tooltip>
  ),
  args: {
    option: { id: 0, component: <MoveHorizontal /> },
    options: [
      { id: 0, component: <MoveHorizontal /> },
      { id: 1, component: <MoveHorizontal /> },
    ],
  },
};
