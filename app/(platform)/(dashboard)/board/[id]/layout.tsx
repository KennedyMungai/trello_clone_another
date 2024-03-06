import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { notFound, redirect } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	params: {
		id: string
	}
}

export const generateMetadata = async ({ params: { id } }: Props) => {
	const { orgId } = auth()

	if (!orgId) {
		return {
			title: 'Board'
		}
	}

	const board = await db.board.findUnique({
		where: {
			id,
			orgId
		}
	})

	return {
		title: board?.title || 'Board'
	}
}

const SingleBoardLayoutPage = async ({ children, params: { id } }: Props) => {
	const { orgId } = auth()

	if (!orgId) redirect('/select-org')

	const board = await db.board.findUnique({
		where: {
			id,
			orgId
		}
	})

	if (!board) notFound()

	return (
		<div
			style={{ backgroundImage: `url(${board.imageFullUrl})` }}
			className='relative h-full bg-no-repeat bg-cover bg-center'
		>
			<main className='relative pt-28 h-full'>{children}</main>
		</div>
	)
}

export default SingleBoardLayoutPage
