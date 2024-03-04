import { auth } from '@clerk/nextjs'

type Props = {}

const SingleOrganizationPage = (props: Props) => {
	const { userId, orgId } = auth()

	return (
		<div>
			User Id: {userId}
			Organization: {orgId}
		</div>
	)
}

export default SingleOrganizationPage
