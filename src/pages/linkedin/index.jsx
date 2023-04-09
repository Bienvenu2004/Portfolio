import React from 'react'
import { useTheme } from "@mui/material"

const Index = () => {
	
	const theme = useTheme()

	return (
		<div className='app' style={{
			padding: "1.2rem 1.2rem 1.2rem 1.5rem",
			color: theme.palette.secondary.text
		}}>
			LinkedIn Page
		</div>
	)
}

export default Index