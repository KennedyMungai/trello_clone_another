import { auth } from '@clerk/nextjs'
import { startCase } from 'lodash'
import { ReactNode } from 'react'
import OrgControl from './_components/OrgControl'

export const generateMetadata = () => {
	const { orgSlug } = auth()

	return {
		title: startCase(orgSlug || 'organization')
	}
}

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
