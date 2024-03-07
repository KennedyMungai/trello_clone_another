'use client'

type Props = {
	isEditing: boolean
	enableEditing: () => void
	disableEditing: () => void
	listId: string
}

const CardForm = ({
	disableEditing,
	enableEditing,
	isEditing,
	listId
}: Props) => {
	return <div>CardForm</div>
}

export default CardForm
