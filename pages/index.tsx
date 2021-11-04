import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Search from '../components/Search'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

export default function Home() {
	const GOOGLE_COORDINATES = [37.386051, -122.083855]

	const MapWithNoSSR = dynamic(() => import('../components/Map'), {
		ssr: false
	})

	const [result, setResult] = useState({
		'ip address': '8.8.8.8',
		location: 'Mountain View, US',
		timezone: 'UTC -07:00',
		isp: 'Google LLC'
	})
	const [coordinates, setCoordinates] = useState(GOOGLE_COORDINATES)

	useEffect(() => {
		const loadInitialData = async () => {
			const res = await fetch('https://api.ipify.org/')
			const ip = await res.text()
			await search(ip)
		}
		loadInitialData()
	}, [])

	const search = async (query: FormDataEntryValue) => {
		const res = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPIFY_APIKEY}&ipAddress=${query}`
		)
		const data = await res.json()
		const { location, isp, ip } = data
		const result = {
			'ip address': ip,
			location: `${location.city}, ${location.country}`,
			timezone: `UTC ${location.timezone}`,
			isp
		}
		setCoordinates([location.lat, location.lng])
		setResult(result)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const { query } = Object.fromEntries(data.entries())
		await search(query)
	}
	return (
		<div>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest'></link>
			</Head>

			<div className='upperhalf h-64 flex flex-col items-center z-10'>
				<Header />
				<Search handleSubmit={handleSubmit} />
			</div>

			<Card result={result} />

			<div id='map' className='h-[620px] relative'>
				<MapWithNoSSR coordinates={coordinates} />
			</div>
		</div>
	)
}
