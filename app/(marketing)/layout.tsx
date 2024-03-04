import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import NavBar from './_components/navbar'
import Footer from './_components/footer'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

type Props = {
	children: ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className='h-full bg-slate-100'>
			<NavBar />
			<main className={cn('pt-40 pb-20 bg-slate-100', poppins.className)}>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default MarketingLayout
