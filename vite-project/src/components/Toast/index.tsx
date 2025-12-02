import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export interface Props {
	message: string
	type: 'success' | 'error' | 'info'
	duration?: number
}

export function Toast({ message, type, duration = 3000 }: Props) {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setVisible(true)

		const timer = setTimeout(() => {
			setVisible(false)
		}, duration)

		return () => clearTimeout(timer)
	}, [duration])

	let bgColor = 'bg-blue-500'

	if (type === 'success') {
		bgColor = 'bg-green-500'
	} else if (type === 'error') {
		bgColor = 'bg-red-500'
	}

	return (
		<div
			className={`flex items-center fixed bottom-10 right-10 ${bgColor} text-white p-3 rounded-2xl transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
		>
			{message}
			<button
				onClick={() => setVisible(false)}
				className="ml-2 bg-transparent border-none cursor-pointer"
			>
				<X />
			</button>
		</div>
	)
}
