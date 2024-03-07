'use client'

type Props = {
	isEditing: boolean
	enableEditing: () => {}
	disableEditing: () => {}
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
