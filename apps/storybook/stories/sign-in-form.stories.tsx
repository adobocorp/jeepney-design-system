import { SignInForm } from "@jeepney-design-system/ui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignInForm> = {
  title: "Components/Authentication/SignInForm",
  component: SignInForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable sign-in form component with TanStack Query integration for authentication.",
      },
    },
  },
  argTypes: {
    onSignIn: {
      description: "Function called when the form is submitted",
      action: "signIn",
    },
    onSuccess: {
      description: "Function called when sign-in is successful",
      action: "success",
    },
    onError: {
      description: "Function called when sign-in fails",
      action: "error",
    },
    isLoading: {
      description: "Whether the form is in a loading state",
      control: "boolean",
    },
    className: {
      description: "Additional CSS classes for the form container",
      control: "text",
    },
    title: {
      description: "Custom title text displayed above the form",
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
  includeStories: ["Default", "Tagalog"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSignIn: action("onSignIn"),
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
};

export const Tagalog: Story = {
  args: {
    onSignIn: action("onSignIn"),
    onSuccess: action("onSuccess"),
    onError: action("onError"),
    title: "Mag-sign In sa Iyong Account",
    description: "Ilagay ang iyong email at password upang mag-sign in.",
  },
};

export const WithCustomButton: Story = {
  args: {
    buttonText: "Sign In",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Sign-in form with custom button text.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    buttonText: "Signing In...",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the form in a loading/disabled state during authentication.",
      },
    },
  },
};

export const CustomEndpoint: Story = {
  args: {
    apiEndpoint: "/api/v1/auth/login",
    buttonText: "Log In",
    onSuccess: action("onSuccess"),
    onError: action("onError"),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with a custom API endpoint for authentication.",
      },
    },
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "border-2 border-blue-200 rounded-xl p-4 bg-blue-50",
    buttonText: "Enter Account",
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

export const WithCallbacks: Story = {
  args: {
    onSuccess: (user: unknown) => {
      action("onSuccess")(user);
      console.log("User signed in:", user);
    },
    onError: (error: string) => {
      action("onError")(error);
      console.error("Sign-in failed:", error);
    },
    onRedirect: (path: string) => {
      action("onRedirect")(path);
      console.log("Redirecting to:", path);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all callback functions with additional logging.",
      },
    },
  },
};
