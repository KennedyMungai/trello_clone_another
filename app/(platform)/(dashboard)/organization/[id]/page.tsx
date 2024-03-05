type Props = {}

const SingleOrganizationPage = (props: Props) => {
	return (
		<div className=''>
			<form>
				<input
					id='title'
					name='title'
					required
					placeholder='Enter a board title'
					className='border-black border p-1'
				/>
			</form>
		</div>
	)
}

export default SingleOrganizationPage
