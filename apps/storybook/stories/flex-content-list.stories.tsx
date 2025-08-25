import type { Meta, StoryObj } from "@storybook/react";
import { FlexContentListV1 } from "../../../packages/ui/src/components/flex-content-list";
import {
  FlexGridType,
  FlexContentListProps,
} from "../../../packages/ui/src/components/flex-content-list/types";
import {
  AssetType,
  BackgroundColor,
  BackgroundType,
  Image,
  Video,
} from "../../../packages/ui/src/components/shared/types";

const meta: Meta<typeof FlexContentListV1> = {
  title: "Components/Components/FlexContentList",
  component: FlexContentListV1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible content list component that displays content cards in a grid layout. Supports text content, image content, and video content with customizable backgrounds. Refactored to use Tailwind CSS instead of CSS modules.",
      },
    },
  },
  argTypes: {
    primaryText: {
      description: "The primary heading text for the content list",
      control: "text",
    },
    secondaryText: {
      description: "The secondary text for the content list",
      control: "text",
    },
    flexGridType: {
      description: "The type of grid layout for the content cards",
      control: "select",
      options: Object.values(FlexGridType),
    },
    contentList: {
      description: "Array of content items to display in the grid",
      control: "object",
    },
    background: {
      description: "Background configuration for the content list",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FlexContentListV1>;

// Sample image asset
const sampleImage: Image = {
  width: 400,
  height: 300,
  src: "https://picsum.photos/400/300",
  type: "image/jpeg",
};

// Sample video asset
const sampleVideo: Video = {
  width: 400,
  height: 300,
  src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  type: "video/mp4",
};

const defaultBackground = {
  backgroundType: BackgroundType.Filled,
  backgroundColor: BackgroundColor.Neutral,
};

export const SingleImageContentCard: Story = {
  args: {
    primaryText: "Single Image Content Card",
    secondaryText: "A single content card with image asset",
    flexGridType: FlexGridType.TallCardGrid,
    contentList: [
      {
        primaryText: "Image Content",
        secondaryText: "This card contains an image asset",
        AssetType: AssetType.Image,
        asset: sampleImage,
      },
    ],
    background: defaultBackground,
  },
};

export const SingleFilledContentCard: Story = {
  args: {
    primaryText: "Single Filled Content Card",
    secondaryText: "A single content card with text only",
    flexGridType: FlexGridType.TallCardGrid,
    contentList: [
      {
        primaryText: "Text Only Content",
        secondaryText: "This card contains only text content without any media assets",
        AssetType: AssetType.Card,
      },
    ],
    background: defaultBackground,
  },
};

export const MultipleImageContentCards: Story = {
  args: {
    primaryText: "Multiple Image Content Cards",
    secondaryText: "A grid of content cards with image assets",
    flexGridType: FlexGridType.ShortCardGrid,
    contentList: [
      {
        primaryText: "Image Card 1",
        secondaryText: "First image content card",
        AssetType: AssetType.Image,
        asset: { ...sampleImage, src: "https://picsum.photos/400/300?random=1" },
      },
      {
        primaryText: "Image Card 2", 
        secondaryText: "Second image content card",
        AssetType: AssetType.Image,
        asset: { ...sampleImage, src: "https://picsum.photos/400/300?random=2" },
      },
      {
        primaryText: "Image Card 3",
        secondaryText: "Third image content card", 
        AssetType: AssetType.Image,
        asset: { ...sampleImage, src: "https://picsum.photos/400/300?random=3" },
      },
    ],
    background: defaultBackground,
  },
};

export const MultipleFilledContentCards: Story = {
  args: {
    primaryText: "Multiple Filled Content Cards",
    secondaryText: "A grid of content cards with text only",
    flexGridType: FlexGridType.ShortCardGrid,
    contentList: [
      {
        primaryText: "Text Card 1",
        secondaryText: "First text-only content card with some descriptive content",
        AssetType: AssetType.Card,
      },
      {
        primaryText: "Text Card 2",
        secondaryText: "Second text-only content card with different content",
        AssetType: AssetType.Card,
      },
      {
        primaryText: "Text Card 3", 
        secondaryText: "Third text-only content card completing the set",
        AssetType: AssetType.Card,
      },
      {
        primaryText: "Text Card 4",
        secondaryText: "Fourth text-only content card for a four-column layout",
        AssetType: AssetType.Card,
      },
    ],
    background: defaultBackground,
  },
};

export const VideoContentCards: Story = {
  args: {
    primaryText: "Video Content Cards",
    secondaryText: "Content cards featuring video assets - NEW FEATURE!",
    flexGridType: FlexGridType.TallCardGrid,
    contentList: [
      {
        primaryText: "Sample Video",
        secondaryText: "This card features a video player with controls",
        AssetType: AssetType.Video,
        asset: sampleVideo,
      },
      {
        primaryText: "Another Video",
        secondaryText: "Another video content card demonstrating the flexibility",
        AssetType: AssetType.Video,
        asset: { ...sampleVideo, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
      },
    ],
    background: defaultBackground,
  },
};

export const MixedContentCards: Story = {
  args: {
    primaryText: "Mixed Content Types",
    secondaryText: "Demonstration of different content types together",
    flexGridType: FlexGridType.TallCardGrid,
    contentList: [
      {
        primaryText: "Text Content",
        secondaryText: "A text-only card",
        AssetType: AssetType.Card,
      },
      {
        primaryText: "Image Content",
        secondaryText: "A card with an image",
        AssetType: AssetType.Image,
        asset: sampleImage,
      },
      {
        primaryText: "Video Content",
        secondaryText: "A card with a video player",
        AssetType: AssetType.Video,
        asset: sampleVideo,
      },
    ],
    background: defaultBackground,
  },
};