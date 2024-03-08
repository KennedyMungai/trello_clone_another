'use client'

import { ListWithCards } from '@/types'
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { useEffect, useState } from 'react'
import ListForm from './list-form'
import ListItem from './list-item'

type Props = {
	boardId: string
	data: ListWithCards[]
}

const ListContainer = ({ boardId, data }: Props) => {
	const [orderedData, setOrderedData] = useState(data)

	useEffect(() => {
		setOrderedData(data)
	}, [data])

	return (
		<DragDropContext onDragEnd={() => {}}>
			<Droppable droppableId='lists' type='list' direction='horizontal'>
				{(provided) => (
					<ol className='flex gap-x-3 h-full'>
						{orderedData.map((list, index) => (
							<ListItem key={list.id} data={list} index={index} />
						))}
						<ListForm />
						<div className='flex-shrink-0 w-1' />
					</ol>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default ListContainer
