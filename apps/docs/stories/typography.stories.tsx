import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "ui";
import "ui/dist/index.css";

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    heading: {
      control: { type: "radio" },
      options: ["h1", "h2", "h3", "h4", "h5"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const H1: Story = {
  render: (props) => <Typography {...props}>Bayad po.</Typography>,
  name: "H1",
  args: {
    children: "Bayad po.",
    heading: "h1",
  },
};

export const H2: Story = {
  render: (props) => <Typography {...props}>Bayad po.</Typography>,
  name: "H2",
  args: {
    children: "Bayad po.",
    heading: "h2",
  },
};

export const H3: Story = {
  render: (props) => <Typography {...props}>Bayad po.</Typography>,
  name: "H3",
  args: {
    children: "Bayad po.",
    heading: "h3",
  },
};

export const H4: Story = {
  render: (props) => <Typography {...props}>Bayad po.</Typography>,
  name: "H4",
  args: {
    children: "Bayad po.",
    heading: "h4",
  },
};

export const H5: Story = {
  render: (props) => <Typography {...props}>Bayad po.</Typography>,
  name: "H5",
  args: {
    children: "Bayad po.",
    heading: "h5",
  },
};
