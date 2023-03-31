import {useState} from 'react'
import {Box, useMediaQuery} from "@mui/material"
import { useSelector } from 'react-redux'
import Navbar from "../../components/Navbar"

const Layout = () => {
	return (
		<Box width = '100%' height = '100%'>
			<Box>
				<Navbar/>
			</Box>
		</Box>
	)
}

export default Layout