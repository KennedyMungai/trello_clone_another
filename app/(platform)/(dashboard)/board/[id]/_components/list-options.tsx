import { List } from '@prisma/client'

type Props = {
	data: List
	onAddCard: () => void
}

const ListOptions = ({ data, onAddCard }: Props) => {
	return <div>ListOptions</div>
}

export default ListOptions
