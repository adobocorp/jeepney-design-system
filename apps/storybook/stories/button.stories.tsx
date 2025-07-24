import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, COLOR } from "../../../packages/ui/src/components/button";

const meta: Meta<typeof Button> = {
    title: "Components/Elements/Button",
    component: Button,
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
            options: Object.values(COLOR),
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
        color: COLOR.primary,
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
        color: COLOR.secondary,
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
        color: COLOR.neutral,
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
        color: COLOR.alert,
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
        color: COLOR.success,
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
        color: COLOR.warning,
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
        color: COLOR.primary,
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

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4 items-center">
            <Button color={COLOR.primary} onClick={action("primary-clicked")}>
                Primary
            </Button>
            <Button color={COLOR.secondary} onClick={action("secondary-clicked")}>
                Secondary
            </Button>
            <Button color={COLOR.neutral} onClick={action("neutral-clicked")}>
                Neutral
            </Button>
            <Button color={COLOR.alert} onClick={action("alert-clicked")}>
                Alert
            </Button>
            <Button color={COLOR.success} onClick={action("success-clicked")}>
                Success
            </Button>
            <Button color={COLOR.warning} onClick={action("warning-clicked")}>
                Warning
            </Button>
            <Button color={COLOR.primary} disabled onClick={action("disabled-clicked")}>
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

export const CustomContent: Story = {
    args: {
        children: "🚀 Launch",
        color: COLOR.primary,
        onClick: action("custom-clicked"),
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
        color: COLOR.primary,
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
