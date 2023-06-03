import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })
import fondo_18 from "../assets/images/fondos-18.jpeg"
import fondo_14 from "../assets/images/fondos-14.jpeg"
import fondo_5 from "../assets/images/fondos-5.jpeg"

// This function is used to generate the theme based on the mode and location
// The mode is not being used, but it is there for future use
const getDesignTokens = (mode, location, homeIndex) => {
    if (location == '/') {
        const primary = [
            '#CBD8DF',
            '#CBD8DF',
            '#CBD8DF',
            '#CBD8DF',
            '#CBD8DF',

        ]
        const background = [
            '#C0BFE1',
            '#ffbaba',
            '#FFC8C8',
            '#101010',
            '#7b7b7b',

        ]
        const backgroundPaper = [
            '#CBD8DF',
            '#93D9FF',
            '#F2B6B6',
            '#000000',
            '#402020',
        ]
        const backgroundImage = [
            `url('${fondo_18}')`,
            `url('${fondo_18}')`,
            `url('${fondo_14}')`,
            `url('${fondo_5}')`,
            `url('${fondo_5}')`,
        ]
        const text = [
            '#57508d',
            '#444444',
            '#555555',
            '#B54135',
            '#FFFFFF',
        ]
        const mixBlendMode = [
            "difference",
            "hard-light",
            "difference",
            "hard-light",
            "color-burn",
        ]

        return {
            palette: {
                mode,
                primary: {
                    main: primary[homeIndex] || '#CBD8DF',
                },
                background: {
                    default: background[homeIndex] || '#CBD8DF',
                    paper: backgroundPaper[homeIndex] || '#CBD8DF',
                    image: backgroundImage[homeIndex] || '#CBD8DF',
                    mixBlendMode: mixBlendMode[homeIndex] || 'normal',
                },
                text: {
                    primary: text[homeIndex] || '#57508d',
                    hover: '#000000',
                },
            },
            typography: {
                fontFamily: [
                    'Inter',
                    'sans-serif',
                ].join(','),
            }
        }
    }

    return {
        palette: {
            mode,
            primary: {
                main: location === '/' ? '' 
                : location === '/fragments' ? '#CBD8DF' 
                : location === '/pedagogies' ? '#015958' 
                : location === '/atlas' ? '#CBD8DF'
                : '#298073',
            },
            background: {
                default: mode === 'light' ? '#CBD8DF' : '#CBD8DF',
                paper: mode === 'light' ? '#3F5759' : '#CBD8DF',
                special: location === '/pedagogies' ? '#163133' : undefined,
                location,
            },
            text: {
                primary: location === '/' ? '#015958' 
                : location === '/fragments' ? '#275673' 
                : location === '/pedagogies' ? '#ffffff' 
                : location === '/atlas' ? '#298073' 
                : '#298073',
            }
        },
        typography: {
            fontFamily: [
                'Inter',
                'sans-serif',
            ].join(','),
        }
    }
};

export default function ThemeContextProvider({ children }) {
    const [mode, setMode] = React.useState('light');
    const [homeIndexPalette, setHomeIndexPalette] = React.useState(0);
    const location = useLocation();
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'light' : 'light'));
        },
    }), [],
    );
    const theme = React.useMemo(() => {
        let tempTheme = createTheme(getDesignTokens(mode, location.pathname, homeIndexPalette))
        tempTheme = responsiveFontSizes(tempTheme)
        
        return tempTheme
    }, [mode, location, homeIndexPalette]);

    useEffect(() => {
        if (!theme) return
        if (location.pathname !== '/') {
            document.body.style.background = theme.palette.background.default
        } else {
            document.body.style.background = "unset"
        }
    }, [location, theme])

    return (
        <ColorModeContext.Provider value={{colorMode, mode, homeIndexPalette, setHomeIndexPalette, theme}}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    {children}
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

