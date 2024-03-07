import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Logo = (props: Props) => {
	return (
		<Link href={'/'}>
			<div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
				<Image src={'/trello.svg'} alt='Logo' width={30} height={30} />
				<p className='text-lg text-neutral-700 pb-1 font-bold'>
					Trello Clone
				</p>
			</div>
		</Link>
	)
}

export default Logo
