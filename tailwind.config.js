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
				primary: "rgba(var(--primary))",
				secondary: "rgba(var(--secondary))",
				"gradient-start": "rgba(var(--gradient-start))",
				"gradient-end": "rgba(var(--gradient-end))",
				rectangle: "rgba(var(--rectangle))",
				circle: "rgba(var(--circle))",
				shadow: "rgba(var(--shadow))",
				bgprimary: "rgba(var(--bgprimary))",
				bginput: "rgba(var(--bginput))",
				"app-white": "rgba(var(--app-white))",
				"app-border": "rgba(var(--app-border))",
				"text-secondary": "rgba(var(--text-secondary))",
			},
			backgroundColor: {
				background: "rgba(var(--background))",
			},
			gradientColorStopPositions: {
				"97%": "97%",
			},
			fontSize: {
				"sm-md": ["1.125rem", "1rem"],
				"6xl-blh": ["3.75rem", "4.5rem"],
			},
			height: {
				"full-1.5x": "120%",
				"full-2x": "200%",
			},
		},
	},
	plugins: [],
};
