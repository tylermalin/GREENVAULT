/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design System Colors
        charcoal: '#1F1F1F',
        'light-gray': '#CCCCCC',
        'green-accent': '#A2E83D',
        'gold-highlight': '#FFD966',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.5', fontWeight: '700' }],
        'h1-mobile': ['32px', { lineHeight: '1.5', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.5', fontWeight: '600' }],
        'h2-mobile': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.5', fontWeight: '600' }],
        'h3-mobile': ['18px', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'body-mobile': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        'section-padding': '80px',
        'section-padding-mobile': '40px',
        'column-gutter': '40px',
        'column-gutter-mobile': '20px',
        'card-padding': '24px',
        'section-margin': '60px',
        'section-margin-mobile': '30px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0px 4px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0px 6px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
