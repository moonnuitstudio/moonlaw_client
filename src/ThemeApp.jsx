import { createTheme } from "@mui/material/styles";

const ThemeApp = createTheme({
    palette: {
        background: {
          default: "#F2E9E4"
        },
        primary: {
            main: '#22223B',
        },
        secondary: {
            main: '#4A4E69',
        },
        darkest: {
            main: '#1E1E1E',
        },
        light1: {
            main: '#9A8C98',
        },
        light2: {
            main: '#C9ADA7',
        },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '.8rem',
            fontWeight: 700,
            padding: "8px 30px",
            "&.active": {
              background: 'rgba(154,140,152, 0.1)',
            },
            "&.dark-1": {
              background: "var(--dark-1-color)",
            },
            "&.dark-2": {
              background: "var(--dark-2-color)",
            },
            "&.txt-dark-1": {
              color: "var(--dark-1-color)",
              '&.opacity-5': {
                color: "rgba(34,34,59,.5)",
              },
              "&:hover": {
                background: 'rgba(154,140,152, 0.1)',
              }
            }
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& input': {
              paddingBottom: '15px',
              paddingTop: '15px',
              fontSize: '16px',
              fontFamily: "'Roboto', sans-serif",
              color: 'black',
              fontWeight: 300,
            },
            '& fieldset': {
              borderRadius: '5px',
            }
          }
        }
      }
    }
});

ThemeApp.typography.h1 = {
  fontSize: '35px',
  textTransform: 'uppercase',
  fontFamily: "'Montserrat', sans-serif",
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '2.4rem',
  // },
};

ThemeApp.typography.h2 = {
  fontSize: '28px',
  textTransform: 'uppercase',
  fontFamily: "'Montserrat', sans-serif",
};

ThemeApp.typography.h6 = {
  fontSize: '18px',
  fontFamily: "'Roboto', sans-serif",
};

export default ThemeApp;