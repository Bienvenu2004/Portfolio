import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { Fragment } from 'react'
import {configureStore} from "@reduxjs/toolkit"
import globalReducer from "../state"
import {Provider} from "react-redux"


import "../styles/globals.css"

const store = configureStore({
	reducer: {
		global: globalReducer
	}
})

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
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Fragment>
	)
}

export default App