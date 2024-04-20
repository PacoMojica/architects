import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'animate-enterLeft',
    'animate-enterRight',
    'animate-exitLeft',
    'animate-exitRight',
    'animate-exitBottom',
    'animate-parallaxLeft',
    'animate-parallaxRight',
    'animate-panLeft',
    'animate-panRight',
    'animate-fadeIn',
    'animate-fadeOut',
    'animate-fromLeft',
    'animate-fromRight',
    'animate-fromTop',
    'animate-fromBottom',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)'],
        mono: ['var(--font-source-mono)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'slide1': 'url(../../public/images/slider/pexels-pixabay-327482.jpg)',
      },
      keyframes: {
        collapse: {
          '0%': { 'height': 'auto' },
          '100%': { 'height': '0' },
        },
        enterLeft: {
          '0%': { 'left': '0' },
          '50%': { 'left': '20%', 'filter': 'brightness(0.35)' },
          '100%': { 'left': '0', 'filter': 'brightness(1)' },
        },
        enterRight: {
          '0%': { 'right': '0' },
          '50%': { 'right': '20%', 'filter': 'brightness(0.35)' },
          '100%': { 'right': '0', 'filter': 'brightness(1)' },
        },
        exitLeft: {
          '0%': { 'width': '100%', 'right': '0', 'filter': 'brightness(1)' },
          '100%': { 'width': '0', 'right': '100%', 'filter': 'brightness(0.35)' },
        },
        exitRight: {
          '0%': { 'width': '100%', 'left': '0', 'filter': 'brightness(1)' },
          '100%': { 'width': '0', 'left': '100%', 'filter': 'brightness(0.35)' },
        },
        parallaxLeft: {
          '0%': { 'width': '0', 'right': '0' },
          '50%': { 'width': '100%', 'right': '0' },
          '100%': { 'width': '0', 'right': '100%' },
        },
        parallaxRight: {
          '0%': { 'width': '0', 'left': '0' },
          '50%': { 'width': '100%', 'left': '0' },
          '100%': { 'width': '0', 'left': '100%' },
        },
        panLeft: {
          '0%': { 'transform': 'translate(0, 0%)' },
          '50%': { 'transform': 'translate(25%, 2%)' },
          '100%': { 'transform': 'translate(0, -2%)' },
        },
        panRight: {
          '0%': { 'transform': 'translate(0)' },
          '50%': { 'transform': 'translate(25%, -2%)' },
          '100%': { 'transform': 'translate(0, 2%)' },
        },
        fadeIn: {
          '0%': { 'opacity': '0' },
          '100%': { 'opacity': '1' },
        },
        fadeOut: {
          '0': { 'opacity': '1' },
          '100%': { 'opacity': '0' },
        },
        fromLeft: {
          '0%': { 'transform': 'translate(-80%)', 'opacity': '0' },
          '100%': { 'transform': 'translate(0)', 'opacity': '1' },
        },
        fromRight: {
          '0%': { 'transform': 'translate(80%)', 'opacity': '0' },
          '100%': { 'transform': 'translate(0)', 'opacity': '1' },
        },
        fromTop: {
          '0%': { 'transform': 'translate(0, -80%)', 'opacity': '0' },
          '100%': { 'transform': 'translate(0)', 'opacity': '1' },
        },
        fromBottom: {
          '0%': { 'transform': 'translate(0, 80%)', 'opacity': '0' },
          '100%': { 'transform': 'translate(0)', 'opacity': '1' },
        },
        exitBottom: {
          '0': { 'transform': 'translate(0)' },
          '100%': { 'transform': 'translate(0, 125%)' },
        },
      },
      animation: {
        enterLeft: 'enterLeft 2s ease-in-out forwards',
        enterRight: 'enterRight 2s ease-in-out forwards',
        exitLeft: 'exitLeft 2s ease forwards',
        exitRight: 'exitRight 2s ease forwards',
        exitBottom: 'exitBottom 0.1s linear forwards',
        parallaxLeft: 'parallaxLeft 2s linear forwards',
        parallaxRight: 'parallaxRight 2s linear forwards',
        panLeft: 'panLeft 24s ease infinite',
        panRight: 'panRight 24s ease infinite',
        fadeIn: 'fadeIn 0.66s ease-in-out forwards',
        fadeOut: 'fadeOut 0.66s ease-in-out forwards',
        fromLeft: 'fromLeft 0.66s ease-in-out',
        fromRight: 'fromRight 0.66s ease-in-out',
        fromTop: 'fromTop 0.66s ease-in-out',
        fromBottom: 'fromBottom 0.66s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
