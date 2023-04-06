import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/layout/Layout'

import "../styles/globals.css"


const App = ({ Component, pageProps }) => {
	return (
		<>
			<Layout>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
				</Head>
				<NextNProgress
					color="#0072F5"
					startPosition={0.3}
					stopDelayMs={200}
					showOnSShallow ={true}
					height={3}
					options={{showSpinner: false, easing: 'ease', speed: 500}}
				/>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default App