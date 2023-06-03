import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } })
import home_1 from "../assets/images/Home 1.jpg"
import home_2 from "../assets/images/Home 2.jpg"
import home_3 from "../assets/images/Home 3.jpg"
import home_4 from "../assets/images/Home 4.jpg"
import home_5 from "../assets/images/Home 5.jpg"
import pedagogias_background from "../assets/images/pedagogias_background.png"

// This function is used to generate the theme based on the mode and location
// The mode is not being used, but it is there for future use
const backgroundUrls = [
    // BG 1
    {
      backgroundImage: `url('${home_1}')`,
    },
    // BG 2
    {
      backgroundImage: `url('${home_2}')`,
    },
    // BG 3
    {
      backgroundImage: `url('${home_3}')`,
    },
    // BG 4
    {
      backgroundImage: `url('${home_4}')`,
    },
    // BG 5
    {
      backgroundImage: `url('${home_5}')`,
    },
]
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
            backgroundUrls[0],
            backgroundUrls[1],
            backgroundUrls[2],
            backgroundUrls[3],
            backgroundUrls[4],
        ]
        const text = [
            '#57508d',
            '#444444',
            '#555555',
            '#B54135',
            '#000000',
        ]
        const mixBlendMode = [
            "difference",
            "hard-light",
            "difference",
            "hard-light",
            "difference",
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
                paper: mode === 'light' ? '#CBD8DF' : '#CBD8DF',
                image: location === '/pedagogies' ? {
                    backgroundImage: `url('${pedagogias_background}')`,
                } : undefined,
                mixBlendMode: "difference",
                special: location === '/pedagogies' ? '#a3c1b3' : undefined,
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

        // -------------------- preload next background image

        // URL de la siguiente imagen a precargar
        const idx = (homeIndexPalette + 1) % backgroundUrls.length;
        const nextImageURL = backgroundUrls[idx].backgroundImage.split("'")[1];

        // Crear una nueva instancia de Image
        const nextImage = new Image();

        // Asignar la URL de la siguiente imagen a precargar
        nextImage.src = nextImageURL;

        // Opcionalmente, puedes agregar un evento de carga para realizar acciones después de que la imagen se haya precargado
        nextImage.addEventListener('load', () => {
            console.log('La siguiente imagen se ha precargado.');
        });

        
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

