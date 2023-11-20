import type { Meta, StoryObj } from "@storybook/react";
import {
  FlexContentList,
  FlexContentListProps,
  CardContent,
  ContentType,
  FlexGridType,
  BackgroundType,
  BackgroundColor,
} from "ui";
type Story = StoryObj<typeof FlexContentList>;

const meta: Meta<typeof FlexContentList> = {
  component: FlexContentList,
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
    <FlexContentList {...props}></FlexContentList>
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
