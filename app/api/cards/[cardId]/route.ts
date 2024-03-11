import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

const GET = async (
	req: Request,
	{ params: { cardId } }: { params: { cardId: string } }
) => {
	try {
		const { userId, orgId } = auth()

		if (!userId || !orgId) {
			return new NextResponse('Unauthorized', { status: 401 })
		}

		const card = await db.card.findUnique({
			where: {
				id: cardId,
				list: {
					board: {
						orgId
					}
				}
			},
			include: {
				list: {
					select: {
						title: true
					}
				}
			}
		})

		if (!card) {
			return new NextResponse('Not Found', { status: 404 })
		}

		return NextResponse.json(card)
	} catch (error) {
		return new NextResponse('Internal Error', { status: 500 })
	}
}
