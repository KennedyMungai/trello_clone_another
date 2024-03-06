'use client'

import { FormInput } from '@/components/form/form-input'
import { Button } from '@/components/ui/button'
import { Board } from '@prisma/client'
import { ElementRef, useRef, useState } from 'react'

type Props = { data: Board }

const BoardTitleForm = ({ data }: Props) => {
	const [isEditing, setIsEditing] = useState(false)

	const formRef = useRef<ElementRef<'form'>>(null)
	const inputRef = useRef<ElementRef<'input'>>(null)

	const disableEditing = () => {
		setIsEditing(false)
	}

	const enableEditing = () => {
		setIsEditing(true)

		setTimeout(() => {
			inputRef.current?.focus(), inputRef.current?.select()
		})
	}

	if (isEditing) {
		return (
			<form className='flex items-center gap-x-2' ref={formRef}>
				<FormInput
					id='title'
					onBlur={() => {}}
					defaultValue={data.title}
					ref={inputRef}
					className='text-lg font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none'
				/>
			</form>
		)
	}

	return (
		<Button
			className='font-bold text-lg h-auto w-auto p-1 px-2'
			variant='transparent'
			onClick={enableEditing}
		>
			{data.title}
		</Button>
	)
}

export default BoardTitleForm
