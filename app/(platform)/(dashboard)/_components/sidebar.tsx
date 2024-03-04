'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
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

	return (
		<>
			<div className='font-medium text-sx flex items-center mb-1'>
				<span className='pl-4'>Workspaces</span>
				<Button
					asChild
					type='button'
					size='icon'
					variant='ghost'
					className='ml-auto'
				>
					<Link href={'/select-org'}>
						<Plus className='h-4 w-4' />
					</Link>
				</Button>
			</div>
		</>
	)
}

export default Sidebar