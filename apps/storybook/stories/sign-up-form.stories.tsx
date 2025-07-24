import { SignUpForm } from "@jeepney-design-system/ui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignUpForm> = {
  title: "Components/Authentication/SignUpForm",
  component: SignUpForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable sign-up form component with TanStack Query integration for user registration.",
      },
    },
  },
  argTypes: {
    apiEndpoint: {
      description: "Custom registration API endpoint",
      control: "text",
    },
    authenticityToken: {
      description: "Custom authenticity token for CSRF protection",
      control: "text",
    },
    onSuccess: {
      description: "Function called when sign-up is successful",
      action: "success",
    },
    onError: {
      description: "Function called when sign-up fails",
      action: "error",
    },
    onRedirect: {
      description: "Custom redirect function after successful sign-up",
      action: "redirect",
    },
    disabled: {
      description: "Whether the form is disabled",
      control: "boolean",
    },
    buttonText: {
      description: "Custom text for the submit button",
      control: "text",
    },
    className: {
      description: "Additional CSS classes for the form container",
      control: "text",
    },
    title: {
      description: "Custom title text displayed above the form",
      control: "text",
      table: {
        defaultValue: {
          summary: '"Create Your Account"'
        }
      },
    },
    description: {
      description: "Custom description text displayed above the form",
      control: "text",
      table: {
        defaultValue: {
          summary: '"Enter your email address and we\'ll send you a link to reset your password."'
        }
      },
    },
    requireNames: {
      description: "Whether first and last names are required",
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Story />
      </div>
    ),
  ],
  includeStories: ["Default", "Tagalog"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSuccess: action("onSuccess"),
    onError: action("onError"),
    onRedirect: action("onRedirect"),
  },
};


export const Tagalog: Story = {
  args: {
    onSuccess: action("onSuccess"),
    onError: action("onError"),
    onRedirect: action("onRedirect"),
    title: "Gumawa ng Account",
    description: "Punan ang form sa ibaba upang lumikha ng bagong account.",
  },
};


export const WithCustomButton: Story = {
  args: {
    buttonText: "Create Account",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};

export const RequiredNames: Story = {
  args: {
    requireNames: true,
    buttonText: "Sign Up",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "When requireNames is true, first and last name fields become required.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: "Creating Account...",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the form in a disabled state, typically during form submission.",
      },
    },
  },
};

export const CustomEndpoint: Story = {
  args: {
    apiEndpoint: "/api/v1/register",
    buttonText: "Register",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with a custom API endpoint for registration.",
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "border-2 border-blue-200 rounded-xl p-4",
    buttonText: "Join Now",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with custom CSS classes applied to the form.",
      },
    },
  },
};
