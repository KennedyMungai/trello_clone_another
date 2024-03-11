import ModalProvider from '@/components/providers/modal-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

type Props = {
	children: ReactNode
}

const PlatformLayout = ({ children }: Props) => {
	return (
		<ClerkProvider>
			<Toaster />
			<ModalProvider />
			{children}
		</ClerkProvider>
	)
}

export default PlatformLayout
