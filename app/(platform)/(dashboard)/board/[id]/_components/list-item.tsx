'use client'

import { List } from '@prisma/client'

type Props = {
	data: List
	index: number
}

const ListItem = ({ data, index }: Props) => {
	return <div>ListItem</div>
}

export default ListItem
