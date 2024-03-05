'use client'

import { createBoard } from '@/actions/create-board'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverClose
} from '@/components/ui/popover'
import { useAction } from '@/hooks/use-action'
import { FormInput } from './form-input'
import FormSubmit from './form-submit'
import { ReactNode } from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'

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
				<PopoverClose asChild>
					<Button
						size='icon'
						variant={'ghost'}
						className='h-auto w-auto absolute top-2 right-2 text-neutral-600'
					>
						<X className='h-4 w-4' />
					</Button>
				</PopoverClose>
				<form className='space-y-4'>
					<div className='space-y-4'>
						<FormInput
							id={'title'}
							label='Board Title'
							type='text'
						/>
					</div>
					<FormSubmit className='w-full'>Create</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	)
}

export default FormPopOver
