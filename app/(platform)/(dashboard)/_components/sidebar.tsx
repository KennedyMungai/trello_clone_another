'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { useLocalStorage } from 'usehooks-ts'

type Props = {
	storageKey?: string
}

const Sidebar = ({ storageKey = 't-sidebar-state' }: Props) => {
	const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
		storageKey,
		{}
	)

	const { organization: activeOrganization, isLoaded: isLoadedOrg } =
		useOrganization()

	const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
		userMemberships: {
			infinite: true
		}
	})

	const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
		(acc: string[], key: string) => {
			if (expanded[key]) {
				acc.push()
			}

			return acc
		},
		[]
	)

	const onExpand = (id: string) => {
		setExpanded((curr) => ({ ...curr, [id]: !expanded[id] }))
	}

	if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
		return (
			<>
				<Skeleton />
			</>
		)
	}

	return <div>Sidebar</div>
}

export default Sidebar
