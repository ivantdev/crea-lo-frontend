import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        primary: {
            main: mode === 'light' ? '#556cd6' : '#19857b',
            contrastText: mode === 'light' ? '#000' : '#fff',
        },
        secondary: {
            main: mode === 'light' ? '#19857b' : '#19857b',
            contrastText: mode === 'light' ? '#fff' : '#fff',
        },
        background: {
            paper: mode === 'light' ? '#6526d6' : '#6526d6',
        }
    },
});

export default function ThemeContextProvider({ children }) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), [],
    );
    const theme = React.useMemo(() => {
        let tempTheme = createTheme(getDesignTokens(mode))
        tempTheme = responsiveFontSizes(tempTheme)
        return tempTheme
    }, [mode]);

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

