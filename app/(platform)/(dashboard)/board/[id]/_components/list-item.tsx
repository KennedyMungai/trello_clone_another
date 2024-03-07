'use client'

import { ListWithCards } from '@/types'
import ListHeader from './list-header'

type Props = {
	data: ListWithCards
	index: number
}

const ListItem = ({ data, index }: Props) => {
	return (
		<li className='shrink-0 h-full w-[272px] select-none'>
			<div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
				<ListHeader />
			</div>
		</li>
	)
}

export default ListItem
