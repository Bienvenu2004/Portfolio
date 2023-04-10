import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material'

const PieChart = ({ data }) => {
	const theme = useTheme()

	return (
		<Box height = "75vh" width="100%">
			<ResponsivePie
				data={data}
				margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
				innerRadius={0.4}
				padAngle={8}
				cornerRadius={6}
				activeOuterRadiusOffset={8}
				endAngle={350}
				startAngle={5}
				borderWidth={5}
				borderColor={data[0].color}
				colors={{ datum: 'color' }}
				arcLinkLabelsSkipAngle={10}
				arcLinkLabelsTextColor={theme.palette.secondary.text}
				arcLinkLabelsThickness={4}
				arcLinkLabelsColor={data[0].color}
				arcLabelsSkipAngle={10}
				arcLinkLabelsDiagonalLength={30}
				arcLabelsTextColor={data[0].color}
				arcLinkLabelsOffset={13}
				arcLinkLabelsTextOffset={5}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.3)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				legends={[
					{
						anchor: 'bottom',
						direction: 'row',
						justify: false,
						translateX: 0,
						translateY: 80,
						itemsSpacing: 5,
						itemWidth: 100,
						itemHeight: 18,
						itemTextColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
						itemDirection: 'left-to-right',
						itemOpacity: 1,
						symbolBorderColor: data[0].color,
						symbolSize: 14,
						symbolShape: 'circle',
						effects: [
							{
								on: 'hover',
								style: {
									itemTextColor: theme.palette.mode === 'dark' ? '#fff' : '#000'
								}
							}
						]
					}
				]}
				theme={{
					tooltip: {
						container: {
							background: data[0].color,
							color: theme.palette.mode === 'dark' ? '#fff' : '#000'
						}
					},
						
				}}
			/>
		</Box>
	)
}

export default PieChart