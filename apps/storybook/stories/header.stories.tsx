import {
  Button,
  COLOR,
  SIZE,
  WIDTH,
} from "@jeepney-design-system/ui/src/components/button";
import { Header } from "@jeepney-design-system/ui/src/components/header";
import {
  HEADING,
  Typography,
} from "@jeepney-design-system/ui/src/components/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Components/Header",
  component: Header,
  tags: ["autodocs"],
  render: (args) => <Header {...args} />,
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story></Story>
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: "Jeepney Design System",
    children: (
      <ul
        className="flex flex-col md:flex-row text-center border-b border-color-base-grey-200 pt-4 w-full md:p-0 md:border-b-0 md:justify-end md:
      4"
      >
        <li className="py-4 border-t border-color-base-grey-200 md:border-t-0 md:p-0">
          <a href="http://github.com/adobocorp/jeepney-design-system">
            <Typography heading={HEADING.SPAN_AS_LINK}>
              JDS on GitHub
            </Typography>
          </a>
        </li>
      </ul>
    ),
  },
};

export const BackButtonAsHeader: Story = {
  args: {
    children: (
      <Button color={COLOR.primary} size={SIZE.medium} width={WIDTH.regular}>
        <span>{`< `} Bumalik sa Bahay</span>
      </Button>
    ),
  },
};
