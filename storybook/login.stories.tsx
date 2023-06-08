import type { Meta, StoryObj } from "@storybook/react";

import Login from "../src/_implementations/Login";

const meta = {
  title: "Example/Login",
  component: Login,
  tags: ["autodocs"],
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Organism: Story = {
  args: {},
};
