import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/Search'

export default function Home() {
	return (
		<div>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='upperhalf h-64 flex flex-col items-center'>
				<Header />
				<Search />
			</div>

			{/* Card */}

			{/* Background Map */}
		</div>
	)
}
