import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Gallery from "../components/Gallery";
import PdfViewer from "../components/PdfViewer";
import pdfDesahogo from "../assets/pdfs/Desahogo-21-11-22-bajaWebpages.pdf";
import desahogo_background from "../assets/images/desahogo_background.jpg";
import "../css/DesahogoScreen.css"
import logo_crealo from "../assets/Crealo logo png 1.png";
import escudo from "../assets/escudo.png";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "2rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const DesahogoScreen = () => {
  const theme = useTheme();

  const integrantes_2022_1 = [
  ];

  const integrantes_2022_3 = [
  ];

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
          <Typography variant="h3" sx={{fontWeight: "600"}}>Desahogo</Typography>
          <Container   style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}>
              <p className="parrafo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, vero soluta deserunt animi hic eos consequuntur quae maiores magni consectetur quod dolor tempore quasi dolorum non beatae unde reprehenderit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit laboriosam libero, nisi voluptatum dolorem iure ratione at ipsum perspiciatis incidunt architecto quasi, quia, voluptates saepe iusto necessitatibus et nesciunt.
              </p>
          </Container>
          <Container
            style={{
              padding: "2rem 0",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography}}>
              Fotografías
            </Typography>

            <Gallery imageUrls=
              {[
                "https://picsum.photos/seed/picsum/2500/1667/",
                "https://picsum.photos/seed/1/2500/1667/",
                "https://picsum.photos/seed/2/2500/1667/",
                "https://picsum.photos/seed/3/2500/1667/",
                "https://picsum.photos/seed/4/2500/1667/",
                "https://picsum.photos/seed/5/2500/1667/",
                "https://picsum.photos/seed/6/2500/1667/",
                "https://picsum.photos/seed/7/2500/1667/",
                "https://picsum.photos/seed/8/2500/1667/",
                "https://picsum.photos/seed/9/2500/1667/",
              ]}
              styles={{ margin: "2rem 0" }}
            />
            <Typography variant="h4" sx={{...styleTypography}}>
              Edición en PDF
            </Typography>
            <PdfViewer file={ pdfDesahogo } />
          </Container>

        </Container>
        <Container
          className="credits-generic"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            width: "100%",
          }}
        >
          <Container
            style={{
              maxWidth: "1000px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              flexDirection: "column",
              color: "#A3C9D9",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography}}>
              Créditos
            </Typography>
            <div className="creditos-screen ml-15" style={{ maxWidth: "1200px", textAlign: "left"}}>
              <header className="mt-3">
                <h2 className="m-0">MEMORIAS</h2>
                <h3 className="m-0">Proyecto:</h3>
              </header>

              <div className="description mt-3">
                <p style={{ fontSize: "1.2em"}}><span className="bold">CREA-LO</span> OTROS MUNDOS POSIBLES EN LA UNAL </p>
                <p>Laboratorios, talleres y experiencias para el activismo cultural universitario.</p>
                <p>2022</p>
              </div>

              <div className="grid-2 grid-end gap-2">
                <div>
                  <div className="parrafo bold">
                    <p>Universidad Nacional de Colombia</p>
                    <p>Vicerrectoría de Sede Bogotá</p>
                    <p>Dirección de Bienestar Universitario</p>
                    <p>División de Cultura</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Directora Bienestar Universitario </p>
                    <p className="bold">Sede Bogotá </p>
                    <p>Yuly Edith Sánchez</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Jefe División de Cultura</p>
                    <p>Nicolás Zorro</p>
                  </div>
                  <div className="parrafo bold">
                    <p>Proyecto “Crea-lo: otros mundos </p>
                    <p>posibles en la UNAL”</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Coordinación general</p>
                    <p>Diego García Bernal</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Acompañamiento sensible</p>
                    <p>Rafael Duarte Uriza</p>
                    <p>María Natscheilly Torres</p>
                    <p>Natalia Orozco Lucena</p>
                    <p>Mateo Mejía Mejía</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Diseño visual</p>
                    <p>Martin Gabriel Castaño Hincapié - Martirio</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Estudiantes asistentes del proyecto</p>
                    <p>Sofía Jaime Pacheco</p>
                    <p>José David Castañeda García</p>
                    <p>Lina Constanza Mejía Ramírez</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Mediación pedagógica y cultural</p>
                    <p>Bibiana Carvajal Bernal</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Estudiantes asistentes de mediación pedagógica y cultural</p>
                    <p>William Felipe Rodríguez Castañeda</p>
                    <p>Santiago Sarmiento Mora</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Coordinación y conceptualización editorial</p>
                    <p>Guadalupe Errázuriz</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Diseño y desarrollo web</p>
                    <p>Erick Santiago Díaz Bueno</p>
                    <p>Sebastián Castañeda García</p>
                    {/* <p>Nelson Ivan Castellanos Betancourt</p> */}
                  </div>
                  <div className="parrafo">
                    <p className="bold">Diagramación y diseño gráfico </p>
                    <p>Juan Mojica — Publicaciones La Sorda</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Profesoras y profesores invitados</p>
                    <p>Angie Andrea Rodríguez — Rosil</p>
                    <p>María Fernanda Vanegas</p>
                    <p>José Francisco Álvarez Morales</p>
                    <p>Wiñay Mallky — Fredy Chikangana</p>
                    <p>Adalid R. Rodríguez</p>
                    <p>Danna Luz Ordóñez Arias</p>
                    <p>Andrés Forero -HEREJE-</p>
                    <p>Alexander Caicedo -W4CO-</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Comité editorial</p>
                    <p>Sofía Jaime Pacheco</p>
                    <p>José David García Castañeda</p>
                    <p>Lina Constanza Mejía Ramírez</p>
                    <p>Martín Gabriel Castaño Hincapié</p>
                    <p>Diego García Bernal</p>
                    <p>Mateo Mejía Mejía</p>
                    <p>Guadalupe Errázuriz</p>
                    <p>María Natscheilly Torres</p>
                    <p>Rafael Duarte Uriza</p>
                    <p>Juan Mojica — Publicaciones La Sorda</p>
                  </div>
                </div>
                <div>
                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2022-1</p>
                    {
                      integrantes_2022_1.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  </div>
                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2022-3</p>
                    {
                      integrantes_2022_3.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  </div>
                  <div className="parrafo">
                    <p>Agradecimientos</p>
                  </div>
                  <div className="parrafo">
                    <p>Escuela de Artes - UNAL Bogotá</p>
                    <p>Sofía Mejía Arias, Maestría Interdisciplinaria en Teatro y Artes Vivas —MITAV UNAL</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
          <Container className="credits-generic" style={{ padding: "2rem 4rem", color: "#A3C9D9"}}>
            <div className="creditos-screen ml-15" style={{ maxWidth: "1200px"}}>
              <div className="grid-2 gap-2">
                <div>
                  <div className="parrafo">
                    <p>Todos los contenidos de esta publicación fueron desarrollados en el marco del proyecto «Crea-lo: otros mundos posibles en la UN. Laboratorios, talleres y experiencias para el activismo cultural universitario» a través de talleres y laboratorios colaborativos y representan una voz común de los participantes.</p>
                  </div>
                </div>
                <div>
                  <div className="parrafo">
                    <p>Universidad Nacional de Colombia</p>
                    <p>DIVISIÓN DE CULTURA</p>
                    <p>Dirección de Bienestar Universitario</p>
                    <p>Sede Bogotá</p>
                  </div>
                  <div className="parrafo">
                    <p>Edificio 103 - Centro Polideportivo</p>
                    <p>Primer Piso</p>
                    <p>Ciudad Universitaria</p>
                    <p>Bogotá D.C., Colombia</p>
                  </div>
                  <div className="parrafo">
                    <p>Email: culturabien_bog@unal.edu.co</p>
                    <p>Facebook: </p>
                    <p>Área Cultura Unal Bog</p>
                  </div>
                </div>
              </div>
              <div className="grid-2 gap-2 mt-3">
                <div className="center">
                  <img src={logo_crealo} alt="Logo Crea-lo" />
                </div>
                <div className="ml-3">
                  <img src={escudo} alt="Escudo Univrsidad Nacional de Colombia" />
                </div>
              </div>
            </div>
          </Container>
      </Container>
  );
};

export default DesahogoScreen;
