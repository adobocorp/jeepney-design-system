import type { Meta, StoryObj } from "@storybook/react";
import { HEADING, Typography } from "../../../packages/ui/src/components/typography";

const meta: Meta<typeof Typography> = {
    title: "Components/Elements/Typography",
    component: Typography,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component:
                    "A versatile typography component for headings with consistent design system font sizes and styling. Supports H1 through H5 heading levels with proper semantic HTML.",
            },
        },
    },
    argTypes: {
        children: {
            description: "The text content to display",
            control: "text",
        },
        heading: {
            description: "The heading level (H1-H5)",
            control: "select",
            options: Object.values(HEADING),
            table: {
                type: { summary: "HEADING" },
                defaultValue: { summary: "HEADING.H1" },
            },
        },
        className: {
            description: "Additional CSS classes",
            control: "text",
            table: { category: "Styling" },
        },
        id: {
            description: "HTML id attribute",
            control: "text",
            table: { category: "HTML Attributes" },
        },
        role: {
            description: "ARIA role attribute",
            control: "text",
            table: { category: "Accessibility" },
        },
    },
    decorators: [
        (Story) => (
            <div className="p-6 max-w-4xl">
                <Story />
            </div>
        ),
    ],
    includeStories: ["H1", "H2", "H3", "H4", "H5", "AllHeadings", "LongText", "NavigationExample", "ContentHierarchy"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
    args: {
        heading: HEADING.H1,
        children: "Main Page Title",
    },
    parameters: {
        docs: {
            description: {
                story: "H1 heading - largest size, typically used for main page titles and primary headings.",
            },
        },
    },
};

export const H2: Story = {
    args: {
        heading: HEADING.H2,
        children: "Section Heading",
    },
    parameters: {
        docs: {
            description: {
                story: "H2 heading - used for major section headings and secondary titles.",
            },
        },
    },
};

export const H3: Story = {
    args: {
        heading: HEADING.H3,
        children: "Subsection Title",
    },
    parameters: {
        docs: {
            description: {
                story: "H3 heading - used for subsection titles and tertiary headings.",
            },
        },
    },
};

export const H4: Story = {
    args: {
        heading: HEADING.H4,
        children: "Minor Heading",
    },
    parameters: {
        docs: {
            description: {
                story: "H4 heading - used for minor headings and content subdivisions.",
            },
        },
    },
};

export const H5: Story = {
    args: {
        heading: HEADING.H5,
        children: "Small Heading",
    },
    parameters: {
        docs: {
            description: {
                story: "H5 heading - smallest size, used for fine-grained content organization.",
            },
        },
    },
};

export const AllHeadings: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography heading={HEADING.H1}>H1 - Main Page Title</Typography>
            <Typography heading={HEADING.H2}>H2 - Section Heading</Typography>
            <Typography heading={HEADING.H3}>H3 - Subsection Title</Typography>
            <Typography heading={HEADING.H4}>H4 - Minor Heading</Typography>
            <Typography heading={HEADING.H5}>H5 - Small Heading</Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "All heading levels displayed together for size comparison and hierarchy visualization.",
            },
        },
    },
};

export const LongText: Story = {
    args: {
        heading: HEADING.H2,
        children: "This is a very long heading that demonstrates how the typography component handles longer text content and line wrapping behavior",
    },
    parameters: {
        docs: {
            description: {
                story: "Typography component with longer text to test wrapping and layout behavior.",
            },
        },
    },
};

export const WithCustomStyling: Story = {
    args: {
        heading: HEADING.H2,
        children: "Custom Styled Heading",
        className: "text-blue-600 underline",
    },
    parameters: {
        docs: {
            description: {
                story: "Typography component with additional custom CSS classes for color and decoration.",
            },
        },
    },
};

export const WithHTMLAttributes: Story = {
    args: {
        heading: HEADING.H3,
        children: "Accessible Heading",
        id: "main-section",
        role: "heading",
        "aria-level": 3,
    },
    parameters: {
        docs: {
            description: {
                story: "Typography component with HTML attributes for accessibility and linking.",
            },
        },
    },
};

export const NavigationExample: Story = {
    render: () => (
        <nav className="space-y-2">
            <Typography heading={HEADING.H1} className="mb-4">
                Pitongput
            </Typography>
            <div className="ml-4 space-y-2">
                <Typography heading={HEADING.H2} className="text-gray-700">
                    Pitong
                </Typography>
                <div className="ml-4 space-y-1">
                    <Typography heading={HEADING.H3} className="text-gray-600">
                        Puting
                    </Typography>
                    <Typography heading={HEADING.H4} className="text-gray-500 ml-4">
                        Tupa
                    </Typography>
                </div>
            </div>
        </nav>
    ),
    parameters: {
        docs: {
            description: {
                story: "Example showing proper heading hierarchy in a navigation context with visual styling.",
            },
        },
    },
}

export const ContentHierarchy: Story = {
    render: () => (
        <article className="max-w-2xl space-y-4">
            <Typography heading={HEADING.H1} className="text-right border-b text-gray-600">
                J. RIZAL
            </Typography>

            <div className="space-y-0 text-center">
                <Typography heading={HEADING.H2} className="text-gray-600">
                    ANG “FILIBUSTERISMO” (Karugtóng ng̃ NOLI ME TANGERE)
                </Typography>

                <Typography heading={HEADING.H5} className="text-gray-700">
                    Tinagalog ni PATRICIO MARIANO
                </Typography>

            </div>
            <p>
                Masasapantaha kaagád, na, lihim na nágayuma ñg isáng FILIBUSTERO ang kapisanan ñg mg̃a makapraile at mg̃a laban sa pagkakasulong, upáng, sa pag-alinsunod na waláng malay sa mg̃a udyók ñg kaniláng kalooban, ay makatulong at makapagpalusóg doon sa imbót na íisang bagay ang linalayon: palaganapin ang adhiká ñg FILIBUSTERISMO sa boong bayan at pananaligin ang lahát ñg pilipino na waláng ibáng kaligtasan liban sa humiwaláy sa España.
            </p>
            <p>
                Kung ihuhulog sa wikang tagalog ang salitáng FILIBUSTERISMO ay lubhang hahaba ang pañgalan ñg aklát na itó at marahil ay mangyaring hindi pa mawatasan ñg babasa, kaya’t hindi na namin inihulog sa wika natin; ñguni’t ílalagáy namán ang katuturán ó kahulugán ñg salitáng itó upang mabatíd noong mg̃a hindi nakaaalam ñg kaniyang kahulugán.
            </p>
            <p>
                FILIBUSTERO: Galing sa salitáng inglés na freebooter; itinawag sa iláng mangdadambóng na lumagusaw sa karagatang Antillas, América, niyong 1700.—FILIBUSTERO din ang tawag sa mg̃a taong nag-uusig na mápahiwalay sa España ang mg̃a lupaíng sakop nitó, sa kabilá ñg mg̃a dagat, kayá’t ang salitáng FILIBUSTERISMO ay waláng ibáng kahulugán kun di ang adhikáng pag-usígin ang paghiwaláy sa nakasasakop.—P. ng̃ T.
            </p>
        </article>
    ),
    parameters: {
        docs: {
            description: {
                story: "Real-world example showing proper content hierarchy and heading usage in an article layout.",
            },
        },
    },
};

export const InteractiveHeading: Story = {
    args: {
        heading: HEADING.H2,
        children: "Click me!",
        onClick: () => alert("Heading clicked!"),
        className: "cursor-pointer hover:text-blue-600 transition-colors",
    },
    parameters: {
        docs: {
            description: {
                story: "Typography component with click handler and hover effects for interactive headings.",
            },
        },
    },
};
