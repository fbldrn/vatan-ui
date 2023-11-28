// @type {import('tailwindcss').Config}
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
    ],
    theme: {
      extend: {
        backgroundColor: ({
          'brand-color': '#437db9'
        }),
        colors : ({
          'blue-font': '#007aff',
          'normal-font': '6d6d6d'
        })
      },
    },
    plugins: [],
  }