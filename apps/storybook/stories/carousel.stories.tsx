import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "../../../packages/ui/src/components/carousel";
import {
  BackgroundColor,
  BackgroundType,
  CallToActionType,
  ContentType,
} from "../../../packages/ui/src/components/shared/types";

const meta: Meta<typeof Carousel> = {
  title: "Components/Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A carousel component that displays content with navigation controls and progress indicators. Supports both card and video content types with customizable backgrounds.",
      },
    },
  },
  argTypes: {
    width: {
      description: "The width of the carousel",
      control: "text",
    },
    height: {
      description: "The height of the carousel",
      control: "text",
    },
    background: {
      description: "Background configuration for the carousel",
      control: "object",
    },
    contentList: {
      description: "Array of content items to display in the carousel",
      control: "object",
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50 min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// Sample content data
const sampleCardContent = [
  {
    primaryText: "Beautiful Mountain Landscape",
    secondaryText:
      "Discover the breathtaking views of the mountain ranges with crystal clear lakes and abundant wildlife. This location offers perfect hiking trails for adventurers of all levels.",
    contentType: ContentType.Card as const,
  },
  {
    primaryText: "Urban City Life",
    secondaryText:
      "Experience the vibrant energy of metropolitan areas with their towering skyscrapers, bustling streets, and rich cultural diversity.",
    contentType: ContentType.Card as const,
  },
  {
    primaryText: "Peaceful Beach Sunset",
    secondaryText:
      "Relax and unwind at pristine beaches with golden sand and stunning sunset views that create perfect moments for reflection.",
    contentType: ContentType.Card as const,
  },
];

const sampleVideoContent = [
  {
    caption: "The first Blender Open Movie from 2006",
    width: 800,
    height: 450,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    type: "video/mp4",
    contentType: ContentType.Video as const,
    callToAction: {
      href: "https://example.com/nature",
      text: "Watch Full Documentary",
      target: "_blank",
      type: CallToActionType.Default as const,
    },
  },
  {
    caption: "Big Buck Bunny",
    width: 800,
    height: 450,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "video/mp4",
    contentType: ContentType.Video as const,
    callToAction: {
      href: "https://example.com/travel",
      text: "Plan Your Trip",
      target: "_blank",
      type: CallToActionType.Text as const,
    },
  },
];

export const Default: Story = {
  args: {
    width: "100%",
    height: "500px",
    contentList: sampleCardContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Neutral,
      showBorder: false,
    },
  },
};

export const WithImageBackground: Story = {
  args: {
    width: "100%",
    height: "600px",
    contentList: sampleCardContent,
    background: {
      backgroundType: BackgroundType.Image,
      backgroundPosition: "center",
    },
  },
};

export const PrimaryBackground: Story = {
  args: {
    width: "100%",
    height: "500px",
    contentList: sampleCardContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Primary,
      showBorder: true,
    },
  },
};

export const SecondaryBackground: Story = {
  args: {
    width: "100%",
    height: "500px",
    contentList: sampleCardContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Secondary,
      showBorder: false,
    },
  },
};

export const SingleContent: Story = {
  args: {
    width: "100%",
    height: "400px",
    contentList: [sampleCardContent[0]],
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Neutral,
      showBorder: false,
    },
  },
};

export const VideoContent: Story = {
  args: {
    width: "100%",
    height: "600px",
    contentList: sampleVideoContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Neutral,
      showBorder: false,
    },
  },
};

export const CompactSize: Story = {
  args: {
    width: "600px",
    height: "350px",
    contentList: sampleCardContent.slice(0, 2),
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Success,
      showBorder: true,
    },
  },
};

export const LargeSize: Story = {
  args: {
    width: "1200px",
    height: "700px",
    contentList: sampleCardContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Warning,
      showBorder: false,
    },
  },
};
