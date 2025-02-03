/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				gilroy: ["Gilroy-Regular", ...fontFamily.sans],
				"gilroy-light": ["Gilroy-Light", ...fontFamily.sans],
				"gilroy-medium": ["Gilroy-Medium", ...fontFamily.sans],
				"gilroy-bold": ["Gilroy-Bold", ...fontFamily.sans],
				"gilroy-extra-bold": ["Gilroy-Heavy", ...fontFamily.sans],
			},
			colors: {
				primary: "#3E4581",
				secondary: "#481177",
				"gradient-start": "#AE67FA",
				"gradient-end": "#F49867",
				rectangle: "#F8F8F8",
				circle: "#ECEEFF",
				shadow: "#7D30DF",
				bgprimary: "#F8F3FF",
				bginput: "#1C1E32",
			},
			backgroundColor: {
				backgroud: "#FCFCFF",
			},
			gradientColorStopPositions: {
				"97%": "97%",
			},
			fontSize: {
				"sm-md": ["1.125rem", "1rem"],
				"6xl-blh": ["3.75rem", "4.5rem"],
			},
		},
	},
	plugins: [],
};
