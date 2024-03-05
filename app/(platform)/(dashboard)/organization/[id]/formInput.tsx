type Props = {
	errors?: {
		title?: string[]
	}
}

const FormInput = ({ errors }: Props) => {
	return (
		<div className=''>
			<input
				id='title'
				name='title'
				required
				placeholder='Enter a board title'
				className='border-black border p-1'
			/>
			{errors?.title ? (
				<div>
					{errors?.title.map((error: string, index: number) => (
						<p key={index} className='text-rose-500'>
							{error}
						</p>
					))}
				</div>
			) : null}
		</div>
	)
}

export default FormInput
