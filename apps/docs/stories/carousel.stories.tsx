import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselProps,
  CardContent,
  BackgroundFilled,
  BackgroundType,
  CallToAction,
  ContentType,
  BackgroundColor,
} from "ui";
type Story = StoryObj<typeof Carousel>;

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  argTypes: {},
};

const cta: CallToAction = {
  href: "#",
  target: "_blank",
  text: "Para po!",
};

const card: CardContent = {
  primaryText: "Lorem Ipsum",
  secondaryText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  callToAction: cta,
  contentType: ContentType.Card,
};

const filled: BackgroundFilled = {
  showBorder: false,
  backgroundType: BackgroundType.Filled,
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
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Primary,
    },
    content: card,
  },
};

export const Secondary: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Secondary Background",
  args: {
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Secondary,
    },
    content: card,
  },
};

export const Neutral: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Neutral Background",
  args: {
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Neutral,
    },
    content: card,
  },
};

export const Alert: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Alert Background",
  args: {
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Alert,
    },
    content: card,
  },
};

export const Success: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Success Background",
  args: {
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Success,
    },
    content: card,
  },
};

export const Warning: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Warning Background",
  args: {
    background: {
      ...filled,
      backgroundColor: BackgroundColor.Warning,
    },
    content: card,
  },
};

export const Image: Story = {
  render: (props: CarouselProps) => <Carousel {...props}></Carousel>,
  name: "With Background Image",
  args: {
    background: {
      backgroundPosition: "center",
      backgroundType: BackgroundType.Image,
    },
    content: card,
  },
};
