import React, {useState, useEffect} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from "./FlexBetween"
import {useDispatch} from "react-redux"
import {setMode} from "../state"
import { useTheme, AppBar, Toolbar, IconButton, InputBase } from '@mui/material'
import { Loading } from '@nextui-org/react'

const Navbar = ({isSidebarOpen, setIsSidebarOpen}) => {
	const [searchValue, setSearchValue] = useState(null)
	const [isTyping, setIsTyping] = useState(false)
	const dispatch = useDispatch()
	const theme = useTheme()

	useEffect(()=>{
	if(searchValue != null)
		setIsTyping(true)
	else
		setIsTyping(false)
	}, [searchValue])
	
	return (
		<AppBar
			sx={{
				position: "static",
				background: 'none',
				boxShadow: 'none'
			}}
		>
			<Toolbar sx={{justifyContent: 'space-between'}}>
				{/* Left */}
				<FlexBetween>
					{
						!isSidebarOpen && (
							<IconButton onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
								<MenuIcon/>
							</IconButton>
						)
					}
					<FlexBetween
						backgroundColor = {theme.palette.background.alt}
						border={theme.palette.mode === "dark" ? "none" : "1px solid #c2c2c2"}
						borderRadius = "9px"
						gap = "3rem"
						p = "0.1rem 1.5rem"
					>
						<InputBase placeholder = 'Search...' 
							sx={{
								color: theme.palette.mode === "light" && "secondary.text",
							}}
							onChange={
								(event)=>{
									setSearchValue(event.target.value)
									if(event.target.value.length < 1)
									{
										setSearchValue(null)
									}         
								}
							}
						/>
						<IconButton>
							{
								isTyping ? <Loading type='default' size='xs' />
								: <Search/>
							}
						</IconButton>
					</FlexBetween>
				</FlexBetween>
				{/* Right */}
				<FlexBetween gap = "1.5rem">
					<IconButton onClick={()=> dispatch(setMode())}>
						{
							theme.palette.mode === "dark" ?
							<LightModeOutlined sx={{fontSize: "25px"}}/> 
							: <DarkModeOutlined sx={{fontSize: "25px"}}/>
						}
					</IconButton>
					<IconButton>
						<SettingsOutlined sx={{fontSize: "25px"}}/>
					</IconButton>
				</FlexBetween>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar