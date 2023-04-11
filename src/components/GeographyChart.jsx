import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from '@mui/material'

const GeographyChart = ({ data, features }) => {
	const theme = useTheme()

	return (
		<Box height = "75vh" width="99%" padding={1}>
			<ResponsiveChoropleth
				data={data}
				features={features.features}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				colors="RdYlBu"
				domain={[ 0, 1000000 ]}
				unknownColor={theme.palette.mode === 'dark' ? '#000' : '#e0e0e0'}
				label="Cameroon"
				valueFormat=".2s"
				projectionTranslation={[ 0.5, 0.5 ]}
				projectionRotation={[ 5, 20, 10 ]}
				projectionScale={150}	
				enableGraticule={false}
				graticuleLineColor="#dddddd"
				borderWidth={0.5}
				borderColor="#152538"
				defs={[
					{
						id: 'gradient',
						type: "linearGradient",
						colors: [
							{
								offset: 0,
								color: theme.palette.secondary.text
							},
							{
								offset: 100,
								color: "#009FBD"
							}
						]
					}
				]}
				fill={[
					{
						match: {
							id: 'CMR'
						},
						id: 'gradient'
					}
				]}
				theme={{
					tooltip: { 
						container: {
							background: theme.palette.primary.main,
							color: theme.palette.secondary.text,
						}
					},
				}}
			/>
		</Box>
	)
}

export default GeographyChart