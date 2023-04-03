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
							}
						}}
					>
						<Box width="100%">
							<Box m= "1rem 3rem 1.5rem 1.2rem">
								<FlexBetween>
									<Box display="flex" alignItems="center" gap="0.5rem" mr="5rem">
										<Typography variant="h5" fontWeight="bold">PORTFOLIO</Typography>
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
													router.push(`/${item.name.toLowerCase()}`)
													setActiveUrl(item.name.toLowerCase())
												}} 
												sx={{
													backgroundColor: activeUrl === item.name.toLowerCase() ? theme.palette.secondary.main : "transparent",
													color: activeUrl === item.name.toLowerCase() ? theme.palette.secondary[100]: theme.palette.secondary[200]												}}
											>
												<ListItemIcon sx={{
													color: activeUrl === item.name.toLowerCase() ? theme.palette.primary.light : theme.palette.secondary[200]
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
					</Drawer>
				)
			}
		</Box>
	)
}

export default Sidebar