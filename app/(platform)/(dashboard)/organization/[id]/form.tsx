'use client'
import { create } from '@/actions/create-board'
import { useFormState } from 'react-dom'
import FormButtonAnother from './formButtonAnother'
import FormInput from './formInput'

type Props = {}

const BoardsForm = (props: Props) => {
	const initialState = { message: null, errors: {} }
	const [state, dispatch] = useFormState(create, initialState)

	return (
		<form action={dispatch}>
			<div className='flex flex-col space-y-2'>
				<FormInput errors={state?.errors} />
				<FormButtonAnother />
			</div>
		</form>
	)
}

export default BoardsForm
