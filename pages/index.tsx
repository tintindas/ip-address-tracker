import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Search from '../components/Search'
import dynamic from 'next/dynamic'

export default function Home() {
	const MapWithNoSSR = dynamic(() => import('../components/Map'), {
		ssr: false
	})

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

			<div id='map' className='h-[620px] relative'>
				<MapWithNoSSR />
			</div>
		</div>
	)
}
