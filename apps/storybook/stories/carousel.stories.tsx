import { CarouselContent } from "@jeepney-design-system/ui/src/components/carousel/types";
import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "../../../packages/ui/src/components/carousel";
import {
  BackgroundColor,
  BackgroundImage,
  BackgroundType,
  BackgroundVideo,
  CallToActionType,
  Image,
  ImageContent,
  Video,
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
const sampleImageAsset: Image = {
  src: "https://images.pexels.com/photos/133689/pexels-photo-133689.jpeg",
  width: 1920,
  height: 1080,
  type: "image/jpeg",
};

const sampleBackgroundAsset: Image = {
  type: "image/jpeg",
  width: 1920,
  height: 1080,
  src: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
};

const sampleVideoAsset: Video = {
  src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  width: 800,
  height: 450,
  type: "video/mp4",
};

const sampleBackgroundImage: BackgroundImage = {
  backgroundType: BackgroundType.Image,
  backgroundPosition: "left center",
  asset: sampleBackgroundAsset,
  showBorder: false,
};

const sampleContentImage: BackgroundImage = {
  backgroundType: BackgroundType.Image,
  backgroundPosition: "center center",
  asset: sampleImageAsset,
  showBorder: false,
};

const sampleImageContent: ImageContent[] = [
  {
    caption: {
      primaryText: "Explore the Beauty of Nature",
      secondaryText: "Discover breathtaking landscapes and wildlife",
    },
    callToAction: {
      href: "https://example.com/watch",
      text: "Watch Now",
      target: "_blank",
      type: CallToActionType.Text,
    },
    background: sampleContentImage,
  },
];

const sampleBackgroundVideo: BackgroundVideo = {
  backgroundType: BackgroundType.Video,
  backgroundPosition: "center center",
  asset: sampleVideoAsset,
  showBorder: false,
};

const sampleVideoContent: CarouselContent[] = [
  {
    caption: {
      primaryText: "Big Buck Bunny",
      secondaryText: "The first blender video",
    },
    callToAction: {
      href: "https://example.com/watch",
      text: "Watch Now",
      target: "_blank",
      type: CallToActionType.Text,
    },
    background: sampleBackgroundVideo,
  },
  {
    caption: {
      primaryText: "Big Buck Bunny",
      secondaryText: "The first blender video",
    },
    callToAction: {
      href: "https://example.com/travel",
      text: "Plan Your Trip",
      target: "_blank",
      type: CallToActionType.Text as const,
    },
    background: sampleBackgroundVideo,
  },
];

export const Default: Story = {
  args: {
    width: "100%",
    height: "500px",
    contentList: sampleImageContent,
    background: {
      backgroundPosition: "center center",
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
    contentList: sampleImageContent,
    background: sampleBackgroundImage,
  },
};
export const WithVideoBackground: Story = {
  args: {
    width: "100%",
    height: "600px",
    contentList: sampleImageContent,
    background: sampleBackgroundVideo,
  },
};

export const PrimaryBackground: Story = {
  args: {
    width: "100%",
    height: "500px",
    contentList: sampleImageContent,
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
    contentList: sampleImageContent,
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
    contentList: [sampleImageContent[0]],
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
    contentList: sampleImageContent.slice(0, 2),
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
    contentList: sampleImageContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Warning,
      showBorder: false,
    },
  },
};
