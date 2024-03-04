import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
	return <div>{children}</div>
}

export default OrganizationLayout
