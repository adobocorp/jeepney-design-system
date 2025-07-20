# @adobo-network/storybook

A comprehensive Storybook showcase for Adobo Network component library, featuring interactive documentation and testing for all available components.

## Features

- 📚 **Component Documentation**: Interactive stories for all Adobo Network components
- 🎨 **Design System**: Visual showcase of component variations, states, and styling options
- 🧪 **Interactive Testing**: Test components with different props and configurations
- 🔄 **Real-time Updates**: Live editing and testing environment
- 🎯 **TanStack Query Integration**: Proper context providers for testing data-fetching components
- 🌈 **Tailwind CSS Support**: Full styling support with custom configurations

## Components Showcased

### SignInForm

Complete authentication form with TanStack Query integration:

- Default configuration
- Loading states
- Error handling
- Custom styling variations
- Interactive demo with mock authentication

### Button

Versatile button component with multiple variations:

- Primary, Secondary, Tertiary ranks
- Small, Medium, Large sizes
- Blue, Red, Green, Gray color schemes
- Disabled states
- Full-width options
- Loading states

### EmailField

Email input with validation features:

- Standard email input
- Placeholder variations
- Required field states
- Disabled states
- Custom styling
- Real-time validation feedback

### MaskedPasswordField

Secure password input with show/hide functionality:

- Password masking/unmasking
- Toggle button functionality
- Strength validation demo
- Security best practices
- Custom styling options

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm package manager
- Adobo Network workspace setup

### Installation

From the workspace root:

```bash
# Install dependencies
pnpm install

# Navigate to storybook package
cd packages/adobo-network-storybook

# Start Storybook development server
pnpm storybook
```

### Available Scripts

```bash
# Start Storybook development server
pnpm storybook

# Build static Storybook
pnpm build-storybook

# Serve built Storybook
pnpm serve-storybook
```

## Usage

### Viewing Stories

1. Start the development server: `pnpm storybook`
2. Open http://localhost:6006 in your browser
3. Navigate through the component stories in the sidebar
4. Interact with controls to modify component props
5. View component code and documentation

### Testing Components

- Use the **Controls** panel to modify component properties
- Check the **Actions** panel to see event callbacks
- Switch between different **Canvas** backgrounds
- View component **Docs** for detailed information

### Adding New Stories

1. Create a new `.stories.tsx` file in the `stories/` directory
2. Import the component from `@adobo-network/authentication-forms`
3. Define story metadata and variations
4. Export story objects with different configurations

Example:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "@adobo-network/authentication-forms";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // component props
  },
};
```

## Development Features

### Hot Reload

Stories automatically reload when you make changes to:

- Story files (`.stories.tsx`)
- Component source code
- Storybook configuration

### Mock Data

Storybook includes mock implementations for:

- Authentication API calls
- TanStack Query client
- React Router navigation
- Event handlers and callbacks

### Context Providers

All stories are wrapped with necessary providers:

- `QueryClientProvider` for TanStack Query
- `BrowserRouter` for React Router
- Custom styling containers

## Configuration

### Storybook Configuration

- **main.ts**: Core Storybook configuration
- **preview.tsx**: Global decorators and parameters
- **Vite integration**: Optimized build and development

### Styling

- **Tailwind CSS**: Full utility-first CSS framework
- **PostCSS**: Modern CSS processing
- **Custom themes**: Multiple background options

### TypeScript

- **Strict mode**: Enhanced type safety
- **Path mapping**: Workspace package resolution
- **Component typing**: Full IntelliSense support

## Architecture

```
packages/adobo-network-storybook/
├── .storybook/           # Storybook configuration
│   ├── main.ts          # Core config
│   └── preview.tsx      # Global setup
├── stories/             # Component stories
│   ├── SignInForm.stories.tsx
│   ├── Button.stories.tsx
│   ├── EmailField.stories.tsx
│   └── MaskedPasswordField.stories.tsx
├── src/                 # Source files
│   └── styles.css       # Global styles
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Contributing

1. **Add new components**: Create corresponding stories when adding components to `@adobo-network/authentication-forms`
2. **Update documentation**: Keep stories in sync with component API changes
3. **Test thoroughly**: Verify all stories work correctly before committing
4. **Follow patterns**: Use existing stories as templates for consistency

## Deployment

### Build for Production

```bash
pnpm build-storybook
```

This creates a `storybook-static/` directory with a complete static website that can be deployed to any web server.

### Hosting Options

- **Netlify/Vercel**: Automatic deployment from Git
- **GitHub Pages**: Free hosting for public repositories
- **Chromatic**: Visual testing and review workflows
- **Custom server**: Any static file hosting solution

## License

MIT - See LICENSE file for details
