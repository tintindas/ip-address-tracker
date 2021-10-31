import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Map from '../components/Map'
import Search from '../components/Search'

export default function Home() {
	return (
		<div>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='upperhalf h-64 flex flex-col items-center z-10'>
				<Header />
				<Search />
			</div>

			<Card />

			<Map />
		</div>
	)
}
