import {
	HomeOutlined,
	PieChart,
	TodayOutlined,
	VerifiedOutlined,
	CodeOutlined,
	TimelineOutlined,
	NearMeOutlined,
	SignalCellularAltOutlined,
	Person4Outlined
} from "@mui/icons-material"

import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"


export const navItems = [
	{
		name: 'Dashboard',
		icon: <HomeOutlined/>,
	},
	{
		name: "Profile",
		icon: <Person4Outlined/>,
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
		name: "Line",
		icon: <TimelineOutlined/>,
	},
	{
		name: "Pie",
		icon: <PieChart/>,
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