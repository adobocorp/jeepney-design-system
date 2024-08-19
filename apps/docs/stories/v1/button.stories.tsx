import type { Meta, StoryObj } from "@storybook/react";

import { ButtonV1 } from "ui";
import "ui/dist/index.css";

const meta: Meta<typeof ButtonV1> = {
  component: ButtonV1,
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

type Story = StoryObj<typeof ButtonV1>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </ButtonV1>
  ),
  name: "Primary",
  args: {
    children: "Para po",
    color: "primary",
  },
};

export const Secondary: Story = {
  render: (props) => (
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </ButtonV1>
  ),
  name: "Secondary",
  args: {
    children: "Para po",
    color: "secondary",
  },
};

export const Neutral: Story = {
  render: (props) => (
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </ButtonV1>
  ),
  name: "Neutral",
  args: {
    children: "Para po",
    color: "neutral",
  },
};

export const Alert: Story = {
  render: (props) => (
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Kuya! Please stop the bus!
    </ButtonV1>
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
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Para po
    </ButtonV1>
  ),
  name: "Success",
  args: {
    children: "Para po",
    color: "success",
  },
};

export const Warning: Story = {
  render: (props) => (
    <ButtonV1
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Salamat!");
      }}
    >
      Paki preno po ng jeep.
    </ButtonV1>
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
