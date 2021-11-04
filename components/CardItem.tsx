const CardItem = ({ field, val }) => {
	return (
		<div
			className={`${
				field !== 'ip address' ? 'md:border-l-2' : ''
			} md:w-1/4 md:mt-5  md:pl-8 md:pt-2 md:h-3/4`}
		>
			<h1 className='text-center text-[0.6rem] font-bold text-gray-500 uppercase tracking-[0.2em] md:text-left md:text-xs'>
				{field}
			</h1>
			<p className='text-center mt-1 text-xl font-medium md:text-left md:w-56 md:text-2xl'>
				{val}
			</p>
		</div>
	)
}

export default CardItem
