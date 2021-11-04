import CardItem from './CardItem'

const Card = ({ result }) => {
	const cardData = Object.entries(result)

	return (
		<main className='absolute left-1/2 -translate-x-1/2 w-72 md:w-5/6 bg-white -mt-24 flex flex-col md:flex-row space-y-5 items-center justify-center p-4 pt-5 z-50 rounded-lg shadow-lg md:h-44 md:-mt-20 md:items-start md:pl-4'>
			{cardData.map((details, idx) => (
				<CardItem key={idx} field={details[0]} val={details[1]} />
			))}
		</main>
	)
}

export default Card
