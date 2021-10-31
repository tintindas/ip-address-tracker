import Head from 'next/head'

export default function Home() {
	return (
		<div className='flex items-center justify-center'>
			<Head>
				<title>IP Address Tracker</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<p className='font-rubik font-bold'>Let's Build an IP tracker</p>
		</div>
	)
}
