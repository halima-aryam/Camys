import { buildLegacyTheme } from 'sanity'

const props = {
  '--my-white': '#f5e6ef',
  '--my-black': '#0d0a0f',
  '--my-pink': '#f472b6',
  '--my-red': '#db4437',
  '--my-yellow': '#c9a96e',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  // Base theme colors
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#9d7090',
  '--gray-base': '#9d7090',

  '--component-bg': '#140f18',
  '--component-text-color': props['--my-white'],

  // Brand
  '--brand-primary': props['--my-pink'],

  // Default button
  '--default-button-color': '#1c1326',
  '--default-button-primary-color': props['--my-pink'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],

  // State
  '--state-info-color': props['--my-pink'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  // Navbar
  '--main-navigation-color': '#140f18',
  '--main-navigation-color--inverted': props['--my-white'],

  '--focus-color': props['--my-pink'],
})
