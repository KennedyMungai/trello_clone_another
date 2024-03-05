import { User2 } from 'lucide-react'

type Props = {}

const BoardList = (props: Props) => {
	return (
		<div className='space-y-4'>
			<div className='flex items-center font-semibold text-lg text-neutral-700'>
				<User2 className='h-6 w-6 mr-2' />
				Your Boards
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-'>
				<div
					role='button'
					className='aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition'
				>
					<p className='text-sm'>Create New Board</p>
					<span className='text-xs text-muted-foreground'>
						5 remaining
					</span>
				</div>
			</div>
		</div>
	)
}

export default BoardList
