import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const OrganizationsLayout = ({ children }: Props) => {
	return <main className='pt-20 md:pt-24 px-4 max-w-6xl'>{children}</main>
}

export default OrganizationsLayout
