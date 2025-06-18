/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#151515",
        "secondary": "#4ee1a0",
        "dark-gray":"#242424",
        "light-gray":"#d9d9d9"
      },
      backgroundImage: {
        'pic-mobile': "url('/images/pic3.png')",
        'pic-tablet': "url('/images/pic4.png')",
      },
      fontSize: {
        "xlg": ["88px", {
          lineHeight: '88px',
          letterSpacing: '-2.5px',
        }],
        "lg": ["48px", {
          lineHeight: '56px',
          letterSpacing: '-1.5px',
        }],
        "md": ["24px", "32px"],
        "body-text": ["18px", "28px"]
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
