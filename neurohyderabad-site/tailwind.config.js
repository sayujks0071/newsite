/**
 * Tailwind configuration for the NeuroHyderabad site.
 *
 * The colour palette is tuned for a crisp medical feel: deep navy for primary
 * branding and teal accents. Feel free to adjust these values to match your
 * branding guidelines. Content scanning is restricted to the src/ directory to
 * remove unused classes in production.
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#002a4e',
          light: '#006494',
          dark: '#001d35',
        },
        accent: {
          DEFAULT: '#00707c',
        },
      },
    },
  },
  plugins: [],
};