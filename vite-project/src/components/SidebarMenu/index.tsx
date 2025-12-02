import { Play } from 'lucide-react'
import { useState } from 'react'
import type { MenuItem } from '../../types/menuItem.types'

interface Props {
	isOpen: boolean
	onClose: () => void
	items: MenuItem[]
}

export function SidebarMenu({ isOpen, onClose, items }: Props) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggleSubmenu = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 backdrop-blur-sm"
					onClick={onClose}
				/>
			)}
			<div
				className={`fixed top-0 right-0 h-full w-72 bg-white text-black transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="p-4 text-lg font-bold">Sidebar</div>

				<ul className="p-4 space-y-2">
					{items.map((item, index) => (
						<li key={item.label}>
							<button
								onClick={() => toggleSubmenu(index)}
								className="flex justify-between items-center w-full p-3 rounded-2xl hover:bg-gray-100 hover:cursor-pointer"
							>
								<span>{item.label}</span>

								{item.children && (
									<span
										className={`transition-all ${
											openIndex === index
												? 'rotate-90'
												: ''
										}`}
									>
										<Play />
									</span>
								)}
							</button>
							{item.children && openIndex === index && (
								<ul className="mt-2 space-y-1 border-gray-300">
									{item.children.map((child) => (
										<li
											key={child.label}
											className="py-2 px-3 rounded-2xl hover:bg-gray-500 hover:cursor-pointer"
										>
											{child.label}
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
