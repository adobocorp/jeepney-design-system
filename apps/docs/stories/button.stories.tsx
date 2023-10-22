import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui";
import "ui/dist/index.css";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: [
        "primary",
        "secondary",
        "neutral",
        "alert",
        "success",
        "warning",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </Button>
  ),
  name: "Primary",
  args: {
    children: "Para po",
    color: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </Button>
  ),
  name: "Secondary",
  args: {
    children: "Para po",
    color: "secondary",
  },
};

export const Neutral: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </Button>
  ),
  name: "Neutral",
  args: {
    children: "Para po",
    color: "neutral",
  },
};

export const Alert: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Kuya! Please stop the bus!
    </Button>
  ),
  name: "Alert",
  args: {
    children: "Kuya! Please stop the bus!",
    color: "alert",
    style: {
      width: "200px",
    },
  },
};

export const Success: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </Button>
  ),
  name: "Success",
  args: {
    children: "Para po",
    color: "success",
  },
};

export const Warning: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Paki preno po ng jeep.
    </Button>
  ),
  name: "Warning",
  args: {
    children: "Paki preno po ng jeep.",
    color: "warning",
    style: {
      width: "200px",
    },
  },
};
