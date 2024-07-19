import antfu from "@antfu/eslint-config"

export default antfu({
	stylistic: {
		indent: "tab", // 4, or 'tab'
		quotes: "double", // or 'double'
	},
	astro: true,
	typescript: true,
})
