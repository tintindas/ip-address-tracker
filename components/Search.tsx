import Image from 'next/image'

const Search = ({ handleSubmit }) => {
	return (
		<form
			className='mt-8 w-72 md:w-1/3 rounded-lg flex'
			onSubmit={handleSubmit}
		>
			<input
				name='query'
				type='text'
				className='rounded-l-lg h-12 flex-grow pl-5 text-[18px] focus:outline-none'
				placeholder='8.8.8.8'
			/>
			<button
				type='submit'
				className='flex items-center justify-center relative bg-black w-12 h-12 p-2 rounded-r-lg cursor-pointer'
			>
				<Image src='/images/icon-arrow.svg' height={12} width={10} />
			</button>
		</form>
	)
}

export default Search
