import { Button } from '@/components/ui/button'

type Props = {}

const FormButton = (props: Props) => {
	return (
		<Button type='submit' className='ml-2' size={'sm'}>
			Submit
		</Button>
	)
}

export default FormButton
