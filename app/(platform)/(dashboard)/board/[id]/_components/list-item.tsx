'use client'

import { cn } from '@/lib/utils'
import { ListWithCards } from '@/types'
import { ElementRef, useRef, useState } from 'react'
import CardForm from './card-form'
import CardItem from './card-item'
import ListHeader from './list-header'
import { Draggable, Droppable } from '@hello-pangea/dnd'

type Props = {
	data: ListWithCards
	index: number
}

const ListItem = ({ data, index }: Props) => {
	const [isEditing, setIsEditing] = useState(false)

	const textAreaRef = useRef<ElementRef<'textarea'>>(null)

	const disableEditing = () => {
		setIsEditing(false)
	}

	const enableEditing = () => {
		setIsEditing(true)
		setTimeout(() => {
			textAreaRef.current?.focus()
		})
	}

	return (
		<Draggable draggableId={data.id} index={index}>
			{(provided) => (
				<li
					className='shrink-0 h-full w-[272px] select-none'
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div
						className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'
						{...provided.dragHandleProps}
					>
						<ListHeader data={data} onAddCard={enableEditing} />
						<Droppable droppableId={data.id} type='card'>
							{(provided) => (
								<ol
									className={cn(
										'mx-1 px-1 py-0.5 flex flex-col gap-y-2',
										data.cards.length > 0 ? 'mt-2' : 'mt-0'
									)}
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{data.cards.map((card, index) => (
										<CardItem
											index={index}
											key={index}
											data={card}
										/>
									))}
									{provided.placeholder}
								</ol>
							)}
						</Droppable>

						<CardForm
							ref={textAreaRef}
							isEditing={isEditing}
							enableEditing={enableEditing}
							disableEditing={disableEditing}
							listId={data.id}
						/>
					</div>
				</li>
			)}
		</Draggable>
	)
}

export default ListItem
