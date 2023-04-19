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

	const document = await axios.post("http://localhost:3000/api/portfolioapi", 
		//body
		{
			document: lineDataJS,
			collection: "Line",
			sort: { "id": 1 }	
		}
	).then(res => console.log(res)).catch(err => console.log(err))

	return {
		props: {
			document
		},
		revalidate: 10
	}
}

export default App
