'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

type Props = {}

const FormDelete = (props: Props) => {
	const { pending } = useFormStatus()

	return (
		<Button
			type='submit'
			variant='destructive'
			size='sm'
			disabled={pending}
		>
			Delete
		</Button>
	)
}

export default FormDelete
