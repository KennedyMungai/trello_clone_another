import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const PlatformLayout = ({ children }: Props) => {
	return <div>{children}</div>
}

export default PlatformLayout
