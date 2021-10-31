import CardItem from './CardItem'

const DUMMY_DATA = [
	{
		field: 'IP Address',
		value: '192.212.174.101'
	},
	{
		field: 'Location',
		value: 'Brooklyn, NY 10001'
	},
	{
		field: 'Timezone',
		value: 'UTC -05:00'
	},
	{
		field: 'ISP',
		value: 'SpaceX Starlink'
	}
]

const Card = () => {
	return (
		<main className='absolute left-1/2 -translate-x-1/2 w-72 bg-white -mt-24 flex flex-col space-y-5 items-center justify-center p-4 pt-5 z-50 rounded-lg shadow-lg'>
			{DUMMY_DATA.map((details, idx) => (
				<CardItem key={idx} field={details.field} val={details.value} />
			))}
		</main>
	)
}

export default Card
