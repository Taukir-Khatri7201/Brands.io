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
				"gradient-start": "#AE67FA",
				"gradient-end": "#F49867",
				backgroud: "#FCFCFF",
			},
			gradientColorStopPositions: {
				"97%": "97%",
			},
		},
	},
	plugins: [],
};
