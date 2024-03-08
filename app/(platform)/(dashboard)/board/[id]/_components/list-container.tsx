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

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
	const result = Array.from(list)
	const [removed] = result.splice(startIndex, 1)

	result.splice(endIndex, 0, removed)

	return result
}

const ListContainer = ({ boardId, data }: Props) => {
	const [orderedData, setOrderedData] = useState(data)

	useEffect(() => {
		setOrderedData(data)
	}, [data])

	const onDragEnd = (result: any) => {
		const { destination, source, type } = result

		if (!destination) return

		// If dropped in the same position
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return

		// User moved a list
		if (type === 'list') {
			const items = reorder(
				orderedData,
				source.index,
				destination.index
			).map((item, index) => ({ ...item, order: index }))

			setOrderedData(items)

			// TODO: Trigger server action
		}

		// User moved a card
		if (type === 'card') {
			let newOrderedData = [...orderedData]

			// Source and destination list
			const sourceList = newOrderedData.find(
				(list) => list.id === source.droppableId
			)

			const destList = newOrderedData.find(
				(list) => list.id === destination.droppableId
			)

			if (!sourceList || !destList) return

			// Check if the card exists on the source list
			if (!sourceList.cards) {
				sourceList.cards = []
			}

			// Check if the card exists on the destination list
			if (!destList.cards) {
				destList.cards = []
			}

			// Moving the card in the same list
			if (source.droppableId === destination.droppableId) {
				const reorderedCards = reorder(
					sourceList.cards,
					source.index,
					destination.index
				)

				reorderedCards.forEach((card, index) => {
					card.order = index
				})

				sourceList.cards = reorderedCards

				setOrderedData(newOrderedData)

				// TODO:// Trigger Server Action
			}
		}
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='lists' type='list' direction='horizontal'>
				{(provided) => (
					<ol
						className='flex gap-x-3 h-full'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{orderedData.map((list, index) => (
							<ListItem key={list.id} data={list} index={index} />
						))}
						{provided.placeholder}
						<ListForm />
						<div className='flex-shrink-0 w-1' />
					</ol>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default ListContainer
