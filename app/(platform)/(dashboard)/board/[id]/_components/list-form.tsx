'use client'

import { Plus } from 'lucide-react'
import ListWrapper from './list-wrapper'

type Props = {}

const ListForm = (props: Props) => {
	return (
		<ListWrapper>
			<button className='w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm'>
				<Plus className='h-4 w-4 mr-2' />
				Add A List
			</button>
		</ListWrapper>
	)
}

export default ListForm
