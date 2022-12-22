import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';
import React from 'react';
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

// This function is used to generate the theme based on the mode and location
// The mode is not being used, but it is there for future use
const getDesignTokens = (mode, location) => ({
    palette: {
        mode,
        primary: {
            main: location === '/' ? '#015958' : location === '/fragments' ? '#275673' : location === '/pedagogies' ? '#015958' : location === '/atlas' ? '#298073' : '#298073',
        },
        background: {
            default: mode === 'light' ? '#E9EFF2' : '#E9EFF2',
            paper: mode === 'light' ? '#E9EFF2' : '#E9EFF2',
        },
        text: {
            primary: location === '/' ? '#015958' : location === '/fragments' ? '#275673' : location === '/pedagogies' ? '#015958' : location === '/atlas' ? '#298073' : '#298073',
        }
    },
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    }
});

export default function ThemeContextProvider({ children }) {
    const [mode, setMode] = React.useState('light');
    const location = useLocation();
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), [],
    );
    const theme = React.useMemo(() => {
        let tempTheme = createTheme(getDesignTokens(mode, location.pathname))
        tempTheme = responsiveFontSizes(tempTheme)
        return tempTheme
    }, [mode, location]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

