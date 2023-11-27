/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'retro',
      {
        retha: {
          primary: '#ff00ff',

          secondary: '#00dcff',

          accent: '#af7c00',

          neutral: '#1f1d12',

          'base-100': '#392623',

          info: '#008199',

          success: '#9dee00',

          warning: '#ffad00',

          error: '#e0003a',
        },
      },
    ],
  },
}
