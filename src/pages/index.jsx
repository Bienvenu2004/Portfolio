import { useTheme } from "@mui/material"
import { lineDataJS, lineDataCSS, lineDataDB } from "@/data/charts"
import axios from "axios"

const App = ({document}) => {
	const theme = useTheme()
	console.log(document)
	return (
		<div className='app' style={{
			padding: "1.2rem 1.2rem 1.2rem 1.5rem",
			color: theme.palette.secondary.text
		}}>
			HomePage
		</div>
	)
}

export const getStaticProps = async () => {

	return {
		props: {
			document: null
		},
		revalidate: 10
	}
}

export default App
