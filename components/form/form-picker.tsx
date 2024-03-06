'use client'

import { defaultImages } from '@/constants/images'
import { unsplash } from '@/lib/unsplash'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

type Props = {
	id: string
	errors?: Record<string, string[] | undefined>
}

const FormPicker = ({ id, errors }: Props) => {
	const [images, setImages] =
		useState<Array<Record<string, any>>>(defaultImages)
	const [loading, setLoading] = useState(true)
	const [selectedImageId, setSelectedImageId] = useState(null)

	const { pending } = useFormStatus()

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const result = await unsplash.photos.getRandom({
					collectionIds: ['317099'],
					count: 9
				})

				if (result && result.response) {
					const newImages = result.response as Array<
						Record<string, any>
					>
					setImages(newImages)
				} else {
					console.log('Failed to get images from unsplash')
				}
			} catch (error) {
				console.log(error)
				setImages(defaultImages)
			} finally {
				setLoading(false)
			}
		}

		fetchImages()
	}, [])

	if (loading) {
		return (
			<div className='p-6 flex items-center justify-center'>
				<Loader2 className='h-6 w-6 text-sky-700 animate-spin' />
			</div>
		)
	}

	return (
		<div className='relative'>
			<div className='grid grid-cols-3 gap-2 mb'>
				{images.map((image, index) => (
					<div
						key={index}
						className={cn(
							'cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted',
							pending && 'opacity-50 hover:opacity:50 cursor-auto'
						)}
						onClick={() => {
							if (pending) return

							setSelectedImageId(image.id)
						}}
					>
						<Image
							fill
							src={image.urls.thumb}
							alt='Unsplash Image'
							className='object-cover rounded-sm'
						/>
						<Link
							href={image.links.html}
							target='_blank'
							className='opacity-0 group-hover:opacity-100 absolute bottom-0 w-full text-[10px] truncate text-white hover:underline p-1 bg-black/50'
						>
							{image.user.name}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default FormPicker
