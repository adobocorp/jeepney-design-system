import type { Meta, StoryObj } from "@storybook/react";
import {
  FlexContentListV1,
  FlexContentListProps,
  CardContent,
  ContentType,
  FlexGridType,
  BackgroundType,
  BackgroundColor,
} from "ui";
type Story = StoryObj<typeof FlexContentListV1>;

const meta: Meta<typeof FlexContentListV1> = {
  component: FlexContentListV1,
  argTypes: {
    flexGridType: {
      control: { type: "radio" },
      options: ["shortCardGrid", "shortCardGrid"],
    },
  },
};

export default meta;

const primaryFilled = {
  showBorder: false,
  backgroundType: BackgroundType.Filled,
  backgroundColor: BackgroundColor.Neutral,
};

const content: CardContent = {
  primaryText: "Salcedo Village",
  contentType: ContentType.Card,
};
export const ShortCardGrid: Story = {
  render: (props: FlexContentListProps) => (
    <FlexContentListV1 {...props}></FlexContentListV1>
  ),
  name: "Short Card Grid",
  args: {
    primaryText: "Ang mga jeep sa Metro Manila",
    secondaryText: "Ay maganda",
    flexGridType: FlexGridType.ShortCardGrid,
    contentList: [content, content, content],
    background: primaryFilled,
  },
};
