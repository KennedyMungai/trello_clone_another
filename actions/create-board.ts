'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const CreateBoard = z.object({
	title: z
		.string()
		.min(3, { message: 'Minimum length of 3 letters is required' })
})

export const create = async (formData: FormData) => {
	const { title } = CreateBoard.parse({ title: formData.get('title') })

	await db.board.create({
		data: {
			title
		}
	})

	revalidatePath('/organization/org_2dDnc6sRJSLCLIvJ5eQ9d92aeKk')
}
