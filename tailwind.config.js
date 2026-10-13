/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Token names are unchanged from the previous build — only the values
      // in index.css move, so the whole site re-skins from one place.
      colors: {
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        navy: 'rgb(var(--c-navy) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--c-brand) / <alpha-value>)',
          dark: 'rgb(var(--c-brand-dark) / <alpha-value>)',
          50: 'rgb(var(--c-brand-50) / <alpha-value>)',
        },
        lime: 'rgb(var(--c-lime) / <alpha-value>)',
        grey: {
          50: 'rgb(var(--c-grey-50) / <alpha-value>)',
          100: 'rgb(var(--c-grey-100) / <alpha-value>)',
          200: 'rgb(var(--c-grey-200) / <alpha-value>)',
          400: 'rgb(var(--c-grey-400) / <alpha-value>)',
          500: 'rgb(var(--c-grey-500) / <alpha-value>)',
          800: 'rgb(var(--c-grey-800) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Lora', 'Georgia', 'serif'],
      },
      // These two were referenced across the site but never defined, so they
      // silently did nothing before.
      letterSpacing: {
        tighter: '-0.02em',
        tightest: '-0.045em',
        luxe: '0.22em',
      },
      maxWidth: {
        container: '78rem',
        prose: '46rem',
      },
      boxShadow: {
        luxe: '0 1px 2px rgb(24 22 18 / 0.05), 0 10px 30px -12px rgb(24 22 18 / 0.12)',
        'luxe-lg': '0 2px 4px rgb(24 22 18 / 0.05), 0 28px 70px -24px rgb(24 22 18 / 0.22)',
        'luxe-xl': '0 48px 120px -40px rgb(24 22 18 / 0.34)',
        gold: '0 14px 34px -14px rgb(var(--c-brand) / 0.55)',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.22, 1, 0.36, 1)',
        smooth: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { transform: 'translateX(-140%)' },
          to: { transform: 'translateX(240%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 42s linear infinite',
        shimmer: 'shimmer 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
