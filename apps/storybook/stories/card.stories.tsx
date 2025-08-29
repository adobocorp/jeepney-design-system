import {
  Button,
  COLOR,
  SIZE,
  WIDTH,
} from "@jeepney-design-system/ui/src/components/button";
import { Card } from "@jeepney-design-system/ui/src/components/card";
import { ContentList } from "@jeepney-design-system/ui/src/components/content-list";
import { FlexGridType } from "@jeepney-design-system/ui/src/components/content-list/types";
import {
  AssetType,
  BackgroundColor,
  BackgroundType,
  CardHeight,
  Image,
  Video,
} from "@jeepney-design-system/ui/src/components/shared/types";
import {
  HEADING,
  Typography,
} from "@jeepney-design-system/ui/src/components/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible content card component that displays various types of content. Supports text content, image content, and video content with customizable backgrounds. Refactored to use Tailwind CSS instead of CSS modules.",
      },
    },
  },
  argTypes: {
    content: {
      primaryText: {
        description: "The primary heading text for the content list",
        control: "text",
      },
      secondaryText: {
        description: "The secondary text for the content list",
        control: "text",
      },
      assetType: {
        description: "The type of asset being displayed in the card",
        control: "select",
        options: Object.values(AssetType),
      },
      asset: {
        description: "The asset being displayed in the card",
        control: "object",
      },
      cardHeight: {
        description: "The height of the card",
        control: "select",
        options: Object.values(CardHeight),
      },
      cardBackground: {
        description: "The background of the card",
        control: "select",
        options: Object.values(BackgroundColor),
      },
    },
  },
  render: (args) => {
    const singleContentCardProps = {
      primaryText: "Single Content Card",
      secondaryText: "A single content card with header and subheader",
      flexGridType: FlexGridType.TallCardGrid,
      background: defaultBackground,
    };
    const contentList = [args];

    return (
      <ContentList {...singleContentCardProps}>
        {contentList.map((content, index) => (
          <Card {...content} key={`card-${index}`} />
        ))}
      </ContentList>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

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

export const ImageContentCard: Story = {
  args: {
    content: {
      primaryText: "Image Content",
      secondaryText: "This card contains an image asset",
      assetType: AssetType.Image,
      asset: sampleImage,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Primary,
  },
};

export const VideoContentCard: Story = {
  args: {
    content: {
      primaryText: "Video Content Cards",
      secondaryText: "Content cards featuring video asset",
      assetType: AssetType.Video,
      asset: sampleVideo,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Primary,
  },
};

export const TextContentCard: Story = {
  args: {
    content: {
      primaryText: "Text Content",
      secondaryText: "A text-only card",
      assetType: AssetType.Card,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Primary,
  },
};

export const CardWithButton: Story = {
  args: {
    content: {
      primaryText: "Big Buck Bunny",
      secondaryText:
        "A day in the life of Big Buck Bunny, during which time he meets three bullying rodents: the leader, Frank the flying squirrel, and his sidekicks Rinky the red squirrel and Gimera the chinchilla.",
      assetType: AssetType.Video,
      asset: sampleVideo,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Primary,
  },
  render: (args) => {
    const singleImageContentCardProps = {
      primaryText: "Single Video Card with Button",
      secondaryText:
        "A single video card with like, comment, and share buttons",
      flexGridType: FlexGridType.TallCardGrid,
      background: defaultBackground,
    };
    const contentList = [args];

    return (
      <ContentList {...singleImageContentCardProps}>
        {contentList.map((content, index) => (
          <Card {...content} key={`card-${index}`}>
            <Button
              color={COLOR.secondary}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Like button clicked")}
            >
              <Typography heading={HEADING.SPAN}>Like</Typography>
            </Button>
            <Button
              color={COLOR.neutral}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Commentbutton clicked")}
            >
              <Typography heading={HEADING.SPAN}>Comment</Typography>
            </Button>
            <Button
              color={COLOR.success}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Share button clicked")}
            >
              <Typography heading={HEADING.SPAN}>Share</Typography>
            </Button>
          </Card>
        ))}
      </ContentList>
    );
  },
};
