import { deleteList } from '@/actions/list/delete-board'
import FormSubmit from '@/components/form/form-submit'
import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { useAction } from '@/hooks/use-action'
import { List } from '@prisma/client'
import { Copy, MoreHorizontal, Plus, Trash2, X } from 'lucide-react'
import { ElementRef, useRef } from 'react'
import { toast } from 'sonner'

type Props = {
	data: List
	onAddCard: () => void
}

const ListOptions = ({ data, onAddCard }: Props) => {
	const closePopoverRef = useRef<ElementRef<'button'>>(null)

	const { execute: executeDelete, fieldErrors } = useAction(deleteList, {
		onSuccess: (data) => {
			toast.success(`List ${data.title} successfully deleted`)

			closePopoverRef.current?.click()
		},
		onError: (error) => {
			toast.error(error)
		}
	})

	const onDelete = (formData: FormData) => {
		const id = formData.get('id') as string
		const boardId = formData.get('boardId') as string

		executeDelete({ id, boardId })
	}

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button className='h-auto w-auto p-2' variant={'ghost'}>
					<MoreHorizontal className='h-4 w-4' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='px-0 py-3' side='bottom' align='start'>
				<div className='text-sm font-medium text-center text-neutral-600 pb-4'>
					List Actions
				</div>
				<PopoverClose asChild ref={closePopoverRef}>
					<Button
						className='w-auto h-auto p-2 absolute top-2 right-2'
						variant='ghost'
						size='icon'
					>
						<X className='h-4 w-4' />
					</Button>
				</PopoverClose>
				<Button
					className='w-full rounded-none h-auto py-2 px-5 justify-start font-normal text-sm'
					onClick={onAddCard}
					variant={'ghost'}
				>
					<Plus className='h-4 w-4 mr-4' />
					Add Card...
				</Button>
				<form>
					<input hidden name='id' id='id' value={data.id} />
					<input
						hidden
						name='boardId'
						id='boardId'
						value={data.boardId}
					/>
					<FormSubmit
						variant='ghost'
						className='w-full rounded-none h-auto py-2 px-5 justify-start font-normal text-sm'
					>
						<Copy className='h-4 w-4 mr-4' />
						Copy This List ...
					</FormSubmit>
				</form>
				<Separator />
				<form action={onDelete}>
					<input hidden name='id' id='id' value={data.id} />
					<input
						hidden
						name='boardId'
						id='boardId'
						value={data.boardId}
					/>
					<FormSubmit
						variant='ghost'
						className='w-full rounded-none h-auto py-2 px-5 justify-start font-normal text-sm'
					>
						<Trash2 className='h-4 w-4 mr-4 text-red-600' />
						Delete This List...
					</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	)
}

export default ListOptions
