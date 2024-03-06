'use client'

import { Button } from '@/components/ui/button'
import { Board } from '@prisma/client'

type Props = { data: Board }

const BoardTitleForm = ({ data }: Props) => {
	return (
		<Button className='font-bold text-lg h-auto w-auto p-1 px-2'>
			{data.title}
		</Button>
	)
}

export default BoardTitleForm
