/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#e1e8f2',
          200: '#c2d2e5',
          300: '#94b3d3',
          400: '#608ebc',
          500: '#3d70a3',
          600: '#2e5886',
          700: '#25466c',
          800: '#1E3E62',
          850: '#132842',
          900: '#0B192C',
          950: '#060e19',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        nirghos: {
          primary: '#0284c7',
          'primary-hover': '#0369a1',
          cyan: '#38bdf8',
          electric: '#0ea5e9',
          navy: '#0B192C',
          dark: '#060e19',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'premium': '0 4px 20px -2px rgba(11, 25, 44, 0.08), 0 2px 6px -1px rgba(11, 25, 44, 0.04)',
        'premium-hover': '0 12px 30px -4px rgba(11, 25, 44, 0.12), 0 4px 10px -2px rgba(11, 25, 44, 0.06)',
        'card': '0 0 0 1px rgba(226, 232, 240, 0.8), 0 2px 4px 0 rgba(11, 25, 44, 0.04)',
        'card-hover': '0 0 0 1px rgba(2, 132, 199, 0.3), 0 12px 24px -4px rgba(11, 25, 44, 0.1)',
      },
    },
  },
  plugins: [],
}
