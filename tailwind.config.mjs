/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#F7F3E9',
          100: '#F2EBD7',
          200: '#E8D6B8',
          300: '#D4B887',
          400: '#C4A373',
          500: '#8B7355',
          600: '#7A6347',
          700: '#695339',
          800: '#58432B',
          900: '#47331D',
        },
        olive: {
          50: '#F5F7F0',
          100: '#EAEFE1',
          200: '#D5DFC3',
          300: '#B8C89A',
          400: '#9BB171',
          500: '#6B7A47',
          600: '#5C6B3D',
          700: '#4D5C33',
          800: '#3E4D29',
          900: '#2F3E1F',
        },
        sage: {
          50: '#F0F4F1',
          100: '#E1E9E3',
          200: '#C3D3C7',
          300: '#A5BDAB',
          400: '#87A78F',
          500: '#699173',
          600: '#5A7B62',
          700: '#4B6551',
          800: '#3C4F40',
          900: '#2D392F',
        },
        deep: {
          50: '#F0F2F5',
          100: '#E1E5EB',
          200: '#C3CBD7',
          300: '#A5B1C3',
          400: '#8797AF',
          500: '#2C3E50',
          600: '#253544',
          700: '#1E2B38',
          800: '#17222C',
          900: '#101820',
        },
        gold: {
          50: '#FDF9E7',
          100: '#FBF3CF',
          200: '#F7E79F',
          300: '#F3DB6F',
          400: '#EFCF3F',
          500: '#D4AF37',
          600: '#B8962F',
          700: '#9C7D27',
          800: '#80641F',
          900: '#644B17',
        }
      },
      fontFamily: {
        'serif': ['Lora', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'gentle-bounce': 'gentleBounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}