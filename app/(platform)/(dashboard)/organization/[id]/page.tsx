import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'

type Props = {}

const SingleOrganizationPage = async (props: Props) => {
	const boards = await db.board.findMany({})

	return (
		<div className='flex flex-col space-y-4'>
			<form action={create}>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border-black border p-1'
				/>
				<Button type='submit' className='ml-2' size={'sm'}>
					Submit
				</Button>
			</form>
			<div className='space-y-2'>
				{boards.map((board, index) => (
					<div className='' key={index}>
						Board Title: {board.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default SingleOrganizationPage
