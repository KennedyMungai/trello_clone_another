'use client'

import { ListWithCards } from '@/types'
import { ElementRef, useRef, useState } from 'react'
import ListHeader from './list-header'
import CardForm from './card-form'

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
		<li className='shrink-0 h-full w-[272px] select-none'>
			<div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
				<ListHeader data={data} onAddCard={enableEditing} />
				<CardForm
					ref={textAreaRef}
					isEditing={isEditing}
					enableEditing={enableEditing}
					disableEditing={disableEditing}
					listId={data.id}
				/>
			</div>
		</li>
	)
}

export default ListItem
