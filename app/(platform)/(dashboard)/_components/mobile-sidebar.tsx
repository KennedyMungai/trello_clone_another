'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useMobileSidebar } from '@/hooks/use-mobile-sidebar'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Sidebar from './sidebar'

type Props = {}

const MobileSidebar = (props: Props) => {
	const { isOpen, onClose, onOpen } = useMobileSidebar((state) => state)
	const pathname = usePathname()
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		onClose()
	}, [pathname, onClose])

	if (!isMounted) return

	return (
		<>
			<Button
				size='sm'
				variant='outline'
				onClick={onOpen}
				className={'block md:hidden'}
			>
				<Menu className='h-4 w-4' />
			</Button>
			<Sheet open={isOpen} onOpenChange={onClose}>
				<SheetContent className='p-2 pt-10' side={'left'}>
					<Sidebar storageKey='t-sidebar-mobile-state' />
				</SheetContent>
			</Sheet>
		</>
	)
}

export default MobileSidebar
