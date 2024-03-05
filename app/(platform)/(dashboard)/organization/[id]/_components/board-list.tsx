import { User2 } from 'lucide-react'

type Props = {}

const BoardList = (props: Props) => {
	return (
		<div className='space-y-4'>
			<div className='flex items-center font-semibold text-lg text-neutral-700'>
				<User2 className='h-6 w-6 mr-2' />
				Your Boards
			</div>
		</div>
	)
}

export default BoardList
