'use client'

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
	return <div>NavItem</div>
}

export default NavItem
