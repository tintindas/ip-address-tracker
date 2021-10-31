import Image from 'next/image'

const Search = ({ setInput, handleSubmit }) => {
	return (
		<form className='mt-8 w-72 rounded-lg flex' onSubmit={handleSubmit}>
			<input
				type='text'
				className='rounded-l-lg h-12 flex-grow pl-5 text-[18px] focus:outline-none'
				onChange={(e) => console.log(e.target.value)}
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
