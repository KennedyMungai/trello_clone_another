'use client'

import { createBoard } from '@/actions/create-board'
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { useAction } from '@/hooks/use-action'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { ElementRef, ReactNode, useRef } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { FormInput } from './form-input'
import FormPicker from './form-picker'
import FormSubmit from './form-submit'

type Props = {
	children: ReactNode
	side?: 'top' | 'bottom' | 'left' | 'right'
	align?: 'start' | 'center' | 'end'
	sideOffset?: number
}

const FormPopOver = ({
	children,
	align,
	side = 'bottom',
	sideOffset = 0
}: Props) => {
	const closeRef = useRef<ElementRef<'button'>>(null)
	const router = useRouter()

	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			toast.success('Board Created')
			closeRef.current?.click()
			router.push(`/board/${data.id}`)
		},
		onError: (error) => {
			toast.error(error)
		}
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string
		const image = formData.get('image') as string

		execute({ title, image })
	}

	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent
				align={align}
				className='w-80 pt-3'
				side={side}
				sideOffset={sideOffset}
			>
				<div className='text-sm font-medium text-center text-neutral-600 pb-'>
					Create Board
				</div>
				<PopoverClose asChild ref={closeRef}>
					<Button
						size='icon'
						variant={'ghost'}
						className='h-auto w-auto absolute top-2 right-2 text-neutral-600'
					>
						<X className='h-4 w-4' />
					</Button>
				</PopoverClose>
				<form className='space-y-4' action={onSubmit}>
					<div className='space-y-4'>
						<FormPicker id='image' errors={fieldErrors} />
						<FormInput
							id={'title'}
							label='Board Title'
							type='text'
							errors={fieldErrors}
						/>
					</div>
					<FormSubmit className='w-full'>Create</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	)
}

export default FormPopOver
