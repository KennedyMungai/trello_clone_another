type Props = {}

const FormInput = (props: Props) => {
	return (
		<input
			id='title'
			name='title'
			required
			placeholder='Enter a board title'
			className='border-black border p-1'
		/>
	)
}

export default FormInput
