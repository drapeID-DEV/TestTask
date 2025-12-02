import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MENU_ITEMS } from '../../data/menu.data'
import { SidebarMenu } from '../../components/SidebarMenu'

const meta: Meta<typeof SidebarMenu> = {
	title: 'Components/SidebarMenu',
	component: SidebarMenu
}
export default meta

type Story = StoryObj<typeof SidebarMenu>

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false)

		return (
			<div className="p-4">
				<button
					onClick={() => setOpen(true)}
					className="p-2 bg-blue-500 text-white rounded"
				>
					Open Sidebar
				</button>

				<SidebarMenu
					isOpen={open}
					onClose={() => setOpen(false)}
					items={MENU_ITEMS}
				/>
			</div>
		)
	}
}
