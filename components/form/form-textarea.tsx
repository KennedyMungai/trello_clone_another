'use client'

import { KeyboardEventHandler, forwardRef } from 'react'

type Props = {
	id: string
	label?: string
	placeholder?: string
	required?: boolean
	disabled?: boolean
	errors: Record<string, string[] | undefined>
	className: string
	onBlur?: () => void
	onClick?: () => void
	onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | undefined>
	defaultValue?: string
}

const FormTextarea = forwardRef<HTMLFormElement, Props>(
	(
		{
			className,
			errors,
			id,
			defaultValue,
			disabled,
			label,
			onBlur,
			onClick,
			onKeyDown,
			placeholder,
			required
		},
		ref
	) => {
		return <div>FormTextArea</div>
	}
)

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
