import antfu from "@antfu/eslint-config"

export default antfu({
	stylistic: {
		indent: "tab",
		quotes: "double",
	},
	astro: true,
	typescript: true,
	jsonc: true,
	yaml: true,
})
