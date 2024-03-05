import { db } from '@/lib/db'
import BoardsForm from './form'

type Props = {}

const SingleOrganizationPage = async (props: Props) => {
	const boards = await db.board.findMany({})

	return (
		<div className='flex flex-col space-y-4'>
			<BoardsForm />
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
