import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ClerkLayout = ({ children }: Props) => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-200 to-rose-200'>
			{children}
		</div>
	)
}

export default ClerkLayout
