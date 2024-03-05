'use server'

import { db } from '@/lib/db'
import { z } from 'zod'

const CreateBoard = z.object({
	title: z.string()
})

export const create = async (formData: FormData) => {
	const { title } = CreateBoard.parse({ title: formData.get('title') })

	await db.board.create({
		data: {
			title
		}
	})
}
