import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'

type Props = { id: string }

const BoardNavbar = async ({ id }: Props) => {
	const { orgId } = auth()

	const board = await db.board.findUnique({
		where: {
			id,
			orgId: orgId!
		}
	})

	return (
		<div className='w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white'>
			BoardNavbar
		</div>
	)
}

export default BoardNavbar
