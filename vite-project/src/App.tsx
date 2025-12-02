import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { SidebarMenu } from './components/SidebarMenu'
import { Toast } from './components/Toast'
import { MENU_ITEMS } from './data/menu.data'

function App() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<Input inputType="password" clearable={true}></Input>
			<Toast message="hello" type="error"></Toast>
			<button
				onClick={() => setOpen(true)}
				className="p-2 bg-blue-500 text-white rounded"
			>
				Open navigation
			</button>
			<SidebarMenu
				items={MENU_ITEMS}
				isOpen={open}
				onClose={() => setOpen(false)}
			/>
		</>
	)
}

export default App
