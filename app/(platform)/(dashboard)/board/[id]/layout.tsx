import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const SingleBoardLayoutPage = ({ children }: Props) => {
	return <div>{children}</div>
}

export default SingleBoardLayoutPage
