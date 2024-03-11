import ModalProvider from '@/components/providers/modal-provider'
import QueryProvider from '@/components/providers/query-provider'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

type Props = {
	children: ReactNode
}

const PlatformLayout = ({ children }: Props) => {
	return (
		<ClerkProvider>
			<QueryProvider>
				<Toaster />
				<ModalProvider />
				{children}
			</QueryProvider>

		</ClerkProvider>
	)
}

export default PlatformLayout
