import { ResetPasswordForm } from "@jeepney-design-system/ui";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ResetPasswordForm> = {
    title: "Components/Authentication/ResetPasswordForm",
    component: ResetPasswordForm,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "A reusable reset password form component that handles password updates with validation, confirmation matching, and error handling. Supports both password reset flows and authenticated password changes.",
            },
        },
    },
    argTypes: {
        apiEndpoint: {
            description: "Custom password update API endpoint",
            control: "text",
            table: { defaultValue: { summary: '"/auth/password"' } },
        },
        authenticityToken: {
            description: "Custom authenticity token for CSRF protection",
            control: "text",
            table: { defaultValue: { summary: "undefined" } },
        },
        accessToken: {
            description: "Reset password token for password reset flow",
            control: "text",
            table: { defaultValue: { summary: "undefined" } },
        },
        clientId: {
            description: "Client ID for authenticated users",
            control: "text",
            table: { defaultValue: { summary: "undefined" } },
        },
        uid: {
            description: "Current user's ID for authenticated users",
            control: "text",
            table: { defaultValue: { summary: "undefined" } },
        },
        onSuccess: {
            description: "Function called when password update is successful",
            action: "success",
            table: { category: "Events" },
        },
        onError: {
            description: "Function called when password update fails",
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
            table: { defaultValue: { summary: '"Update Password"' } },
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
    parameters: {
        docs: {
            description: {
                story: "Default reset password form with standard button text and validation.",
            },
        },
    },
};

export const Tagalog: Story = {
    args: {
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
        title: "I-reset ang Iyong Password",
        description: "Punan ang form sa ibaba upang i-reset ang iyong password.",
    },
    parameters: {
        docs: {
            description: {
                story: "Default reset password form with standard button text and validation.",
            },
        },
    },
};
export const PasswordResetFlow: Story = {
    args: {
        accessToken: "sample-reset-token-12345",
        uid: "user123",
        clientId: "client456",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form configured for password reset flow with reset tokens.",
            },
        },
    },
};

export const AuthenticatedUser: Story = {
    args: {
        uid: "authenticated-user-789",
        clientId: "auth-client-123",
        buttonText: "Change Password",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form for authenticated users changing their password.",
            },
        },
    },
};

export const CustomButtonText: Story = {
    args: {
        buttonText: "Save New Password",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form with custom button text.",
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        buttonText: "Updating...",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form in disabled/loading state.",
            },
        },
    },
};

export const CustomEndpoint: Story = {
    args: {
        apiEndpoint: "/api/v2/user/password",
        buttonText: "Update Password",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form with custom API endpoint.",
            },
        },
    },
};

export const WithCSRFToken: Story = {
    args: {
        authenticityToken: "csrf-token-67890",
        accessToken: "reset-token-54321",
        uid: "user456",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form with custom CSRF authenticity token.",
            },
        },
    },
};

export const FullyConfigured: Story = {
    args: {
        apiEndpoint: "/custom/password/update",
        authenticityToken: "custom-csrf-token",
        accessToken: "secure-reset-token",
        uid: "user-12345",
        clientId: "client-67890",
        buttonText: "Confirm New Password",
        className: "custom-password-form",
        onSuccess: action("onSuccess"),
        onError: action("onError"),
        onRedirect: action("onRedirect"),
    },
    parameters: {
        docs: {
            description: {
                story: "Fully configured reset password form with all available props set.",
            },
        },
    },
};

export const CustomEventHandling: Story = {
    args: {
        onSuccess: (user: unknown) => {
            action("onSuccess")(user);
            alert("Password updated successfully! You are now logged in.");
        },
        onError: (error: string) => {
            action("onError")(error);
            console.error("Password update error:", error);
        },
        onRedirect: (path: string) => {
            action("onRedirect")(path);
            alert(`Would redirect to: ${path}`);
        },
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form with custom event handling that shows alerts and logs.",
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
                story: "Minimal reset password form configuration with only success handler.",
            },
        },
    },
};

export const SecureConfiguration: Story = {
    args: {
        apiEndpoint: "/secure/password/reset",
        authenticityToken: "secure-csrf-token-abc123",
        accessToken: "secure-reset-token-def456",
        uid: "secure-user-789",
        clientId: "secure-client-012",
        buttonText: "Securely Update Password",
        onSuccess: (user: unknown) => {
            action("onSuccess")(user);
            console.log("Secure password update completed");
        },
        onError: (error: string) => {
            action("onError")(error);
            console.error("Secure password update failed:", error);
        },
        onRedirect: (path: string) => {
            action("onRedirect")(path);
            console.log("Redirecting to secure area:", path);
        },
    },
    parameters: {
        docs: {
            description: {
                story: "Reset password form configured for maximum security with all tokens and secure endpoints.",
            },
        },
    },
};
