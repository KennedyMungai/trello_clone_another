import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import Link from 'next/link'

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
			<div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>
				Collaborate, Manage Projects and reach new productivity peaks.
				From high rises to the home office, the way your team works is
				unique - accomplish it all with Trello Clone
			</div>
			<Button className='mt-6' size={'lg'} asChild>
				<Link href={'/sign-up'}>Get Trello Clone for free</Link>
			</Button>
		</main>
	)
}
