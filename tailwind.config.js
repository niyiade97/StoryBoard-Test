module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '95': '95%',
        '5p': "5%",
        "600": "600px",
        "400": "400px"
      },
      minWidth: {
        '1024': '1024px',
      },
      maxWidth: {
        '2000': '2000px',
      },
      colors: {
        'color1': '#E7E6E6',
        'color2': 'rgba(24, 24, 27, 0.92)',
        'color3': '#181818',
        'color4': '#F2F2F2',
        'color5': '#9C9898',
        'color6': '#F9F9F9',
        "color7": "rgba(24, 24, 24, 0.52)",
        "color8" : "#828282",
        "color9": "rgba(24, 24, 24, 0.24)",
        "color10": "#ECECEC",
        'primary': "#F6B319",
        "color11": "rgba(24, 24, 24, 0.52)",
        "color12": "rgba(237, 28, 37, 0.32)",
        "color14": "#ED1C25",
        "color15": "#767171",
        "color16": "#B5B5B6",
        "color17": "#CCCCCD",
        "color18": "rgba(24, 24, 24, 0.72)"
      },
      boxShadow: {
        'custom-shadow': '0px 1px 2px rgba(128, 128, 128, 0.1)'
      },
      margin: {
        '300': '-300px',
        '200': '-200px',
        '1.5': '-1.5px',
        '47.5': '-47.5%'
      }
    },
  },
  plugins: [],
}
