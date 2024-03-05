'use client'
import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import { useFormState } from 'react-dom'

type Props = {}

const BoardsForm = (props: Props) => {
	const initialState = { message: null, errors: {} }
	const [state, dispatch] = useFormState(create, initialState)

	return (
		<form action={dispatch}>
			<div className='flex flex-col space-y-2'>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border-black border p-1'
				/>
				{state?.errors?.title ? (
					<div>
						{state.errors.title.map((error: string, index) => (
							<p key={index} className='text-rose-500'>
								{error}
							</p>
						))}
					</div>
				) : null}
			</div>
			<Button type='submit' className='ml-2' size={'sm'}>
				Submit
			</Button>
		</form>
	)
}

export default BoardsForm
