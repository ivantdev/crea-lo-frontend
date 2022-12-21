import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import InstagramSvg from '../assets/icons/bxl-instagram.svg.svg'
import FacebookSvg from '../assets/icons/bxl-facebook-circle.svg.svg'
import TwitterSvg from '../assets/icons/bxl-twitter.svg.svg'
import YoutubeSvg from '../assets/icons/bxl-youtube.svg.svg'
import SpotifySvg from '../assets/icons/bxl-spotify.svg.svg'
import { Grid } from '@mui/material';
import { Diversity1Sharp } from '@mui/icons-material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    color: "#d1d1d1",
    transition: "all 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    '& > p': {
        fontWeight: 600,
        fontSize: "1.2rem",
    },

    '& > p:hover': {
        color: "#fff",
        cursor: "pointer",
    },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    padding: 0,
    '& .MuiAccordionSummary-content': {
        marginTop: 0,
        marginBottom: 0,
    }
}));

const MenuWrapper = styled('div')(({ theme }) => ({
    /* Position and sizing of burger button */
    '& .bm-burger-button': {
        position: "fixed",
        width: "36px",
        height: "30px",
        right: "36px",
        top: "36px",
    },

    /* Color/shape of burger icon bars */
    '& .bm-burger-bars': {
        background: theme.palette.primary.main
    },

    /* Color/shape of burger icon bars on hover*/
    '& .bm-burger-bars-hover': {
        background: theme.palette.primary.dark
    },

    /* Position and sizing of clickable cross button */
    '& .bm-cross-button': {
        height: "30px !important",
        width: "30px !important",
        background: "white",
        borderRadius: "3px",
    },

    /* Color/shape of close button cross */
    '& .bm-cross': {
        background: theme.palette.primary.main,
        top: "2px !important",
        right: "0px !important",
        height: "16px !important",
    },

    /*
      Sidebar wrapper styles
      Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
      */
    '& .bm-menu-wrap': {
        position: "fixed",
        height: "auto !important",
        top: "20px !important",
        right: "20px !important",
    },

    /* General sidebar styles */
    '& .bm-menu': {
        background: theme.palette.primary.main,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
        height: "auto !important",
        borderRadius: "5px",
    },

    /* Morph shape necessary with bubble or elastic */
    '& .bm-morph-shape': {
        fill: theme.palette.primary.main,
    },

    /* Wrapper for item list */
    '& .bm-item-list': {
        color: "#b8b7ad",
        padding: "0.8em",
        display: "flex",
        flexDirection: "column",
        fontSize: "26px",
        fontWeight: 600,
    },

    /* Styling of overlay */
    '& .bm-overlay': {
        background: "rgba(0, 0, 0, 0.3)"
    },

    /* Individual item */
    '& .bm-item': {
        display: "inline-block",
        color: "#d1d1d1",
        marginBottom: "10px",
        marginTop: "10px",
        textAlign: "left",
        textDecoration: "none",
        transition: "color 0.2s",
    },

    '& .bm-item:hover': {
        color: "#ffffff",
    },

    '& .separator': {
        width: "100%",
        height: "1px",
        backgroundColor: "#d1d1d1",
        margin: "10px 0",
    },

    '& .menu-item': {
        fontWeight: 900
    }

}));

export default props => {

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);

    const handleOnClose = () => {
        // modify animation altering .bm-menu-wrap
        ref.current.querySelector('.bm-menu-wrap').style.transform = "translate3d(calc(100% + 20px), 0px, 0px)";
        ref.current.querySelector('.bm-menu-wrap').style.opacity = "0";
        setOpen(false);
    }

    const handleOnOpen = () => {
        // modify animation altering .bm-menu-wrap
        ref.current.querySelector('.bm-menu-wrap').style.opacity = "1";
        setOpen(true);
    }


    return (
        <MenuWrapper ref={ref}>
            <Menu {...props} isOpen={open} onOpen={handleOnOpen} onClose={handleOnClose}>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{
                            fontSize: '26px',
                            fontWeight: 900,
                            display: "inline-block",
                            color: "#d1d1d1",
                            textAlign: "left",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            '&:hover': {
                                color: "#ffffff",
                            }
                        }} my={0}>Lorem ipsum</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography onClick={() => navigate("/pedagogies")}>Pedagogías</Typography>
                        <Typography onClick={() => navigate("/fragments")}>Fragmentos</Typography>
                        <Typography onClick={() => navigate("/atlas")}>Atlas</Typography>
                        <Typography onClick={() => navigate("/credits")}>Créditos</Typography>
                    </AccordionDetails>
                </Accordion>


                <hr className="separator" />
                <Link className="menu-item" to="/desahogo">
                    Desahogo
                </Link >
                <hr className="separator" />
                <Link className="menu-item" to="/creciente">
                    Creciente
                </Link >
                <hr className="separator" />
                {/* svgs of social media with links */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <div>
                        <a href="https://www.youtube.com/channel/UCY0YQZ0ZQZ1Z1Z1Z1Z1Z1Z1" target="_blank" rel="noreferrer">
                            <img src={YoutubeSvg} alt="youtube" />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/creciente_mx" target="_blank" rel="noreferrer">
                            <img src={TwitterSvg} alt="twitter" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/creciente.mx" target="_blank" rel="noreferrer">
                            <img src={FacebookSvg} alt="facebook" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/creciente.mx/" target="_blank" rel="noreferrer">
                            <img src={InstagramSvg} alt="instagram" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.spotify.com/mx/" target="_blank" rel="noreferrer">
                            <img src={SpotifySvg} alt="spotify" />
                        </a>
                    </div>
                </div>

            </Menu>
        </MenuWrapper >
    );
};