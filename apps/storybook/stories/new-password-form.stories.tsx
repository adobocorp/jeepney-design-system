import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NewPasswordForm } from "@jeepney-design-system/ui";

const meta: Meta<typeof NewPasswordForm> = {
  title: "Components/Forms/NewPasswordForm",
  component: NewPasswordForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable new password form component with TanStack Query integration for password updates and resets.",
      },
    },
  },
  argTypes: {
    apiEndpoint: {
      description: "Custom password update API endpoint",
      control: "text",
    },
    authenticityToken: {
      description: "Custom authenticity token for CSRF protection",
      control: "text",
    },
    resetPasswordToken: {
      description: "Reset password token (for password reset flow)",
      control: "text",
    },
    showCurrentPassword: {
      description:
        "Whether to show current password field (for authenticated users)",
      control: "boolean",
    },
    showResetToken: {
      description:
        "Whether to show reset token field (for password reset flow)",
      control: "boolean",
    },
    onSuccess: {
      description: "Function called when password update is successful",
      action: "success",
    },
    onError: {
      description: "Function called when password update fails",
      action: "error",
    },
    onRedirect: {
      description: "Custom redirect function after successful password update",
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

export const PasswordReset: Story = {
  args: {
    showResetToken: true,
    buttonText: "Reset Password",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password reset flow where users enter a reset token and set a new password.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const PasswordResetWithToken: Story = {
  args: {
    resetPasswordToken: "abc123def456",
    buttonText: "Set New Password",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password reset flow with a pre-filled reset token (token field is hidden).",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const PasswordChange: Story = {
  args: {
    showCurrentPassword: true,
    buttonText: "Change Password",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password change flow for authenticated users who know their current password.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    disabled: true,
    buttonText: "Updating Password...",
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
    apiEndpoint: "/api/v1/users/password",
    showCurrentPassword: true,
    buttonText: "Update",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with a custom API endpoint for password updates.",
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "border-2 border-green-200 rounded-xl p-4",
    buttonText: "Secure Update",
    showCurrentPassword: true,
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
