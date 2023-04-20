import { useState, forwardRef, useImperativeHandle, Fragment } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, useTheme } from '@mui/material';
import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material'


const SettingsDrawer = ({placement},ref) => {
	const [isOpen, setIsOpen] = useState(false)

	const theme = useTheme()

	const toggleDrawer =  () => setIsOpen(!isOpen)
	

	useImperativeHandle( ref, () => {
			return {
				alterDrawerState: () => toggleDrawer()
			};
		},[]
	)

	const buttons = [
		<Button key="light" color={theme.palette.secondary[100]} startIcon={<LightModeOutlined/>}>
			Light
		</Button>,
		<Button key="system" color={theme.palette.secondary[100]}>
			System
		</Button>,
		<Button key="dark" color={theme.palette.secondary[100]} startIcon={<DarkModeOutlined/>}>
			Dark
		</Button>,
	];
	return (
		<Fragment>
			<Drawer
				anchor={placement}
				open={isOpen}
				onClose={toggleDrawer}
				sx={{
					flexShrink: 0,
					"& .MuiDrawer-paperAnchorRight": {
						backgroundColor: theme.palette.mode === 'dark' && '#0A1929',
						boxSizing: "border-box",
						width: 250,
						color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
						borderTopLeftRadius: "15px",
						borderBottomLeftRadius: '15px',
						justifyItems:'center',
					},
					backgroundColor: 'transparent'
				}}
				>
				<Box width={250} p={5} justifyItems='center'>
					<ButtonGroup>
						{buttons}
					</ButtonGroup>
				</Box>
				
			</Drawer>
		</Fragment>
	)
}

export default forwardRef(SettingsDrawer)