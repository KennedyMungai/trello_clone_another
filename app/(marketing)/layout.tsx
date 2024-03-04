import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className='h-full bg-slate-100'>
            {/* TODO: Navbar */}
			<main className='pt-40 pb-20 bg-slate-100'>{children}</main>
            {/* TODO: Footer */}
		</div>
	)
}

export default MarketingLayout
