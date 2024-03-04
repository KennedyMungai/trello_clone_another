import { ReactNode } from 'react'
import OrgControl from './_components/OrgControl'

type Props = {
	children: ReactNode
}

const SingleOrganizationLayout = ({ children }: Props) => {
	return (
		<>
			<OrgControl />
			{children}
		</>
	)
}

export default SingleOrganizationLayout
