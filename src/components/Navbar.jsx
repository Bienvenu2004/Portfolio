import React, {useState, useEffect} from 'react'
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material'
import FlexBetween from "./FlexBetween"
import { useTheme, AppBar, Toolbar, IconButton, InputBase, Button , Menu, Box, Typography} from '@mui/material'
import { Loading } from '@nextui-org/react'

const Navbar = ({isSidebarOpen, setIsSidebarOpen, setMode, mode}) => {
	const [searchValue, setSearchValue] = useState(null)
	const [isTyping, setIsTyping] = useState(false)
	const [anchorEl, setAnchorEl] = useState(null)
	const theme = useTheme()

	const isOpen = Boolean(anchorEl)
	const handleClick = (event) => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)

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
				boxShadow: 'none',			}}
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
					<IconButton onClick={()=> 
							mode == "dark" ? setMode("light") : setMode("dark")
						}
					>
						{
							theme.palette.mode === "dark" ?
							<LightModeOutlined sx={{fontSize: "25px"}}/> 
							: <DarkModeOutlined sx={{fontSize: "25px"}}/>
						}
					</IconButton>
					<IconButton>
						<SettingsOutlined sx={{fontSize: "25px"}}/>
					</IconButton>

					<FlexBetween>
						<Button onClick = {handleClick} sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								gap: "1rem",
								textTransform: "none",
							}}
						>
							<Box 
								component='img' 
								src="images/me.png"
								alt="Profile"
								width='32px'
								height='32px'
								sx={{
									borderRadius: "50%",
									objectFit: "cover",
								}}
							/>
							<Box textAlign='left'>
								<Typography  fontWeight="bold" color="secondary.text" fontSize='0.85rem' >
									Abdulrahim
								</Typography>
							</Box>
						</Button>
						<Menu
							anchorEl={anchorEl}
							open={isOpen}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'center',
							}}
						/>
					</FlexBetween>

				</FlexBetween>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar