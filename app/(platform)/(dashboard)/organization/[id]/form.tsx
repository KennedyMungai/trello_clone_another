'use client'
import { create } from '@/actions/create-board'
import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const BoardsForm = (props: Props) => {
	return (
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
	)
}

export default BoardsForm
