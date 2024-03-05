'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
	children: ReactNode
	disabled?: boolean
	className?: string
	variant?:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link'
		| 'primary'
}

const FormSubmit = ({ children, className, disabled, variant }: Props) => {
	const { pending } = useFormStatus()

	return (
		<Button
			disabled={pending || disabled}
			type='submit'
			variant={variant}
			size='sm'
			className={cn(className)}
		>
			{children}
		</Button>
	)
}

export default FormSubmit
