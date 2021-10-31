const CardItem = ({ field, val }) => {
	return (
		<div>
			<h1 className='text-center text-[0.6rem] font-bold text-gray-500 uppercase tracking-[0.2em]'>
				{field}
			</h1>
			<p className='text-center mt-1 text-xl font-medium'>{val}</p>
		</div>
	)
}

export default CardItem
