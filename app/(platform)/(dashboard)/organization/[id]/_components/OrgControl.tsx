'use client'

import { useOrganizationList } from '@clerk/nextjs'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

type Props = {}

const OrgControl = (props: Props) => {
	const { id } = useParams()
	const { setActive } = useOrganizationList()

	useEffect(() => {
		if (!setActive) return

		setActive({
			organization: id as string
		})
	}, [setActive, id])

	return null
}

export default OrgControl
