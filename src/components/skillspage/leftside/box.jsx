<Box
display="flex"
py={1.5}
border={"1px solid red"}
flexWrap="wrap"
flex={1}
>
{/**Top */}
<Box
	display="flex"
	width="100%"
	height={
		(!is1050px && isSidebarOpen && "50%") ||
		(isSidebarOpen && is1050px && "100%")
	}
	alignItems="center"
	justifyContent="center"
	boxSizing="border-box"
	mb={0.75}
>
	<Box
		display="flex"
		width="50%"
		height="100%"
		alignItems="center"
		justifyContent="center"
		flexDirection="column"
		sx={{
			background: theme.palette.background.paper,
			mr: 0.75,
			borderRadius: "5px",
			borderBottom: "5px solid hsl(134, 70%, 50%)",
			borderBottomLeftRadius: "0px",
			borderBottomRightRadius: "0px",
		}}
	>
		<Image
			src={"/images/mongodb.png"}
			alt="MongoDB"
			width={100}
			height={100}
			style={{
				...imageStyles[0],
				height: is1100px && isSidebarOpen && "80px",
				width: is1100px && isSidebarOpen && "80px",
			}}
		/>
	</Box>
	<Box
		display="flex"
		width="50%"
		height="100%"
		alignItems="center"
		justifyContent="center"
		sx={{
			background: theme.palette.background.paper,
			ml: 0.75,
			borderRadius: "5px",
			borderBottom: "5px solid hsl(40, 70%, 50%)",
			borderBottomLeftRadius: "0px",
			borderBottomRightRadius: "0px",
		}}
	>
		<Image
			src={"/images/expressjs.png"}
			alt="ExpressJS"
			width={100}
			height={100}
			style={{
				...imageStyles[0],
				height:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px && isSidebarOpen && "100px"),
				width:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px && isSidebarOpen && "100px"),
			}}
		/>
	</Box>
</Box>
{/**Bottom */}
<Box
	display="flex"
	width="100%"
	height={
		(!is1050px && isSidebarOpen && "50%") ||
		(isSidebarOpen && is1050px && "100%")
	}
	alignItems="center"
	justifyContent="center"
	mt={0.75}
	boxSizing="border-box"
>
	<Box
		display="flex"
		width="50%"
		height="100%"
		alignItems="center"
		justifyContent="center"
		sx={{
			background: theme.palette.background.paper,
			mr: 0.75,
			borderRadius: "5px",
			borderBottom: isMERN
				? "5px solid hsl(216, 70%, 50%)"
				: "5px solid hsl(310, 70%, 50%)",
			borderBottomLeftRadius: "0px",
			borderBottomRightRadius: "0px",
		}}
	>
		<Image
			src={
				isMERN
					? "/images/reactjs.png"
					: "/images/nextjs.png"
			}
			alt={isMERN ? "ReactJS" : "NextJS"}
			width={100}
			height={100}
			style={{
				...imageStyles[0],
				height:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px && isSidebarOpen && "100px"),
				width:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px && isSidebarOpen && "100px"),
			}}
		/>
	</Box>
	<Box
		display="flex"
		width="50%"
		height="100%"
		alignItems="center"
		justifyContent="center"
		sx={{
			background: theme.palette.background.paper,
			ml: 0.75,
			borderRadius: "5px",
			borderBottom: "5px solid hsl(134, 70%, 50%)",
			borderBottomLeftRadius: "0px",
			borderBottomRightRadius: "0px",
		}}
	>
		<Image
			src={"/images/nodejs.png"}
			alt="NodeJS"
			width={100}
			height={100}
			style={{
				...imageStyles[0],
				height:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px &&
						isSidebarOpen &&
						!is1100px &&
						"100px"),
				width:
					(is1100px && isSidebarOpen && "80px") ||
					(is1050px &&
						isSidebarOpen &&
						!is1100px &&
						"100px"),
			}}
		/>
	</Box>
</Box>