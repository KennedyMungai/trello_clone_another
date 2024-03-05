import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

type Props = {}

const FormButtonAnother = (props: Props) => {
	const { pending } = useFormStatus()

	return (
		<Button type='submit' className='ml-2' size={'sm'} disabled={pending}>
			Submit
		</Button>
	)
}

export default FormButtonAnother
