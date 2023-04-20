import { useTheme } from "@mui/material"


import { getAllDocuments } from "@/lib/mongodbHelper"


const Index = ({Line, Bar, Geo, Pie}) => {

	const theme = useTheme()

	return (
		<div className='app' style={{
			padding: "1.2rem 1.2rem 1.2rem 1.5rem",
			color: theme.palette.secondary.text
		}}>
			Skills Page
		</div>
	)
}


export const getStaticProps = async () => {

	const Line = await getAllDocuments("Line")
	const Bar = await getAllDocuments("Bar")
	const Pie = await getAllDocuments("Pie")
	const Geo = await getAllDocuments("Geo")

	return {
		props: {
			Line,
			Bar,
			Pie,
			Geo
		},
		revalidate: 10
	}
}

export default Index