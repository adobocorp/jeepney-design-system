import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselProps, BackgroundColor } from "ui";
type Story = StoryObj<typeof Carousel>;

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  argTypes: {
    backgroundType: {
      control: { type: "radio" },
      options: ["image", "filled"],
    },
    backgroundPosition: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right", "center"],
    },
    backgroundColor: {
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
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Primary Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.primary,
    showBorder: false,
  },
};

export const Secondary: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Secondary Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.secondary,
    showBorder: false,
  },
};

export const Neutral: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Neutral Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.neutral,
    showBorder: false,
  },
};

export const Alert: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Alert Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.alert,
    showBorder: false,
  },
};

export const Success: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Success Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.success,
    showBorder: false,
  },
};

export const Warning: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Warning Background",
  args: {
    backgroundType: "filled",
    backgroundColor: BackgroundColor.warning,
    showBorder: false,
  },
};

export const Image: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Background Image",
  args: {
    backgroundPosition: "center",
    backgroundType: "image",
  },
};
