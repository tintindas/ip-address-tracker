import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import Search from '../components/Search'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

export default function Home() {
	const MapWithNoSSR = dynamic(() => import('../components/Map'), {
		ssr: false
	})

	const [result, setResult] = useState({})
	const [coordinates, setCoordinates] = useState([28.6448, 77.216721])

	useEffect(() => {
		const fetchIp = async () => {
			const res = await fetch('https://api.ipify.org/')
			const ip = await res.text()
		}
		fetchIp()
	}, [])

	const search = async (ip: FormDataEntryValue) => {
		const res = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPIFY_APIKEY}&ipAddress=${ip}`
		)
		const data = await res.json()
		return data
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		const { query } = Object.fromEntries(data.entries())
		const info = await search(query)
		const { location, isp, ip } = info
		const result = {
			'ip address': ip,
			location: `${location.city}, ${location.country}`,
			timezone: `UTC ${location.timezone}`,
			isp
		}
		setCoordinates([location.lat, location.lng])
		setResult(result)
	}
	return (
		<div>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
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
