import {useState, useMemo} from "react"
import {CssBaseline, ThemeProvider, Box, useMediaQuery} from "@mui/material"
import {createTheme} from "@mui/material/styles"
import { themeSettings } from '../../theme/theme';
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Layout = ({children}) => {
	const [mode, setMode] = useState("dark")
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
	const isMobile = useMediaQuery('(max-width: 600px)')
	const theme = useMemo(
		() => createTheme(themeSettings(mode)), 
		[mode]
	)
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box display={isMobile ? "block" : "flex"} width = '100%' height = '100%'>
				<Sidebar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
					isMobile={isMobile}
					drawerWidth="250px"
				/>
				<Box flexGrow={1} >
					<Navbar 
						isSidebarOpen={isSidebarOpen} 
						setIsSidebarOpen={setIsSidebarOpen} 
						mode={mode} 
						setMode={setMode}
					/>
					{/** content of page*/}
					{children}
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default Layout