import {
	settingsOutlined,
	HomeOutlined,
	PieChart,
	AdminPanelSettingsOutlined,
	TodayOutlined,
	AccountBoxOutlined,
	VerifiedOutlined,
	CodeOutlined,
	TimelineOutlined,
	NearMeOutlined,
	SignalCellularAltOutlined,
} from "@mui/icons-material"

import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"


export const navItems = [
	{
		name: 'Dashboard',
		icon: <HomeOutlined/>,
	},
	{
		name: "Profile",
		icon: <AccountBoxOutlined/>,
	},
	{
		name: "Education",
		icon: <TodayOutlined/>,
	},
	{
		name: "Skills",
		icon: <VerifiedOutlined/>,
	},
	{
		name: "Projects",
		icon: <CodeOutlined/>,
	},
	{
		name: "Charts",
		icon: null,
	},
	{
		name: "Pie",
		icon: <PieChart/>,
	},
	{
		name: "Line",
		icon: <TimelineOutlined/>,
	},
	{
		name: "Bar",
		icon: <SignalCellularAltOutlined/>,
	},
	{
		name: "Location",
		icon: <NearMeOutlined/>,
	},
	{
		name: "Social",
		icon: null,
	},
	{
		name: "GitHub",
		icon: <AiFillGithub/>
	},
	{
		name: "LinkedIn",
		icon: <AiOutlineLinkedin/>
	}
]