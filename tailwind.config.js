module.exports = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E35640',
        secondary: '#3F0D12',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        success: '#4CAF50',
        'grid-color': '#FF0000',
      },
      letterSpacing: {
        wide: '0.15em',
      },
      screens: {
        xl: { max: '1380px' },
        lg: { max: '1024px' },
        md: { max: '768px' },
        sm: { max: '640px' },
        xs: { max: '420px' },
      },
    },
  },
  plugins: [],
};
