import { OrganizationList } from '@clerk/nextjs'

type Props = {}

const SelectOrganization = (props: Props) => {
	return (
		<OrganizationList
			hidePersonal
			afterSelectOrganizationUrl={'/organization/:id'}
		/>
	)
}

export default SelectOrganization
