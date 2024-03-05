'use client'

import { XCircleIcon } from 'lucide-react'

type Props = {
	id: string
	errors?: Record<string, string[] | undefined>
}

const FormErrors = ({ errors, id }: Props) => {
	if (!errors) return null

	return (
		<div
			id={`${id}-error`}
			aria-live={'polite'}
			className='mt-2 text-xs text-rose-500'
		>
			{errors?.[id]?.map((error: string, index) => (
				<div
					className='flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm'
					key={index}
				>
					<XCircleIcon className='h-4 w-4 mr-2' />
					{error}
				</div>
			))}
		</div>
	)
}

export default FormErrors
