"use client"
import { Organization } from '@clerk/nextjs/server'

type Props = {
	isActive: boolean
	isExpanded: boolean
	organization: any
	onExpand: (id: string) => void
}

const NavItem = ({ isActive, isExpanded, onExpand, organization }: Props) => {
	return <div>NavItem</div>
}

export default NavItem
