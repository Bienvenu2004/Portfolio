import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'



const App = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<NextNProgress
				color="#0072F5"
				startPosition={0.3}
				stopDelayMs={200}
				showOnSShallow ={true}
				height={3}
			/>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default App