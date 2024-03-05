'use client'

import { Input } from '@/components/ui/input'
import { useFormStatus } from 'react-dom'

type Props = {
	errors?: {
		title?: string[]
	}
}

const FormInput = ({ errors }: Props) => {
	const { pending } = useFormStatus()

	return (
		<div className=''>
			<Input
				id='title'
				name='title'
				required
                className="focus:border-0 active:outline-none"
				placeholder='Enter a board title'
			/>
			{errors?.title ? (
				<div>
					{errors?.title.map((error: string, index: number) => (
						<p key={index} className='text-rose-500'>
							{error}
						</p>
					))}
				</div>
			) : null}
		</div>
	)
}

export default FormInput
