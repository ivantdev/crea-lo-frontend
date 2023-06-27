import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Gallery from "../components/Gallery";
import PdfViewer from "../components/PdfViewer";
import pdfDesahogo from "../assets/pdfs/Desahogo-21-11-22-bajaWebpages.pdf";
import desahogo_background from "../assets/images/desahogo_background.jpg";
import "../css/DesahogoScreen.css"
import FooterLogos from "../components/FooterLogos";

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

  const integrantes_2021_1 = [
    "Valentina Lozano Sánchez",
    "Martin Gabriel Castaño Hincapié",
    "Sofía Sabina Yandar Sabogal",
    "Damián René Rivera Ortiz",
    "Lauren Jasury Micolta Gallego",
    "William Camilo Castro Ciendua",
    "Paola Andrea Aguirre Bravo",
    "Sara Nicol Álvarez Rojas",
    "Santiago Sarmiento Mora",
    "César Luis Cerquera Montealegre",
    "María Alejandra Ruiz Hernández",
    "Laura Juliana Gáfaro Ortíz",
    "Phoebe Mariana Lara Reina",
    "María de los Ángeles León Moreno",
    "Carol Marcela Turriago Valbuena",
    "Gabriela Isabel Rico Ortega",
    "Jefferson David Rocha Contreras",
    "Greissy Gutiérrez Ortiz",
    "Angie Lorena Pardo Rodríguez",
    "José David García Castañeda",
    "Juan Sebastián Guerrero González",
    "Jhoan Andrés Ortiz Castillo",
    "Jessica Alexandra Santos Contreras",
    "Erick Santiago Díaz Bueno",
    "Nicolás Alberto Ramírez Clavijo",
    "Xuamy Sandrid Jamany Ariza Arciniegas",
    "Daniela Parra Campos Iliana",
    "Pastorany Martínez Guio",
    "Estefanny Alejandra Martínez Montaño",
    "Juan Esteban Bastidas Saavedr",
    "Dayanna Lizeth Arteaga Segovia",
    "Yiyi Alejandra López Torres",
    "Daniela Alexandra Morales Rojas",
    "Cristian Estiben Dulcey Zamudio",
    "José Francisco Álvarez Morales",
    "Deiby Mateo Trillos Vega",
    "Óscar Rafael Torres Rosas",
    "Daniela Valentina Afanador Jaimes",
    "Miguel Ángel Pascuas Cely",
    "Juliana Pasuy Jojoa",
    "Jenaro Larios Carvajal",
    "Melany Gipsy Moreno González",
    "Miguel Ángel Mahecha Zamora",
    "María Carolina Sarmiento-pérez Tapia",
    "Andrés Felipe Lara López",
    "Anamaría Rodríguez Ramírez",
    "Johan Rodríguez Meneses",
  ];

  const integrantes_2021_3 = [
    "Paula Johanna Rodríguez Badillo",
    "Erika Paola Cely Cruz",
    "Dahiana Vanessa Rocha Rodríguez",
    "Sofía Jaime Pacheco",
    "Jorge Esteban Guerrero Polo",
    "William Felipe Rodríguez Castañeda",
    "Jose Daniel Solano Galvis",
    "Cristian David Gómez Gómez",
    "Brian Sneider Gutiérrez Valderrama",
    "Laura Vanessa Macias Jara",
    "Vielka Valentina Rodríguez Jaimes",
    "David Fernando Quinche Rodríguez",
    "Karol Ximena Espitia Montaño",
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
              padding: "0",
              marginTop: "2rem",
            }}>
            <Typography variant="body" paragraph={true} >
              {`“Nuestra lengua está viva y se multiplica”`}
            </Typography>
            <Typography variant="body" paragraph={true}>
              {`Aquí encontrarás las memorias que nacieron en el marco del laboratorio de edición  del proyecto «Crea-lo: otros mundos posibles en la UN» 2021. Donde estudiantes y acompañantes pedagógicos se encontraron para entretejer voces, sentires y aprendizajes. “Te invitamos a ser parte activa de esta red desde la escucha, la resonancia, el encuentro y la activación, de otros modos de relacionamiento multiespecies, para este y otros tiempos.”`}
            </Typography>
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
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869550/bocanadas_de_aire_corregido_01_a850b448ec.png",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869549/Edit_18_c29badae13.jpg",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869547/Cartel_Crea_lo_2021_1_4c3ae6c2b1.png",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869538/cartografia_crea_lo_02_a6a1b1a46f.png",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869538/Desdibujar_947d7c1a2c.png",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869537/Radio_Resistencia_2dce222c59.png",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869533/Edit_9_94fc3cbde2.jpg",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869533/Edit_21_c2be79eff7.jpg",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869533/Edit_2_61c17371ff.jpg",
                "https://res.cloudinary.com/crea-lo/image/upload/v1686869532/Edit_20_f14be1c4ca.jpg",
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
              width: "100%",
              maxWidth: "1200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 4rem",
              flexDirection: "column",
              color: "#A3C9D9",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography, marginBottom: "0"}}>
              Participantes
            </Typography>
            <div className="creditos-screen" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0", width: "100%",}}>
              <div className="description mt-3">
                <p style={{ fontSize: "1.2em"}}><span className="bold">CREA-LO</span> OTROS MUNDOS POSIBLES EN LA UNAL </p>
                <p>Laboratorios, talleres y experiencias para el activismo cultural universitario.</p>
                <p>2021</p>
              </div>

              <div className="grid-2 grid-end gap-2" style={{alignItems: "start"}}>
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
                    <p>Natalia Orozco Lucena</p>
                    <p>Mateo Mejía Mejía</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Acompañamiento y producción sonora</p>
                    <p>Sebastián Laura Wiesner</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Profesores invitados del proyecto</p>
                    <p>Emilio Carrera Quiroga</p>
                    <p>Rafael Duarte Uriza</p>
                    <p>Felipe León</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Estudiantes asistentes del proyecto</p>
                    <p>Lina Constanza Mejía Ramírez</p>
                    <p>Diego Fernando Díaz Daza</p>
                    <p>Diana Lorena Cuervo Piñeros</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Laboratorio Editorial</p>
                    <p>Antonia Lagos Arévalo</p>
                    <p>Damián René Rivera Ortiz</p>
                    <p>José David García Castañeda</p>
                    <p>José Francisco Álvarez Morales</p>
                    <p>Lina Constanza Mejía Ramírez</p>
                    <p>María Carolina Sarmiento-pérez Tapia</p>
                    <p>María de los Ángeles León Moreno</p>
                    <p>Martín Gabriel Castaño Hincapié</p>
                    <p>Óscar Rafael Torres Rosas</p>
                    <p>Sebastián Ramírez Monsalve</p>
                    <p>Yiyi Alejandra López Torres</p>
                    <p>Diego García Bernal</p>
                    <p>Juan Mojica P</p>
                  </div>
                </div>
                <div>
                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2021-1</p>
                    {
                      integrantes_2021_1.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  <div className="parrafo">
                    <p className="bold">Integrantes laboratorios 2021-3</p>
                    {
                      integrantes_2021_3.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>
          <Container className="credits-generic" style={{
            padding: "2rem 4rem",
            color: "#A3C9D9",
            display: "flex",
            justifyContent: "center",
          }}>
            <div className="creditos-screen" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0"}}>
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
            </div>
          </Container>
          <FooterLogos />
      </Container>
  );
};

export default DesahogoScreen;
