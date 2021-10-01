// eslint-disable-next-line @typescript-eslint/no-var-requires
const windDir = require('tailwindcss-dir')

const toTailwind = require('@theme-ui/tailwind').default
const theme = require('./src/theme') // Path to Theme UI config

const themeUiToTailwindConfig = toTailwind(theme)

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  ...themeUiToTailwindConfig,
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  plugins: [windDir()],
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
}
