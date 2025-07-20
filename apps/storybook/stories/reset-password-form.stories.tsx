import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ResetPasswordForm } from "@jeepney-design-system/ui";

const meta: Meta<typeof ResetPasswordForm> = {
  title: "Components/Forms/ResetPasswordForm",
  component: ResetPasswordForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable password reset form component with TanStack Query integration for requesting password reset emails.",
      },
    },
  },
  argTypes: {
    onSuccess: {
      description: "Function called when password reset request is successful",
      action: "success",
    },
    onError: {
      description: "Function called when password reset request fails",
      action: "error",
    },
    onRedirect: {
      description: "Function called to redirect after success",
      action: "redirect",
    },
    apiEndpoint: {
      description: "API endpoint for password reset requests",
      control: "text",
    },
    authenticityToken: {
      description: "CSRF authenticity token",
      control: "text",
    },
    disabled: {
      description: "Whether the form is in a disabled state",
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
    description: {
      description: "Custom description text displayed above the form",
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
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

export const WithCustomDescription: Story = {
  args: {
    description:
      "Forgot your password? No worries! Enter your email below and we'll help you get back into your account.",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Password reset form with a custom description message.",
      },
    },
  },
};

export const CustomButtonText: Story = {
  args: {
    buttonText: "Reset My Password",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Form with custom button text for the submit action.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: "Sending...",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the form in a disabled/loading state during request processing.",
      },
    },
  },
};

export const CustomEndpoint: Story = {
  args: {
    apiEndpoint: "/api/v1/auth/password/reset",
    buttonText: "Send Reset Link",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with a custom API endpoint for password reset requests.",
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "border-2 border-purple-200 rounded-xl p-4 bg-purple-50",
    description: "Reset your password to regain access to your account.",
    buttonText: "Send Instructions",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with custom CSS classes applied to the form container.",
      },
    },
  },
};

export const WithCallbacks: Story = {
  args: {
    onSuccess: (response: unknown) => {
      action("onSuccess")(response);
      console.log("Password reset request successful:", response);
    },
    onError: (error: string) => {
      action("onError")(error);
      console.error("Password reset request failed:", error);
    },
    onRedirect: (path: string) => {
      action("onRedirect")(path);
      console.log("Redirecting to:", path);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates all callback functions with additional logging for debugging.",
      },
    },
  },
};

export const MinimalForm: Story = {
  args: {
    description: "",
    buttonText: "Reset",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "A minimal version of the form with no description and short button text.",
      },
    },
  },
};
