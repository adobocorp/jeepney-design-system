# @adobo-network/authentication-forms

Reusable React form components built with TanStack Query for efficient state management and error handling.

## Features

- 🚀 Built with React 19 and TanStack Query
- 🎨 Styled with Tailwind CSS
- 🔒 Secure authentication with CSRF token support
- 📱 Responsive design
- 🎛️ Customizable and extensible
- 📝 TypeScript support
- ♿ Accessibility features

## Development & Testing

## Installation

```bash
npm install @adobo-network/authentication-forms
# or with pnpm
pnpm add @adobo-network/authentication-forms
```

### Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom react-router-dom @tanstack/react-query @base-ui-components/react
# or with pnpm
pnpm add react react-dom react-router-dom @tanstack/react-query @base-ui-components/react
```

## Basic Usage

```tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { SignInForm } from "@adobo-network/authentication-forms";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="max-w-md mx-auto mt-8">
          <SignInForm
            onSuccess={(user) => {
              console.log("Signed in successfully:", user);
            }}
            onError={(error) => {
              console.error("Sign in failed:", error);
            }}
          />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
```

## Advanced Usage

### Custom API Endpoint

```tsx
<SignInForm
  apiEndpoint="/custom/auth/endpoint"
  onSuccess={(user) => {
    // Handle successful authentication
    localStorage.setItem("user", JSON.stringify(user));
  }}
  onError={(error) => {
    // Handle authentication errors
    alert(error);
  }}
/>
```

### Custom Redirect Logic

```tsx
<SignInForm
  onRedirect={(path) => {
    // Custom redirect logic
    window.location.href = path;
  }}
  buttonText="Sign In"
  className="my-custom-form-class"
/>
```

### Using Individual Components

```tsx
import {
  SignInFormLayout,
  FormButton,
  useSignIn,
  useAuthenticityToken,
} from "@adobo-network/authentication-forms";

function CustomSignInForm() {
  const token = useAuthenticityToken();
  const signInMutation = useSignIn({
    onSuccess: (data) => {
      console.log("Success:", data.user);
    },
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await signInMutation.mutateAsync({
      token,
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SignInFormLayout />
      <FormButton text="Login" disabled={signInMutation.isPending} />
    </form>
  );
}
```

## API Reference

### SignInForm Props

| Prop                | Type                      | Default           | Description                                       |
| ------------------- | ------------------------- | ----------------- | ------------------------------------------------- |
| `apiEndpoint`       | `string`                  | `"/auth/sign_in"` | Custom authentication endpoint                    |
| `authenticityToken` | `string`                  | `undefined`       | Custom CSRF token (auto-detected if not provided) |
| `onSuccess`         | `(user: unknown) => void` | `undefined`       | Callback for successful authentication            |
| `onError`           | `(error: string) => void` | `undefined`       | Callback for authentication errors                |
| `onRedirect`        | `(path: string) => void`  | `undefined`       | Custom redirect function                          |
| `disabled`          | `boolean`                 | `false`           | Disable the form                                  |
| `buttonText`        | `string`                  | `"Login"`         | Text for the submit button                        |
| `className`         | `string`                  | `""`              | Additional CSS classes                            |

### Hooks

#### useSignIn

```tsx
const signInMutation = useSignIn({
  onSuccess: (data) => void,
  onError: (error) => void,
});
```

#### useAuthenticityToken

```tsx
const token = useAuthenticityToken(); // Returns CSRF token from meta tag
```

#### useMasked

```tsx
const { masked, toggleMasked } = useMasked(); // For password visibility toggle
```

## Styling

The component uses Tailwind CSS classes. Make sure Tailwind CSS is configured in your project. You can customize the appearance by:

1. Overriding CSS classes
2. Using the `className` prop
3. Customizing individual components

## Server Requirements

The server endpoint should:

1. Accept POST requests with JSON body containing:

   ```json
   {
     "authenticity_token": "csrf_token",
     "email": "user@example.com",
     "password": "password"
   }
   ```

2. Return user data on success:

   ```json
   {
     "id": 1,
     "email": "user@example.com",
     "name": "User Name"
   }
   ```

3. Return appropriate HTTP status codes:
   - `200`: Success
   - `401`: Invalid credentials
   - `422`: Invalid authenticity token

## License

MIT
