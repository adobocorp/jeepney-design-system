import { Footer } from "@jeepney-design-system/ui/src/components/footer";
import {
  HEADING,
  Typography,
} from "@jeepney-design-system/ui/src/components/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  render: (args) => <Footer {...args} />,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50 w-full md:w-[800px] min-h-screen flex flex-col justify-space-between">
        <div className="flex-grow" />
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: (
      <>
        <a href="http://github.com/adobocorp/jeepney-design-system">
          <Typography heading={HEADING.SPAN_AS_LINK}>JDS on GitHub</Typography>
        </a>
      </>
    ),
  },
};
