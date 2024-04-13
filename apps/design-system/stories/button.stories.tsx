import { AuthButton } from "@flownodes/ui/authButton";
import { Google } from "@flownodes/ui/google";
import { Facebook, GitHub } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AuthButton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const AuthButtonGoogle: Story = {
  args: {
    children: "Sign up with Google",
    startIcon: <Google size={20} />,
  },
};

export const AuthButtonGithub: Story = {
  args: {
    children: "Sign up with Github",
    startIcon: <GitHub />,
  },
};

export const AuthButtonFacebook: Story = {
  args: {
    children: "Sign up with Facebook",
    startIcon: <Facebook color="primary" />,
  },
};
