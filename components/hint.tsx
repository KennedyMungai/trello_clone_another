'use client'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger
} from '@/components/ui/tooltip'
import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	description: string
	side?: 'top' | 'bottom' | 'left' | 'right'
	sideOffset?: number
}

const Hint = ({
	children,
	description,
	side = 'bottom',
	sideOffset = 0
}: Props) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent
					side={side}
					sideOffset={sideOffset}
					className='text-xs max-w-[220px] break-words'
				>
					{description}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default Hint
