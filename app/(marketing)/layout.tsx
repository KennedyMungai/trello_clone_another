import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return <div className='h-full bg-slate-100'>{children}</div>
}

export default MarketingLayout
