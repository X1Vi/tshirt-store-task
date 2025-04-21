// theme.js
export const lightTheme = {
  colors: {
    primary: '#ff9900',
    secondary: '#f5f5f5', // light gray for subtle contrast
    text: '#000000',       // black text
    hover: '#cc7a00',      // slightly darker for hover effect
    background: '#ffffff', // pure white
  },
  fontSizes: {
    large: '2rem',
    medium: '1.2rem',
    small: '1rem',
  },
  fontWeights: {
    bold: 'bold',
    normal: 'normal',
  },
  spacing: {
    verysmall: "3px",
    medium: '20px',
    large: '20px',
  },
};

export const darkTheme = {
  colors: {
    primary: '#ff9900',
    secondary: '#333333', // dark gray to contrast with background
    text: '#ffffff',       // white text
    hover: '#cc7a00',      // slightly darker than primary
    background: '#000000', // pure black
  },
  fontSizes: {
    large: '2rem',
    medium: '1.2rem',
    small: '1rem',
  },
  fontWeights: {
    bold: 'bold',
    normal: 'normal',
  },
  spacing: {
    verysmall: "3px",
    small: '10px',
    medium: '20px',
    large: '20px',
  },
};

export default { lightTheme, darkTheme };
