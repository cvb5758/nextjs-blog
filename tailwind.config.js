/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.warmGray.800'),
            a: {
              color: theme('colors.orange.500'),
              '&:hover': {
                color: theme('colors.orange.600'),
              },
            },
            strong: {
              color: theme('colors.warmGray.900'),
            },
            'ol > li::before': {
              color: theme('colors.orange.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.orange.500'),
            },
            hr: {
              borderColor: theme('colors.warmGray.200'),
            },
            blockquote: {
              color: theme('colors.warmGray.900'),
              borderLeftColor: theme('colors.orange.500'),
            },
            'figure figcaption': {
              color: theme('colors.warmGray.600'),
            },
            code: {
              color: theme('colors.warmGray.900'),
              backgroundColor: theme('colors.warmGray.100'),
            },
            'a code': {
              color: theme('colors.orange.500'),
            },
            pre: {
              color: theme('colors.warmGray.50'),
              backgroundColor: theme('colors.warmGray.900'),
            },
            'pre code': {
              backgroundColor: 'transparent',
            },
            thead: {
              color: theme('colors.warmGray.900'),
              borderBottomColor: theme('colors.warmGray.200'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.warmGray.200'),
            },
          },
        },
      }),
      colors: {
        warmGray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e5e3e1',
          300: '#d1cecb',
          400: '#b8b3af',
          500: '#9e9995',
          600: '#837e7a',
          700: '#686460',
          800: '#4d4a47',
          900: '#32302d',
        },
        orange: {
          50: '#fffaf0',
          100: '#fef3e0',
          200: '#fde4bf',
          300: '#fbd49c',
          400: '#f9c379',
          500: '#f7b255',
          600: '#f5a031',
          700: '#f38e0e',
          800: '#d17a0b',
          900: '#af6608',
        },
        red: {
          50: '#fef5f5',
          100: '#fdebeb',
          200: '#fbd7d7',
          300: '#f9c2c2',
          400: '#f7adad',
          500: '#f59898',
          600: '#f38383',
          700: '#f16e6e',
          800: '#ef5959',
          900: '#ed4444',
        },
        amber: {
          50: '#fffdf0',
          100: '#fffbdf',
          200: '#fff8bf',
          300: '#fff49e',
          400: '#fff17d',
          500: '#ffed5c',
          600: '#ffea3b',
          700: '#ffe71a',
          800: '#dbce16',
          900: '#b7b512',
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(5%)', opacity: 0.2 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.8s ease-in-out forwards',
        slideOut: 'slideOut 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
