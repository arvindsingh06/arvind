/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'universe-float': 'universeFloat 8s ease-in-out infinite',
        'star-move': 'starMove 12s linear infinite',
        'star-blink': 'starBlink 3s ease-in-out infinite',
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'shooting-star': 'shootingStar 3s ease-out infinite',
        'constellation-draw': 'constellationDraw 3s ease-out forwards',
        'cosmic-drift': 'cosmicDrift 10s ease-in-out infinite',
        'profile-glow': 'profileGlow 3s ease-in-out infinite',
        'gradient-text': 'gradientText 5s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        universeFloat: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        starMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--move-x), var(--move-y))' },
        },
        starBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        starTwinkle: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shootingStar: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '1' },
          '100%': { transform: 'translateX(300px) translateY(300px)', opacity: '0' },
        },
        constellationDraw: {
          '0%': { 'stroke-dashoffset': '100', opacity: '0' },
          '100%': { 'stroke-dashoffset': '0', opacity: '1' },
        },
        cosmicDrift: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(30px, 20px) rotate(180deg)' },
        },
        profileGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        gradientText: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
