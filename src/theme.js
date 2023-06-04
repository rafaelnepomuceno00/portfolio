import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
          main: '#99A799',
          contrastText: '#FAF3F3',
        },
        secondary: {
          main: '#D3E4CD',
        },
        background: {
          default: '#FEF5ED',
          paper: '#D3E4CD',
        },
      },
});

export default theme