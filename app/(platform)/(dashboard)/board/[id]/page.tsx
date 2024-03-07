import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

type Props = {
	params: { id: string }
}

const SingleBoardPage = async ({ params: { id } }: Props) => {
	const { orgId } = auth()

	if (!orgId) redirect('/select-org')

	const lists = await db.list.findMany({
		where: {
			boardId: id,
			board: {
				orgId
			}
		},
		include: {
			cards: {
				orderBy: {
					order: 'asc'
				}
			}
		}
	})

	return <div>SingleBoardPage</div>
}

export default SingleBoardPage
