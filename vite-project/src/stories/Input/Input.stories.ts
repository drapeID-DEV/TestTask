import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../components/Input'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Input>

export const Text: Story = {
	args: {
		inputType: 'text',
		clearable: false
	}
}

export const Clearable: Story = {
	args: {
		inputType: 'text',
		clearable: true
	}
}

export const Password: Story = {
	args: {
		inputType: 'password',
		clearable: false
	}
}

export const PasswordClearable: Story = {
	args: {
		inputType: 'password',
		clearable: true
	}
}
