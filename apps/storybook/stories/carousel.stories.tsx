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
  src: "https://images.pexels.com/photos/3698532/pexels-photo-3698532.jpeg",
  width: 1920,
  height: 1080,
  type: "image/jpeg",
};

const sampleBackgroundAsset: Image = {
  type: "image/jpeg",
  width: 1920,
  height: 1080,
  src: "https://images.pexels.com/photos/239546/pexels-photo-239546.jpeg",
};

const sampleVideoAsset: Video = {
  src: "https://www.pexels.com/download/video/6020095/",
  width: 800,
  height: 450,
  type: "video/mp4",
};

const sampleBackgroundImage: BackgroundImage = {
  backgroundType: BackgroundType.Image,
  backgroundPosition: "5% 20%",
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
      primaryText: "Cordillera Administrative Region",
      secondaryText:
        "It is the only landlocked region in the archipelago, bordered by the Ilocos Region to the west and southwest, and by the Cagayan Valley Region to the north, east, and southeast.",
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
  backgroundColor: BackgroundColor.Secondary,
  asset: sampleVideoAsset,
  showBorder: false,
};

const sampleVideoContent: CarouselContent[] = [
  {
    caption: {
      primaryText: "Binondo, Manila",
      secondaryText:
        "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese; it was positioned so that the colonial administration could keep a close eye on their migrant subjects.",
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
      primaryText: "Mt. Mayon",
      secondaryText:
        'A popular tourist spot, it is renowned for its "perfect cone" because of its symmetric conical shape, and is regarded as sacred in Philippine mythology',
    },
    callToAction: {
      href: "https://example.com/travel",
      text: "Plan Your Trip",
      target: "_blank",
      type: CallToActionType.Text as const,
    },
    background: {
      ...sampleBackgroundVideo,
      asset: {
        ...sampleVideoAsset,
        src: "https://www.pexels.com/download/video/5222769/",
      },
    },
  },
];

export const Default: Story = {
  args: {
    width: "100%",
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
    contentList: sampleImageContent,
    background: sampleBackgroundImage,
  },
};
export const WithVideoBackground: Story = {
  args: {
    width: "100%",
    contentList: [
      {
        ...sampleImageContent[0],
        caption: {
          primaryText: "Binondo, Manila",
          secondaryText:
            "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese; it was positioned so that the colonial administration could keep a close eye on their migrant subjects.",
        },
        background: {
          ...sampleContentImage,
          backgroundPosition: "5% 20%",
          asset: {
            ...sampleImageAsset,
            src: "https://images.pexels.com/photos/2315309/pexels-photo-2315309.jpeg",
          },
        },
      },
    ],
    background: sampleBackgroundVideo,
  },
};

export const PrimaryBackground: Story = {
  args: {
    width: "100%",
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
    contentList: sampleImageContent,
    background: {
      backgroundType: BackgroundType.Filled,
      backgroundColor: BackgroundColor.Warning,
      showBorder: false,
    },
  },
};
