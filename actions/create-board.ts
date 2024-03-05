'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export type State = {
	errors?: {
		title?: string
	}
	message: string | null
}

const CreateBoard = z.object({
	title: z
		.string()
		.min(3, { message: 'Minimum length of 3 letters is required' })
})

export const create = async (prevState: State, formData: FormData) => {
	const { title } = CreateBoard.safeParse({ title: formData.get('title') })

	await db.board.create({
		data: {
			title
		}
	})

	revalidatePath('/organization/org_2dDnc6sRJSLCLIvJ5eQ9d92aeKk')
}
