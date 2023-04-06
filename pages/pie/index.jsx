import React from 'react'
import {useSelector} from "react-redux"
import {CssBaseline, ThemeProvider} from "@mui/material"
import { Fragment, useMemo } from 'react'
import {createTheme} from "@mui/material/styles"
import { themeSettings } from '../../theme/theme';
import Layout from "../../scenes/layout"


const index = () => {
	const mode = useSelector( state => state.global.mode)
	const theme = useMemo(
		() => createTheme(themeSettings(mode)), 
		[mode]
	)

	return (
		<div className='app'>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<div style={{
					padding: "1.2rem 1.2rem 1.2rem 1.5rem",
					color: theme.palette.secondary.text
				}}>
					Pie Chart
				</div>
			</Layout>
		</ThemeProvider>
			
		</div>
	)
}

export default index