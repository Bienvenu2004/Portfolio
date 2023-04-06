//color design tokens
export const tokensDark  = {
	gray: {
		100: "#e0e0e0",
		200: "#c2c2c2",
		300: "#a3a3a3",
		400: "#858585",
		500: "#666666",
		600: "#525252",
		700: "#3d3d3d",
		800: "#292929",
		900: "#141414"
	},
	primary: {
		100: "#ffffff",
		200: "#a1a4ab",
		300: "#727681",
		400: "#434957",
		500: "#141b2d",
		600: "#101624",
		700: "#0c101b",
		800: "#080b12",
		900: "#040509"
	},
	greenAccent: {
		100: "#dbf5ee",
		200: "#b7ebde",
		300: "#94e2cd",
		400: "#70d8bd",
		500: "#4cceac",
		600: "#3da58a",
		700: "#2e7c67",
		800: "#1e5245",
		900: "#0f2922"
	},
	redAccent: {
		100: "#f8dcdb",
		200: "#f1b9b7",
		300: "#e99592",
		400: "#e2726e",
		500: "#db4f4a",
		600: "#af3f3b",
		700: "#832f2c",
		800: "#58201e",
		900: "#2c100f"
	},
	info: {
		100: "#ffffcc",
		200: "#ffff99",
		300: "#ffff66",
		400: "#ffff33",
		500: "#ffff00",
		600: "#cccc00",
		700: "#999900",
		800: "#666600",
		900: "#333300"
	},

	blueAccent: {
		100: "#ffffff",
		200: "#d2e3ff",
		300: "#79acfe",
		400: "#4c91fe",
		500: "#1f75fe",
		600: "#195ecb",
		700: "#134698",
		800: "#0c2f66",
		900: "#061733"
	},

}

const reverseTokens = (tokensDark) => {
	const reversedTokens = {}
	Object.entries(tokensDark).forEach(([key, value]) => {
		const keys = Object.keys(value)
		const values = Object.values(value)
		const length = keys.length
		const reversedObject = {}
		for (let i = 0; i < length; i++) {
			reversedObject[keys[i]] = values[length - i - 1]
		}
		reversedTokens[key] = reversedObject
	})
	return reversedTokens
}

export const tokensLight = reverseTokens(tokensDark)


export const themeSettings = (mode) =>{
	return {
		palette: {
			mode: mode,
			...(mode === "dark" ? {
				primary: {
					...tokensDark.primary,
					main: tokensDark.primary[500],
					light: tokensDark.primary[100],
				},
				secondary: {
					...tokensDark.blueAccent,
					main: tokensDark.blueAccent[500],
					text: tokensDark.blueAccent[200]
				},
				error: {
					...tokensDark.redAccent,
					main: tokensDark.redAccent[500],
				},
				info: {
					...tokensDark.info,
					main: tokensDark.info[500],
				},
				neutral: {
					...tokensDark.gray,
					main: tokensDark.gray[500],
				},
				background: {
					default: tokensDark.primary[500],
					alt: tokensDark.primary[600],
				}, 
			} :{
				primary: {
					...tokensDark.primary,
					main: tokensDark.primary[100],
					light: tokensDark.primary[500],
				},
				secondary: {
					...tokensDark.blueAccent,
					main: tokensDark.blueAccent[500],
					text: tokensDark.gray[500]
				},
				error: {
					...tokensDark.redAccent,
					main: tokensDark.redAccent[500],
				},
				info: {
					...tokensDark.info,
					main: tokensDark.info[500],
				},
				neutral: {
					...tokensDark.gray,
					main: tokensDark.gray[500],
				},
				background: {
					default: tokensDark.primary[100],
					alt: tokensDark.primary[100],
				}, 
			})
		},
		typography: {
			fontFamily: ["Alkatra", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontSize: "2.5rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
			h2: {
				fontSize: "2rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
			h3: {
				fontSize: "1.75rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
			h4: {
				fontSize: "1.5rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
			h5: {
				fontSize: "1.25rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
			h6: {
				fontSize: "1rem",
				fontFamily: ["Alkatra", "sans-serif"].join(","),
			},
		}
	}
}
