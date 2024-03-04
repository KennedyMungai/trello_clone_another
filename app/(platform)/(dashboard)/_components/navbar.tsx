import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<nav className='fixed z-50 top-0 w-full h-14 border-b shadow-sm bg-white flex items-center px-4'>
			{/* TODO: Mobile Sidebar */}
			<div className='flex items-center gap-x-4'>
				<div className='hidden md:flex'>
					<Logo />
				</div>
				<Button
					size='sm'
					className='rounded-sm hidden md:block h-auto py-1.5 px-2'
				>
					Create
				</Button>
                <Button size='sm' className='rounded-sm block md:hidden'>
                    <Plus className='h-4 w-4' />
                </Button>
			</div>
		</nav>
	)
}

export default NavBar
