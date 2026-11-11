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
        // Brand palette: #066EF5 blue, #7ED957 green, #FFDE59 yellow.
        // Tailwind's own blue / green / yellow scales are re-based on them,
        // so every bg-blue-600, text-emerald-700, bg-amber-50 … follows the brand.
        blue: {
          50: '#EEF5FF', 100: '#D9E8FF', 200: '#BCD7FF', 300: '#8EBDFF', 400: '#4E97FA',
          500: '#2280F8', 600: '#066EF5', 700: '#0558C4', 800: '#08479B', 900: '#0C3C7D', 950: '#0A264F',
        },
        emerald: {
          50: '#F2FCEE', 100: '#E2F8D8', 200: '#C6F0B3', 300: '#A3E585', 400: '#7ED957',
          500: '#5EC236', 600: '#47A024', 700: '#387C1F', 800: '#30621E', 900: '#29521C', 950: '#122D0A',
        },
        amber: {
          50: '#FFFCEB', 100: '#FFF7C7', 200: '#FFEE94', 300: '#FFDE59', 400: '#FFCF2E',
          500: '#F5B50A', 600: '#D98C04', 700: '#B46507', 800: '#924E0D', 900: '#78400F', 950: '#452103',
        },
        brand: {
          blue: '#066EF5',
          green: '#7ED957',
          yellow: '#FFDE59',
          bg: '#F7F7F7',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
