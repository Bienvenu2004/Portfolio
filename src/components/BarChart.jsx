import React from 'react'
import { Box, useTheme } from '@mui/material'
import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({ data }) => {
	const theme = useTheme()

	return (
		<Box height = "75vh" width="100%">
			<ResponsiveBar
				data={data}
				keys={[
					'JavaScript',
					'Next JS',
					'Node JS',
					'React JS',
					'Express JS',
					'HTML',
					'CSS',
					'MUI5',
					'NextUI',
					'Antd',
					'Primereact',
					'Vercel',
					'MySQL',
					'MongoDB',
					'Firebase',
					'Amazon Web Services',
					'PostgreSQL'
				]}
				indexBy="skills"
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				colors={{ scheme: 'category10' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.18)',
						size: 4,
						padding: 1,
						stagger: true
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: 'rgba(255, 255, 255, 0.18)',
						rotation: -45,
						lineWidth: 6,
						spacing: 10
					}
				]}
				fill={[
					{
						match: {
							id: 'MUI5'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'NextUI'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'Antd'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'Primereact'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'Vercel'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'MySQL'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'MongoDB'
						},
						id: 'dots'
					},
					{
						match: {
							id: 'JavaScript'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'Next JS'
						},
						id: 'lines'
					},
					{
						match: {
							id: 'React JS'
						},
						id: 'lines'
					},
				]}
				borderColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 10,
					tickRotation: 0,
					legend: 'skills',
					legendPosition: 'middle',
					legendOffset: 45,
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'food',
					legendPosition: 'middle',
					legendOffset: -40
				}}
				labelSkipWidth={12}
				labelSkipHeight={12}
				labelTextColor={{
					from: 'color',
					modifiers: [
						[
							'darker',
							1.6
						]
					]
				}}
				legends={[
					{
						dataFrom: 'keys',
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 120,
						translateY: 0,
						itemsSpacing: 2,
						itemWidth: 100,
						itemHeight: 20,
						itemDirection: 'left-to-right',
						itemTextColor: theme.palette.secondary.text,
						itemOpacity: 0.85,
						symbolSize: 20,
						effects: [
							{
								on: 'hover',
								style: {
									itemOpacity: 1
								}
							}
						]
					}
				]}
				role="application"
				ariaLabel="Bar Chart"
				barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in skills: "+e.indexValue}}
				theme={{
					tooltip: { 
						container: {
							background: theme.palette.primary.main,
							color: theme.palette.secondary.text,
						}
					},
					axis: {
						ticks: {
							text: {
								fill: theme.palette.secondary.text,
							}
						},
						legend: {
							text: {
								fill: theme.palette.secondary.text,
							}
						}
					}
				}}
			/>
		</Box>
	)
}

export default BarChart