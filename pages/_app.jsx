import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#2a9461"
		}
	}
})

const App = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
		</Fragment>
	)
}

export default App