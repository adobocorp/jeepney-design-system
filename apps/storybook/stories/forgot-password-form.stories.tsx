import { ForgotPasswordForm } from "@jeepney-design-system/ui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ForgotPasswordForm> = {
    title: "Components/Authentication/ForgotPasswordForm",
    component: ForgotPasswordForm,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "A reusable forgot password form component that handles password reset requests with validation and error handling.",
            },
        },
    },
    argTypes: {
        apiEndpoint: {
            description: "Custom password reset API endpoint",
            control: "text",
            table: { defaultValue: { summary: '"/auth/password/reset"' } },
        },
        authenticityToken: {
            description: "Custom authenticity token for CSRF protection",
            control: "text",
            table: { defaultValue: { summary: "undefined" } },
        },
        onSuccess: {
            description: "Function called when password reset request is successful",
            action: "success",
            table: { category: "Events" },
        },
        onError: {
            description: "Function called when password reset request fails",
            action: "error",
            table: { category: "Events" },
        },
        onRedirect: {
            description: "Function called to handle navigation after success",
            action: "redirect",
            table: { category: "Events" },
        },
        disabled: {
            description: "Whether the form is in a disabled state",
            control: "boolean",
            table: { defaultValue: { summary: "false" } },
        },
        buttonText: {
            description: "Custom text for the submit button",
            control: "text",
            table: { defaultValue: { summary: '"Send Forgot Instructions"' } },
        },
        className: {
            description: "Additional CSS classes for the form container",
            control: "text",
            table: { defaultValue: { summary: '""' } },
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
    includeStories: ["Default", "Tagalog"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Default forgot password form with standard messaging and button text.",
            },
        },
    },
};

export const Tagalog: Story = {
    args: {
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
        title: "Nakalimutan ang Iyong Password?",
        description: "Ilagay ang iyong email address at magpapadala kami ng link upang i-reset ang iyong password.",
    },
};
export const CustomButtonText: Story = {
    args: {
        buttonText: "Reset My Password",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form with custom button text.",
            },
        },
    },
};

export const CustomDescription: Story = {
    args: {
        description: "Don't worry! It happens to the best of us. Enter your email address below and we'll help you get back into your account.",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form with custom description text.",
            },
        },
    },
};

export const NoDescription: Story = {
    args: {
        description: "",
        buttonText: "Send Reset Link",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form without description text.",
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
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form in disabled/loading state.",
            },
        },
    },
};

export const CustomEndpoint: Story = {
    args: {
        apiEndpoint: "/api/v2/password/reset",
        buttonText: "Send Instructions",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form with custom API endpoint.",
            },
        },
    },
};

export const WithCSRFToken: Story = {
    args: {
        authenticityToken: "sample-csrf-token-12345",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form with custom CSRF authenticity token.",
            },
        },
    },
};

export const FullyCustomized: Story = {
    args: {
        apiEndpoint: "/custom/reset-password",
        authenticityToken: "custom-token",
        buttonText: "Send Recovery Email",
        description: "Enter your registered email address and we'll send you a secure link to create a new password.",
        className: "custom-form-styling",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Fully customized forgot password form with all available props configured.",
            },
        },
    },
};

export const ErrorHandling: Story = {
    args: {
        onSuccess: (response: unknown) => {
            action("onSuccess")(response);
            alert("Success! Check your email for reset instructions.");
        },
        onError: (error: string) => {
            action("onError")(error);
            console.error("Password reset error:", error);
        },
        onRedirect: (path: string) => {
            action("onRedirect")(path);
            alert(`Would redirect to: ${path}`);
        },
    },
    parameters: {
        docs: {
            description: {
                story: "Forgot password form with custom success/error handling that shows alerts and console logs.",
            },
        },
    },
};

export const MinimalConfiguration: Story = {
    args: {
        onSuccess: action("onSuccess"),
    },
    parameters: {
        docs: {
            description: {
                story: "Minimal forgot password form configuration with only success handler.",
            },
        },
    },
};
