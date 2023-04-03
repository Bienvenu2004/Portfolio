import {useState} from 'react'
import {Box, useMediaQuery} from "@mui/material"
import { useSelector } from 'react-redux'
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"

const Layout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)
	const isMobile = useMediaQuery('(max-width: 600px)')

	return (
		<Box display={isMobile ? "block" : "flex"} width = '100%' height = '100%'>
			<Sidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
				isMobile={isMobile}
				drawerWidth="250px"
			/>
			<Box>
				<Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
			</Box>
		</Box>
	)
}

export default Layout