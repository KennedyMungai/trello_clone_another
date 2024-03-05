'use client'

import { createBoard } from '@/actions/create-board'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { useAction } from '@/hooks/use-action'
import { FormInput } from './form-input'
import FormSubmit from './form-submit'
import { ReactNode } from 'react'

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
			</PopoverContent>
		</Popover>
	)
}

export default FormPopOver
