'use client'

import { createCard } from '@/actions/card/create-card'
import FormSubmit from '@/components/form/form-submit'
import FormTextarea from '@/components/form/form-textarea'
import { Button } from '@/components/ui/button'
import { useAction } from '@/hooks/use-action'
import { Plus, X } from 'lucide-react'
import { useParams } from 'next/navigation'
import { ElementRef, KeyboardEventHandler, forwardRef, useRef } from 'react'
import { toast } from 'sonner'
import { useEventListener, useOnClickOutside } from 'usehooks-ts'

type Props = {
	isEditing: boolean
	enableEditing: () => void
	disableEditing: () => void
	listId: string
}

const CardForm = forwardRef<HTMLTextAreaElement, Props>(
	({ disableEditing, enableEditing, isEditing, listId }, ref) => {
		const { id } = useParams()
		const formRef = useRef<ElementRef<'form'>>(null)

		const { execute, fieldErrors } = useAction(createCard, {
			onSuccess: (data) => {
				toast.success(`Card "${data.title}" created`)
				formRef.current?.reset()
			},
			onError: (error) => {
				toast.error(error)
			}
		})

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				disableEditing()
			}
		}

		useOnClickOutside(formRef, disableEditing)

		useEventListener('keydown', onKeyDown)

		const onTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
			e
		) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault()
				formRef.current?.requestSubmit()
			}
		}

		const onSubmit = (formData: FormData) => {
			const title = formData.get('title') as string
			const boardId = formData.get('boardId') as string
			const listId = formData.get('listId') as string

			execute({ title, listId, boardId })
		}

		if (isEditing) {
			return (
				<form
					className='m-1 py-0.5 px-1 space-y-4'
					action={onSubmit}
					ref={formRef}
				>
					<FormTextarea
						id={'title'}
						onKeyDown={onTextAreaKeyDown}
						ref={ref}
						placeholder='Enter a title for this card...'
						errors={fieldErrors}
					/>
					<input hidden id='listId' name='listId' value={listId} />
					<input hidden id='boardId' name='boardId' value={id} />
					<div className='flex items-center gap-x-1'>
						<FormSubmit>Add Card</FormSubmit>
						<Button
							onClick={disableEditing}
							size='sm'
							variant='ghost'
						>
							<X className='h-5 w-5' />
						</Button>
					</div>
				</form>
			)
		}

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
