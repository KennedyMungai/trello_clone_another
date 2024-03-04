import { Medal } from 'lucide-react'

export default function Home() {
	return (
		<main className='flex items-center justify-center flex-col'>
			<div className='flex items-center justify-center flex-col'>
				<div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
					<Medal className='h-6 w-6 mr-2' />
					No 1 Task Management
				</div>
				<h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
					Trello Clone Helps Teams Move
				</h1>
				<div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-800 to-pink-600 text-transparent bg-clip-text'>
					Work Forward.
				</div>
			</div>
		</main>
	)
}
