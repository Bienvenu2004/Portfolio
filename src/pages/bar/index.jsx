import { useTheme, Box, Typography } from "@mui/material"
import { barData } from "@/data/charts"
import BarChart from "@/components/BarChart"


const Index = () => {
	const theme = useTheme()
	
	return (
		<div className='app' style={{
			padding: "1.2rem 1.2rem 1.2rem 1.5rem",
			color: theme.palette.secondary.text
		}}>
			<Box p= '10px'>
				<Typography  fontWeight="bold" color="secondary.text" fontSize='1rem' >
					Bar Chart
				</Typography>
				<BarChart data={barData}/>
			</Box>
		</div>
	)
}

export default Index