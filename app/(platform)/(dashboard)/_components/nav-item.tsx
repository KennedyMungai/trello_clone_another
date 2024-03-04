'use client'

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import { Activity, Layout, Settings } from 'lucide-react'
import Image from 'next/image'

export type Organization = {
	id: string
	slug: string
	imageUrl: string
	name: string
}

type Props = {
	isActive: boolean
	isExpanded: boolean
	organization: Organization
	onExpand: (id: string) => void
}

const NavItem = ({ isActive, isExpanded, onExpand, organization }: Props) => {
	const routes = [
		{
			label: 'Boards',
			icon: <Layout className='h-4 w-4 mr-2' />,
			href: `/organization/${organization.id}`
		},
        {
            label: 'Activity',
            icon: <Activity className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: 'Settings',
            icon: <Settings className="h-4 w-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        }
	]

	return (
		<AccordionItem value={organization.id} className='border-none'>
			<AccordionTrigger
				onClick={() => onExpand(organization.id)}
				className={cn(
					'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
					isActive && !isExpanded && 'bg-sky-500/10 text-sky-700'
				)}
			>
				<div className='flex items-center gap-x-2'>
					<div className='w-7 h-7 relative'>
						<Image
							fill
							src={organization.imageUrl}
							alt='Organization'
							className='rounded-sm object-cover'
						/>
					</div>
					<span className='font-medium text-sm'>
						{organization.name}
					</span>
				</div>
			</AccordionTrigger>
		</AccordionItem>
	)
}

export default NavItem