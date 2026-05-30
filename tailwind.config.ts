import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#066EF5',
          bg: '#F7F7F7',
        },
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
