'use client'

import { FormInput } from '@/components/form/form-input'
import { Plus } from 'lucide-react'
import { ElementRef, KeyboardEvent, useRef, useState } from 'react'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'
import ListWrapper from './list-wrapper'
import { useParams } from 'next/navigation'
import FormSubmit from '@/components/form/form-submit'

type Props = {}

const ListForm = (props: Props) => {
	const [isEditing, setIsEditing] = useState(false)

	const formRef = useRef<ElementRef<'form'>>(null)
	const inputRef = useRef<ElementRef<'input'>>(null)

	const { id } = useParams()

	const enableEditing = () => {
		setIsEditing(true)

		setTimeout(() => {
			inputRef.current?.focus()
		})
	}

	const disableEditing = () => {
		setIsEditing(false)
	}

	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			disableEditing()
		}
	}

	useEventListener('keydown', onKeyDown)
	useOnClickOutside(formRef, disableEditing)

	if (isEditing) {
		return (
			<ListWrapper>
				<form
					ref={formRef}
					className='w-full p-3 rounded-md bg-white space-y-4 shadow-md'
				>
					<FormInput
						id={'title'}
						errors={undefined}
						ref={inputRef}
						className={
							'text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition'
						}
						placeholder={'Enter List Title...'}
					/>
					<input hidden value={id} name='boardId' />
					<div className='flex items-center gap-x-1'>
						<FormSubmit>Add List</FormSubmit>
					</div>
				</form>
			</ListWrapper>
		)
	}

	return (
		<ListWrapper>
			<button
				className='w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm'
				onClick={enableEditing}
			>
				<Plus className='h-4 w-4 mr-2' />
				Add A List
			</button>
		</ListWrapper>
	)
}

export default ListForm
