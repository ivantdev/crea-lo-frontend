import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import '../css/Sidebar.css';
import { useNavigate } from 'react-router-dom';

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
    justifyContent: "center",
    alignItems: "center",
    '& > p:hover': {
        color: "#fff",
        cursor: "pointer",
    },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
        justifyContent: 'center',
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
    'bm-cross-button': {
        height: "24px",
        width: "24px"
    },

    /* Color/shape of close button cross */
    '& .bm-cross': {
        background: theme.palette.background.paper
    },

    /*
      Sidebar wrapper styles
      Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
      */
    '& .bm-menu-wrap': {
        position: "fixed",
        height: "100%",
    },

    /* General sidebar styles */
    '& .bm-menu': {
        background: theme.palette.primary.main,
        padding: "2.5em 1.5em 0",
        fontSize: "1.15em",
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
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
    },

    /* Individual item */
    '& .bm-item': {
        display: "inline-block",
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
    }

}));

export default props => {

    const navigate = useNavigate();
    return (
        <MenuWrapper>
            <Menu {...props}>
                <Link className="menu-item" to="/">
                    Home
                </Link>
                <hr className="separator" />

                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className="bm-item" sx={{
                            fontSize: '26px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>2022</Typography>
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
            </Menu>
        </MenuWrapper>
    );
};