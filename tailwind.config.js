/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];

export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      green: {
        50: '#30AF5B',
        90: '#292C27',
      },
      gray: {
        10: '#EEEEEE',
        20: '#A2A2A2',
        30: '#7B7B7B',
        50: '#585858',
        90: '#141414',
      },
      orange: {
        50: '#FF814C',
      },
      blue: {
        70: '#021639',
      },
      yellow: {
        50: '#FEC601',
      },
      primary: "#f06332",
      secondary: "#ffbd00",
      dark: "#2c2e3c",
      lightdark: "#6c8ead",
      glass: "rgba(255,255,255,0.25)",
      brown: "rgb(30. 30, 17)",
      darkbrown: "#433e0e",
      light: "#a8f9ff",
      celeste: "#a8f9ff",
    },
    borderColor: {
      primary: "#f06332",
      secondary: "#ffbd00",
      celeste: "#a8f9ff",
      light: "#a8f9ff",
    },
    textColor: {
      iconprimary: "#f06332",
      iconlight: "#a8f9ff",
      icondark: "#2c2e3c",
      lightdark: "#6c8ead",
    },
    backgroundImage: {
      back: "url(./assets/background.jpg)",
      'bg-img-1': "url('/img-1.png')",
      'bg-img-2': "url('/img-2.png')",
      'feature-bg': "url('/feature-bg.png')",
      pattern: "url('/pattern.png')",
      'pattern-2': "url('/pattern-bg.png')",
    },
    screens: {
      xs: '400px',
      '3xl': '1680px',
      '4xl': '2200px',
    },
    maxWidth: {
      '10xl': '1512px',
    },
    borderRadius: {
      '5xl': '40px',
    },
    // backgroundImage: {
    //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //   'gradient-conic':
    //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    // },
  },
};
export const plugins = [];
