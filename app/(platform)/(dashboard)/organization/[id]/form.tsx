'use client'
import { createBoard } from '@/actions/create-board'
import { useAction } from '@/hooks/use-action'
import FormButtonAnother from './formButtonAnother'
import FormInput from './formInput'

type Props = {}

const BoardsForm = (props: Props) => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			console.log(data, 'SUCCESS')
		},
		onError: (error) => {
			console.error(error)
		}
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string

		execute({ title })
	}

	return (
		<form action={onSubmit}>
			<div className='flex flex-col space-y-2'>
				<FormInput errors={fieldErrors} />
				<FormButtonAnother />
			</div>
		</form>
	)
}

export default BoardsForm
