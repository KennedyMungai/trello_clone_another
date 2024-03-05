import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'

type Props = {}

const SingleOrganizationPage = (props: Props) => {
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
