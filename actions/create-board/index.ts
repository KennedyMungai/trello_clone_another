'use server'

import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { InputType, ReturnType } from './types'

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId } = auth()

	if (!userId) {
		return {
			error: 'Unauthorized'
		}
	}

	const { title } = data

	let board

	try {
		board = await db.board.create({
			data: {
				title
			}
		})
	} catch (error) {
		return {
			error: 'Failed to create'
		}
	}

	revalidatePath(`/board/${board.id}`)

	return { data: board }
}
