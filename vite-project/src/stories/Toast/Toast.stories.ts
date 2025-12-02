import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../../components/Toast";

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
    args: {
        message: "Success!",
        type: "success",
        duration: 3000,
    },
};

export const Error: Story = {
    args: {
        message: "Something went wrong(",
        type: "error",
        duration: 3000,
    },
};

export const Info: Story = {
    args: {
        message: "Some info.",
        type: "info",
        duration: 5000,
    },
};

export const LongDuration: Story = {
    args: {
        message: "This one stays longer.",
        type: "info",
        duration: 8000,
    },
};