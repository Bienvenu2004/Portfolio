import Dashbaord from "../scenes/dashboard"
import {useSelector} from "react-redux"
import {CssBaseline, ThemeProvider} from "@mui/material"
import { Fragment, useMemo } from 'react'
import {createTheme} from "@mui/material/styles"
import { themeSettings } from './../theme/theme';

let mytheme

const App = () => {
	const mode = useSelector( state => state.global.mode)
	const theme = useMemo(
		() => createTheme(themeSettings(mode)), 
		[mode]
	)
	mytheme  = theme
	return (
		<div className='app'>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
		</div>
	)
}

export {mytheme}
export default App