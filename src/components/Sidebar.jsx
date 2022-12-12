import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import '../css/Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: `${theme.palette.background.paper}`,
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


export default props => {

    const navigate = useNavigate();
    return (
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
    );
};