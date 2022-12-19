import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        home: {
            main: mode === 'light' ? '#015958' : '#015958',
            contrastText: mode === 'light' ? '#4E7329' : '#4E7329',
        },
        fragments: {
            main: mode === 'light' ? '#275673' : '#275673',
            contrastText: mode === 'light' ? '#275673' : '#275673',
        },
        background: {
            default: mode === 'light' ? '#E9EFF2' : '#E9EFF2',
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

