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
	const [input, setInput] = useState('')

	useEffect(() => {
		const fetchIp = async () => {
			const res = await fetch('https://api.ipify.org/')
			const ip = await res.text()
		}
		fetchIp()
	}, [])

	const search = async (ip: string) => {
		const res = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPIFY_APIKEY}&ipAddress=${ip}`
		)
		const data = await res.json()
		return data
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(input)
	}
	return (
		<div>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='upperhalf h-64 flex flex-col items-center z-10'>
				<Header />
				<Search setInput={setInput} handleSubmit={handleSubmit} />
			</div>

			<Card />

			<div id='map' className='h-[620px] relative'>
				<MapWithNoSSR />
			</div>
		</div>
	)
}
