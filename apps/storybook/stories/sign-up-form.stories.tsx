import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SignUpForm } from "@jeepney-design-system/ui";

const meta: Meta<typeof SignUpForm> = {
  title: "Components/Forms/SignUpForm",
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
    requireNames: {
      description: "Whether first and last names are required",
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Create Your Account
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Join us today and get started
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
  includeStories: ["Default"],
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
