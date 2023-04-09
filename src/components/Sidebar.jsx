import {
	Box, 
	Drawer, 
	Divider, 
	IconButton, 
	ListItem, 
	ListItemButton, 
	List, 
	useTheme, 
	ListItemText, 
	Typography, 
	ListItemIcon
} from "@mui/material"
import { useEffect, useState } from 'react'
import FlexBetween from './FlexBetween'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { navItems } from "../data/data"
import { ArrowRightOutlined, ArrowBackOutlined}  from "@mui/icons-material"
import { SettingsOutlined } from "@mui/icons-material"

const Sidebar = ({drawerWidth, isSidebarOpen, setIsSidebarOpen, isMobile}) => {
	const theme = useTheme()
	const router = useRouter()
	const {pathname} = router
	const [activeUrl, setActiveUrl] = useState(pathname.substring(1))
	

	useEffect(()=>{
		setActiveUrl(pathname.substring(1))
	}, [pathname])
	
	if(activeUrl === ""){
		setActiveUrl("dashboard")
	}

	return (
		<Box component = "nav">
			{
				isSidebarOpen && (
					<Drawer	variant="persistent" open={isSidebarOpen}
						onClose={()=> setIsSidebarOpen(false)}
						anchor="left"
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							"& .MuiDrawer-paper": {
								color: theme.palette.secondary[200],
								backgroundColor: theme.palette.background.alt,
								boxSizing: "border-box",
								borderWidth: isMobile ? "2px" : "0px",
								width: drawerWidth,
								boxShadow: theme.palette.mode === "light" 
									&& "0px 0px 5px 0px rgba(0,0,0,0.2)",
							}
						}}
					>
						<Box width="100%">
							<Box m= "1rem 3rem 1.5rem 1.2rem">
								<FlexBetween>
									<Box display="flex" alignItems="center" gap="0.5rem" mr="5rem">
										<Typography variant="h5" fontWeight="bold" color="secondary.text">PORTFOLIO</Typography>
									</Box>
									{
										isSidebarOpen && (
											<IconButton sx={{mb: "0.2rem"}} onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
												<ArrowBackOutlined/>
											</IconButton>
										)
									}	
								</FlexBetween>
							</Box>
							{
								navItems.map((item)=>{
									if(!item.icon){
										return (
											<Typography key={item.name} variant="h6" fontWeight="bold" color="secondary.main"
												sx={{
													m: "1.5rem 0 1.5rem 1.1rem"
												}} 
											>
												{item.name}
											</Typography>
										)
									}
									return (
										<ListItem key={item.name} disablePadding >  
											<ListItemButton onClick={()=> {
													item.name === "Dashboard" ? router.push("/") 
													:router.push(`/${item.name.toLowerCase()}`)
													setActiveUrl(item.name.toLowerCase())
												}} 
												sx={{
													backgroundColor: activeUrl === item.name.toLowerCase() ? theme.palette.secondary.main : "transparent",
													color: activeUrl === item.name.toLowerCase() ? theme.palette.secondary[100]: theme.palette.secondary.text
												}}
											>
												<ListItemIcon sx={{
													color: activeUrl === item.name.toLowerCase() ? theme.palette.secondary[100]: theme.palette.secondary.text
												}}>
													{item.icon}
												</ListItemIcon>
												<ListItemText primary={item.name}/>
												{
													activeUrl === item.name.toLowerCase() && (
														<ArrowRightOutlined sx={{
																ml: "auto",
															}}
														/>
													)
												}
											</ListItemButton>
										</ListItem>
									)
								})
							}
						</Box>

						<Box 
							position="static" 
							bottom="0rem"
							width='100%' 
							backgroundColor={theme.palette.background.alt}
						>
							<Divider sx={{
								width: "100%",
							}}/>
							<FlexBetween textTransform={"none"} gap="1.5rem" m="1rem 3rem ">
								<Box 
									component='img' 
									src="images/me.png"
									alt="Profile"
									width='40px'
									height='40px'
									sx={{
										borderRadius: "50%",
										objectFit: "cover",
									}}
								/>
								<Box textAlign='left'>
									<Typography  fontWeight="bold" color="secondary.text">
										Abdulrahim
									</Typography>
								</Box>
							</FlexBetween>
						</Box>
					</Drawer>
				)
			}
		</Box>
	)
}

export default Sidebar