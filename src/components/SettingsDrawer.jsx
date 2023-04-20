import { useState, forwardRef, useImperativeHandle } from 'react'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, useTheme } from '@mui/material';

const SettingsDrawer = ({},ref) => {
	const [state, setState] = useState({right: false})
	const [isOpen, setIsOpen] = useState(false)
	const theme = useTheme()
	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
	
		setState({ ...state, [anchor]: open });
		setIsOpen(!isOpen)
	}

	useImperativeHandle( ref, () => {
		return {
			alterDrawerState: () => toggleDrawer('right', true)
		};
	},
	[]
)

	const buttons = [
		<Button key="light">Light</Button>,
		<Button key="system">System</Button>,
		<Button key="dark">Dark</Button>,
	];
	return (
		<Drawer
			anchor='right'
			open={isOpen}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
			sx={{
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					color: theme.palette.secondary[200],
					backgroundColor: "#101624",
					boxSizing: "border-box",
					width: 250,
				},
				justifyItems:'center'
			}}
		>
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={toggleDrawer('right', false)}
				onKeyDown={toggleDrawer('right', false)}
				display='flex'
			>
				<ButtonGroup size="large" aria-label="large button group">
					{buttons}
				</ButtonGroup>	
			</Box>
		</Drawer>
	)
}

export default forwardRef(SettingsDrawer)