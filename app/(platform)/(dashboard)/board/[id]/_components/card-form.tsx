'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { forwardRef } from 'react'

type Props = {
	isEditing: boolean
	enableEditing: () => void
	disableEditing: () => void
	listId: string
}

const CardForm = forwardRef<HTMLTextAreaElement, Props>(
	({ disableEditing, enableEditing, isEditing, listId }, ref) => {
		return (
			<div className='pt-2 px-2'>
				<Button
					onClick={enableEditing}
					className={
						'h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm'
					}
					size='sm'
					variant='ghost'
				>
					<Plus className='w-4 h-4 mr-4' />
					Add a card
				</Button>
			</div>
		)
	}
)

CardForm.displayName = 'CardForm'

export default CardForm
