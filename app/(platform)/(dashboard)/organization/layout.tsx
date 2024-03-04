import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const OrganizationsLayout = ({ children }: Props) => {
	return <main className='pt-20'>{children}</main>
}

export default OrganizationsLayout
