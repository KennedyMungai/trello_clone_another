'use client'

import { Card } from '@prisma/client'
import { Draggable } from '@hello-pangea/dnd'
import { useCardModal } from '@/hooks/use-card-modal'

type Props = {
	index: number
	data: Card
}

const CardItem = ({ index, data }: Props) => {
	const { isOpen, onClose, onOpen, id } = useCardModal((state) => state)

	return (
		<Draggable draggableId={data.id} index={index}>
			{(provided) => (
				<div
					role={'button'}
					className='truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm'
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					onClick={() => onOpen(data.id)}
				>
					{data.title}
				</div>
			)}
		</Draggable>
	)
}

export default CardItem
