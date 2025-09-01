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
  src: "https://images.pexels.com/photos/133689/pexels-photo-133689.jpeg",
  type: "image/jpeg",
};

// Sample video asset
const sampleVideo: Video = {
  width: 400,
  height: 300,
  src: "https://www.pexels.com/download/video/6020095",
  type: "video/mp4",
};

const defaultBackground = {
  backgroundType: BackgroundType.Filled,
  backgroundColor: BackgroundColor.Neutral,
};

export const TextContentCard: Story = {
  args: {
    content: {
      primaryText: "@joserizal",
      secondaryText: `Masasapantaha kaagád, na, lihim na nágayuma ñg isáng FILIBUSTERO ang kapisanan ñg mg̃a makapraile at mg̃a laban sa pagkakasulong,
         upáng, sa pag-alinsunod na waláng malay sa mg̃a udyók ñg kaniláng kalooban, ay makatulong at makapagpalusóg doon sa imbót na íisang bagay ang
         linalayon: palaganapin ang adhiká ñg FILIBUSTERISMO sa boong bayan at pananaligin ang lahát ñg pilipino na waláng ibáng kaligtasan liban sa
         humiwaláy sa España. Kung ihuhulog sa wikang tagalog ang salitáng FILIBUSTERISMO ay lubhang hahaba ang pañgalan ñg aklát na itó at marahil
         ay mangyaring hindi pa mawatasan ñg babasa, kaya’t hindi na namin inihulog sa wika natin; ñguni’t ílalagáy namán ang katuturán ó kahulugán
         ñg salitáng itó upang mabatíd noong mg̃a hindi nakaaalam ñg kaniyang kahulugán.`,
      assetType: AssetType.Card,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Primary,
  },
};

export const ImageContentCard: Story = {
  args: {
    content: {
      primaryText: "Makati",
      secondaryText:
        "Makati is a center for finance, commerce, culture, the arts and fashion, academics, and as the home to numerous diplomatic missions and embassies, is the center for the country's international diplomacy.",
      assetType: AssetType.Image,
      asset: sampleImage,
    },
    cardHeight: CardHeight.SHORT,
    cardBackground: BackgroundColor.Secondary,
  },
};

export const VideoContentCard: Story = {
  args: {
    content: {
      primaryText: "Binondo, Manila",
      secondaryText:
        "It is the oldest Chinatown in the world, established in 1594 by the Spaniards as a settlement near Intramuros but across the Pasig River for Catholic Chinese; it was positioned so that the colonial administration could keep a close eye on their migrant subjects.",
      assetType: AssetType.Video,
      asset: sampleVideo,
    },
    cardHeight: CardHeight.TALL,
    cardBackground: BackgroundColor.Secondary,
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
              color={COLOR.primary}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Na-click ang like button")}
            >
              <Typography heading={HEADING.SPAN}>Like</Typography>
            </Button>
            <Button
              color={COLOR.neutral}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Na-click ang comment button")}
            >
              <Typography heading={HEADING.SPAN}>Comment</Typography>
            </Button>
            <Button
              color={COLOR.success}
              size={SIZE.small}
              width={WIDTH.thin}
              onClick={() => alert("Na-click ang share button")}
            >
              <Typography heading={HEADING.SPAN}>Share</Typography>
            </Button>
          </Card>
        ))}
      </ContentList>
    );
  },
};
