import type { Meta, StoryObj } from "@storybook/react";

import { InputV1 } from "ui";
import "ui/dist/index.css";

const meta: Meta<typeof InputV1> = {
  component: InputV1,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputV1>;
export const Primary: Story = {
  render: (props) => <InputV1 {...props}></InputV1>,
  name: "Primary",
  args: {},
};
