import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import PdfViewer from "../components/PdfViewer";
import pdfGritoGrieta from "../assets/pdfs/Grito g-rito gri(e)ta.pdf";
import pdfMemorias from "../assets/pdfs/Memoria Crea-lo 2020-2022 .pdf";
import desahogo_background from "../assets/images/desahogo_background.jpg";
import "../css/DesahogoScreen.css"

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "2rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const MemoriasScreen = () => {
  const styleTypography = {
    margin: "2rem 0",
    fontWeight: "500",
  };

  return (
      <Container style={{ minHeight: "100vh", padding: "0"}}>
        <div style={{ 
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url('${desahogo_background}')`,
          
          }}></div>
        <Container style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem" }}>
          <Typography variant="h3" sx={{fontWeight: "600"}}>Memorias Crea-lo</Typography>
          <Container
            style={{
              padding: "2rem 0",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography}}>
              Memorias Natalia Orozco - PDF
            </Typography>
            <PdfViewer file={ pdfMemorias } doublePage={false} />
            
            <Typography variant="h4" sx={{...styleTypography}}>
              Grito (G)rito Gri(e)ta - PDF
            </Typography>
            <PdfViewer file={ pdfGritoGrieta } doublePage={false} />
          </Container>
        </Container>
      </Container>
  );
};

export default MemoriasScreen;
