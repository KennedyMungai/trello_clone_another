'use client'

import { Card } from '@prisma/client'

type Props = {
	index: number
	data: Card
}

const CardItem = ({ index, data }: Props) => {
	return <div>CardItem</div>
}

export default CardItem
