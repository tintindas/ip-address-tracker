import CardItem from './CardItem'

const Card = ({ result }) => {
	const cardData = Object.entries(result)

	return (
		<main className='absolute left-1/2 -translate-x-1/2 w-72 bg-white -mt-24 flex flex-col space-y-5 items-center justify-center p-4 pt-5 z-50 rounded-lg shadow-lg'>
			{cardData.map((details, idx) => (
				<CardItem key={idx} field={details[0]} val={details[1]} />
			))}
		</main>
	)
}

export default Card
