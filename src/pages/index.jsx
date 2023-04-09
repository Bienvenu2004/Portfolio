import { useTheme } from "@mui/material"

const App = () => {
	const theme = useTheme()
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