import { db } from "@/lib/db"

export const create = async (formData: FormData) => {
    'use server'

    const title = formData.get('title') as string

    await db.board.create({
        data: {
            title
        }
    })
}