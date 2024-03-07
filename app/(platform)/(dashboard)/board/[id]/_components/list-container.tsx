'use client'

import { List } from '@prisma/client'

type Props = {
	boardId: string
	data: List[]
}

const ListContainer = ({ boardId, data }: Props) => {
	return <div>ListContainer</div>
}

export default ListContainer
