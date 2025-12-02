import { EyeClosedIcon, EyeIcon, X } from 'lucide-react'
import { useState } from 'react'

export interface Props {
	inputType: string
	clearable: boolean
}

export function Input({ inputType, clearable }: Props) {
	const [value, setValue] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	const handleClear = () => setValue('')
	const handleToggleVisibility = () => setShowPassword((prev) => !prev)

	let currentInputType = inputType

	if (inputType === 'password') {
		if (showPassword) {
			currentInputType = 'text'
		} else {
			currentInputType = 'password'
		}
	}

	return (
		<div className="relative flex items-center gap-4">
			<input
				className="w-70 h-10 bg-amber-50 text-black p-2"
				type={currentInputType}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div className="flex gap-2 absolute right-1 px-3 bg-amber-50">
				{clearable && value && (
					<button
						className="text-black hover:cursor-pointer"
						type="button"
						onClick={handleClear}
					>
						<X />
					</button>
				)}
				{inputType === 'password' && (
					<button
						className="text-black hover:cursor-pointer h-full "
						type="button"
						onClick={handleToggleVisibility}
					>
						{showPassword ? <EyeIcon /> : <EyeClosedIcon />}
					</button>
				)}
			</div>
		</div>
	)
}
