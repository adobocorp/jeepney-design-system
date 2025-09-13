import { Fieldset } from "@headlessui/react";
import {
  Button,
  COLOR,
  SIZE,
  WIDTH,
} from "@jeepney-design-system/ui/src/components/button";
import { EmailField } from "@jeepney-design-system/ui/src/components/form/field/email-field";
import { PasswordField } from "@jeepney-design-system/ui/src/components/form/field/password-field";
import { TextField } from "@jeepney-design-system/ui/src/components/form/field/text-field";
import {
  HEADING,
  Typography,
} from "@jeepney-design-system/ui/src/components/typography";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof TextField> = {
  title: "Components/Components/Form",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A collection of form components including text fields, email fields, password fields, and complete form layouts with validation.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50 w-full md:w-[800px] min-h-screen">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
          <Story />
        </div>
      </div>
    ),
  ],
};

export const FormInteractivity: StoryObj = {
  name: "Interactive Form Demo",
  render: () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        alert("Form submitted successfully!");
      }
    };

    return (
      <div>
        <div className="border-b border-1 border-color-gray-300 mb-6">
          <Typography heading={HEADING.H2}>
            Mag-rehistro ng inyong account
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Fieldset className={"flex flex-col gap-4"}>
            <TextField
              id="interactive_first_name"
              name="first_name"
              label="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required={true}
            />
            {errors.firstName && (
              <div className="text-red-600 text-sm mt-1">
                {errors.firstName}
              </div>
            )}

            <TextField
              id="interactive_last_name"
              name="last_name"
              label="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />

            <EmailField
              onChange={(value) => setFormData({ ...formData, email: value })}
              error={errors.email}
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}

            <PasswordField
              id="interactive_password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={(value) =>
                setFormData({ ...formData, password: value })
              }
              error={errors.password}
            />

            <PasswordField
              id="interactive_confirm_password"
              name="confirm_password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={(value) =>
                setFormData({ ...formData, confirmPassword: value })
              }
              error={errors.confirmPassword}
            />
          </Fieldset>

          <Button
            type="submit"
            color={COLOR.primary}
            size={SIZE.medium}
            width={WIDTH.inherit}
          >
            Submit Form
          </Button>
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A fully interactive form demonstrating real-time validation, form submission, and error handling. Try submitting with invalid data to see the validation in action.",
      },
    },
  },
};

export default meta;

export const TextFieldReadonly: StoryObj<typeof TextField> = {
  name: "TextField - Readonly",
  render: (args: any) => <TextField {...args} />,
  args: {
    id: "username",
    name: "username",
    label: "Username",
    value: "jose.rizal",
    required: false,
    readonly: true,
  },
};

export const TextFieldWithValue: StoryObj<typeof TextField> = {
  name: "TextField - With Value",
  render: (args: any) => {
    const [value, setValue] = useState(args.value || "");
    return (
      <TextField
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    );
  },
  args: {
    id: "company",
    name: "company",
    label: "Company",
    value: "San Miguel Beer Company",
    required: false,
    readonly: false,
  },
};

// EmailField Stories
export const EmailFieldDefault: StoryObj<typeof EmailField> = {
  name: "EmailField - Default",
  render: () => <EmailField />,
  parameters: {
    docs: {
      description: {
        story:
          "Standard email field with validation pattern and autocomplete. Includes proper email format validation.",
      },
    },
  },
};

// PasswordField Stories
export const PasswordFieldDefault: StoryObj<typeof PasswordField> = {
  name: "PasswordField - Default",
  render: (args: any) => {
    const [value, setValue] = useState("");
    return <PasswordField {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: "password",
    name: "password",
    label: "Password",
    autoComplete: "current-password",
  },
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the password field",
    },
    name: {
      control: "text",
      description: "Name attribute for the password field",
    },
    label: {
      control: "text",
      description: "Label text for the password field",
    },
    autoComplete: {
      control: "select",
      options: ["current-password", "new-password"],
      description: "Autocomplete attribute for the password field",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
};

export const PasswordConfirmation: StoryObj = {
  name: "Password Confirmation Example",
  render: () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handlePasswordChange = (value: string) => {
      setPassword(value);
      if (confirmPassword && value !== confirmPassword) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    };

    const handleConfirmPasswordChange = (value: string) => {
      setConfirmPassword(value);
      if (password && value !== password) {
        setError("Passwords do not match");
      } else {
        setError("");
      }
    };

    return (
      <div className="space-y-4">
        <PasswordField
          id="password_demo"
          name="password_demo"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="new-password"
          error={error && password ? error : ""}
        />
        <PasswordField
          id="confirm_password_demo"
          name="confirm_password_demo"
          label="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          autoComplete="new-password"
          error={error && confirmPassword ? error : ""}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing password confirmation validation with real-time error feedback. Type different passwords to see the validation in action.",
      },
    },
  },
};

export const FormStates: StoryObj = {
  name: "Form Field States",
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography heading={HEADING.H2}>Different Field States</Typography>
        <div className="space-y-4">
          <TextField
            id="normal"
            name="normal"
            label="Normal State"
            value=""
            required={false}
          />
          <TextField
            id="filled"
            name="filled"
            label="Filled State"
            value="Sample text content"
            required={false}
          />
          <TextField
            id="required"
            name="required"
            label="Required Field"
            value=""
            required={true}
          />
          <TextField
            id="readonly"
            name="readonly"
            label="Read-only Field"
            value="Cannot be edited"
            readonly={true}
          />
          <PasswordField
            id="password_normal"
            name="password_normal"
            label="Password Normal"
            value=""
            onChange={() => {}}
          />
          <PasswordField
            id="password_error"
            name="password_error"
            label="Password with Error"
            value="abc"
            onChange={() => {}}
            error="Password too short"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different states of form fields including normal, filled, required, readonly, and error states. This helps demonstrate the visual feedback provided by each field type.",
      },
    },
  },
};
