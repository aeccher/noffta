/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'header-texture': "url('/img/Header.webp')",
        'footer-texture': "url('/img/Footer.webp')",
        'tuto-texture': "url('/img/tuto-texture.png')",
        'newsletter': "url('/img/newsletter.png')",
        'looper': "url('/img/Looper-dk.png')",
        'bouton-sign': "url('/img/Button-sign.png')",
        'map-barcelone': "url('/img/map-barcelone.png')",
        'bouton-generator': "url('/img/Button-generator.png')",
        'bouton-generator1': "url('/img/Button-generator1.png')",
      },
      backdropBlur: {
        xs: '20px',
      },
      "colors": {
        "mauve": "#b00d9d",
        "rose": "#f81dfb",
        "violet": "#9a6aff",
        "gris-text": "#96839b",
        "fond site": "#140c1f",
        "blanc-text": "#ffffff",
        "violet-casse": "#e0d1ff",
        "violet-profil": '#4B50E6',
        "gris-clair": "#e2e2e2",
        "orange": "#FC6767",
        "fond-site": "#140C1F",
        "fond-profil": "#3D3D3D",
        "vermillon": "#EB1484",
      },
      "fontSize": {
        "sm": "0.875rem",
        "base": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "2xl": "4rem",
        "3xl": "6.25rem"
      },
      "fontFamily": {
        "nunito-sans": "Nunito Sans",
        "lato": "Lato",
      },
      "boxShadow": {
        "néon-components/néon-pink": "-2px 2.5px 0px 0px rgba(248,29,251,1)",
        "néon-text/néon-text-white": "-1px 1.5px 0px 0px rgba(255,255,255,1)",
        "néon-text/néon-text-pink": "-1px 1.5px 0px 0px rgba(248,29,251,1)",
        "drop/drop-pink": "4px 6px 84px 0px rgba(236,0,140,1)",
        "drop/drop-white": "4px 6px 84px 0px rgba(255,255,255,1)",
        "drop/drop-white-s": "0px 0px 40px 5px rgba(255,255,255,1)"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.0833333358168602rem",
        "sm": "0.125rem",
        "default": "0.15000000596046448rem",
        "lg": "0.1666666716337204rem",
        "xl": "0.3125rem",
        "2xl": "0.375rem",
        "3xl": "0.4375rem",
        "4xl": "0.5rem",
        "5xl": "0.5625rem",
        "6xl": "0.625rem",
        "7xl": "0.6875rem",
        "8xl": "0.75rem",
        "9xl": "0.8125rem",
        "10xl": "0.875rem",
        "11xl": "0.9375rem",
        "12xl": "1rem",
        "13xl": "1.125rem",
        "14xl": "1.1875rem",
        "15xl": "1.25rem",
        "16xl": "1.3125rem",
        "17xl": "1.3301281929016113rem",
        "18xl": "1.375rem",
        "19xl": "1.4375rem",
        "20xl": "1.5625rem",
        "21xl": "1.596153736114502rem",
        "22xl": "1.625rem",
        "23xl": "1.6875rem",
        "24xl": "1.75rem",
        "25xl": "1.875rem",
        "26xl": "1.9375rem",
        "27xl": "2rem",
        "28xl": "2.0625rem",
        "29xl": "2.1875rem",
        "30xl": "2.25rem",
        "31xl": "2.375rem",
        "32xl": "2.5rem",
        "33xl": "2.5625rem",
        "34xl": "2.6875rem",
        "35xl": "2.8125rem",
        "36xl": "2.9375rem",
        "37xl": "3rem",
        "38xl": "3.125rem",
        "39xl": "3.1875rem",
        "40xl": "3.25rem",
        "41xl": "4.375rem",
        "42xl": "4.4375rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}