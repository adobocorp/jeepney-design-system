import {
  Button,
  Color,
  Size,
  Width,
} from "@jeepney-design-system/ui/src/components/button";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Elements/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable button component with multiple color variants built with design system tokens and Tailwind CSS.",
      },
    },
  },
  argTypes: {
    children: {
      description: "The content to display inside the button",
      control: "text",
    },
    color: {
      description: "The color variant of the button",
      control: "select",
      options: Object.values(Color),
    },
    disabled: {
      description: "Whether the button is disabled",
      control: "boolean",
    },
    onClick: {
      description: "Function called when the button is clicked",
      action: "clicked",
    },
    type: {
      description: "The type attribute of the button",
      control: "select",
      options: ["button", "submit", "reset"],
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: Object.values(Size),
    },
    width: {
      description: "The width of the button",
      control: "select",
      options: Object.values(Width),
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    color: Color.Primary,
    onClick: action("primary-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button variant with brand primary color.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: Color.Secondary,
    onClick: action("secondary-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button variant with brand secondary color.",
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    children: "Neutral",
    color: Color.Neutral,
    onClick: action("neutral-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Neutral button variant with grey background.",
      },
    },
  },
};

export const Alert: Story = {
  args: {
    children: "Alert",
    color: Color.Alert,
    onClick: action("alert-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Alert button variant for destructive or important actions.",
      },
    },
  },
};

export const Success: Story = {
  args: {
    children: "Success",
    color: Color.Success,
    onClick: action("success-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Success button variant for positive actions.",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    children: "Warning",
    color: Color.Warning,
    onClick: action("warning-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Warning button variant for cautionary actions.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    color: Color.Primary,
    disabled: true,
    onClick: action("disabled-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Button in disabled state.",
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    children: "🚀 Launch",
    color: Color.Primary,
    onClick: action("custom-clicked"),
    width: Width.Wide,
    size: Size.Large,
  },
  parameters: {
    docs: {
      description: {
        story: "Button with custom content including emojis.",
      },
    },
  },
};

export const LongText: Story = {
  args: {
    children: "Very Long Button Text",
    color: Color.Primary,
    size: Size.Large,
    width: Width.Wide,
    onClick: action("long-text-clicked"),
  },
  parameters: {
    docs: {
      description: {
        story: "Button with longer text to test text overflow behavior.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button color={Color.Primary} onClick={action("primary-clicked")}>
        Primary
      </Button>
      <Button color={Color.Secondary} onClick={action("secondary-clicked")}>
        Secondary
      </Button>
      <Button color={Color.Neutral} onClick={action("neutral-clicked")}>
        Neutral
      </Button>
      <Button color={Color.Alert} onClick={action("alert-clicked")}>
        Alert
      </Button>
      <Button color={Color.Success} onClick={action("success-clicked")}>
        Success
      </Button>
      <Button color={Color.Warning} onClick={action("warning-clicked")}>
        Warning
      </Button>
      <Button
        color={Color.Primary}
        disabled
        onClick={action("disabled-clicked")}
      >
        Disabled
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All button variants displayed together for comparison.",
      },
    },
  },
};
