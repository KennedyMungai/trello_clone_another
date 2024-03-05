import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'

type Props = {}

const SingleOrganizationPage = (props: Props) => {
	const create = async (formData: FormData) => {
		'use server'

		const title = formData.get('title') as string

		await db.board.create({
			data: {
				title
			}
		})
	}

	return (
		<div className=''>
			<form action={create}>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border-black border p-1'
				/>
				<Button type='submit' className='ml-2' size={'sm'}>
					Submit
				</Button>
			</form>
		</div>
	)
}

export default SingleOrganizationPage
