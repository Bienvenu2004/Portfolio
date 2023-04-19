import { useTheme } from "@mui/material"
import { useEffect } from "react"
import axios from "axios"

const App = () => {
	const theme = useTheme()
	
	useEffect(() => {
		axios.get("http://localhost:3000/api/portfolio")
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}, [])

	return (
		<div className='app' style={{
			padding: "1.2rem 1.2rem 1.2rem 1.5rem",
			color: theme.palette.secondary.text
		}}>
			HomePage
		</div>
	)
}

export default App