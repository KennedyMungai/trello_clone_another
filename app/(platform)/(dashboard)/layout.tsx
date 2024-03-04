import { ReactNode } from 'react'
import NavBar from './_components/navbar'

type Props = {
	children: ReactNode
}

const OrganizationLayout = ({ children }: Props) => {
	return (
		<div className='h-full'>
			<NavBar />
			{children}
		</div>
	)
}

export default OrganizationLayout
