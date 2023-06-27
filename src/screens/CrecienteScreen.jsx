import React from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Gallery from "../components/Gallery";
import PdfViewer from "../components/PdfViewer";
import pdfCreciente from "../assets/pdfs/Creciente.pdf";
import creciente_background from "../assets/images/creciente_background.jpg";
import "../css/DesahogoScreen.css"
import logo_crealo from "../assets/Crealo logo png 1.png";
import escudo from "../assets/escudo.png";
import FooterLogos from "../components/FooterLogos";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "2rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const CrecienteScreen = () => {
  const theme = useTheme();

  const grupo_1 = [
    "Lina María Ayala Lizarazo",
    "José Francisco Álvarez Morales",
    "Cristian Camilo Guerrero Rátiva",
    "Bryan Andrés León Murillo",
    "Anlly Carolina Torres Villareal",
    "Juan Esteban Garzón López",
    "Dylan Santiago Suárez Picón",
    "Joan Sebastian Galeano Caviativa",
    "María Camila Mendoza Quintero",
    "Diana Lorena Cuervo Piñeros",
    "Santiago Hernando Turriago García",
    "Rodolfo Andres González Morales",
    "Xuamy Sandrid Jamany Ariza Arciniegas",
    "Lictin Haydee Bernal Toledo Scarleth",
    "Sánchez Castellanos",
    "Johann Esteban Fonseca Vega",
    "Nicolás Alberto Ramírez Clavijo",
  ];

  const grupo_2 = [
    "Cristian Estiben Dulcey Zamudio",
    "Daniela Alexandra Morales Rojas",
    "Laura Galindo Beleño",
    "Sofia Valentina Mendoza Acosta",
    "Yiyi Alejandra Lopez Torres",
    "Anamaría Rodríguez Ramírez",
    "Andrés Felipe Lara López",
    "Maria Carolina Sarmiento-pérez Tapia",
    "Johan Rodríguez Meneses",
    "María Fernanda Ortegón Vanegas",
    "Melany Gipsy Moreno González",
    "Miguel Ángel Mahecha Zamora",
    "María Alejandra Ruíz Hernández",
    "Laura Juliana Gáfaro Ortiz",
    "César Luis Cerquera",
    "Phoebe Mariana Lara Reina",
    "Diego Fernando Díaz Dasa",
    "Jhoan Andrés Ortiz Castillo",
    "Erick Santiago Díaz Bueno",
    "Jessica Alexandra Santos",
    "Luis Javier Villarreal Portilla",
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
          backgroundImage: `url('${creciente_background}')`,
          
          }}></div>
        <Container style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem" }}>
          <Typography variant="h3" sx={{fontWeight: "600"}}>Creciente</Typography>
          <Container   style={{
              padding: "0",
              marginTop: "2rem",
            }}>
            <Typography variant="body" paragraph={true} >
              {`Memorias del proyecto Crea-lo: Otros mundos posibles en la UN 2020.`}
            </Typography>
            <Typography variant="body" paragraph={true}>
              {`Este fue el primer ejercicio del laboratorio de edición que nació en el marco del proyecto Crea-lo en 2020, donde se recogen experiencias y sentires que fueron naciendo en el marco de los laboratorios sensibles y los talleres: “Hicimos este libro en el marco de un laboratorio editorial, como un cuerpo con doce manos que entró en los registros de archivo de las acciones y experiencias de “Crea-lo” para sacar de allá todo aquello que se sentía cálido, se sentía emocionante, se sentía lleno de fuerza y de tensiones provocativas. Lo hicimos usando un cuerpo de pulpo, cambiando de color y deslizándonos entre mundo subacuáticos. Lo hicimos también con un cuerpo que escucha y se deja comprometer.”`}
            </Typography>
          </Container>
          <Container
            style={{
              padding: "2rem 0",
            }}
          >
            <Typography variant="h4" sx={{...styleTypography}}>
              Edición en PDF
            </Typography>
            <PdfViewer file={ pdfCreciente } />
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
            <div className="creditos-screen" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0"}}>
              <div className="description mt-3">
                <p style={{ fontSize: "1.2em"}}><span className="bold">CREA-LO</span> OTROS MUNDOS POSIBLES EN LA UNAL </p>
                <p>Laboratorios, talleres y experiencias para el activismo cultural universitario.</p>
                <p>2020</p>
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
                    <p>Óscar Arturo Oliveros Garay</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Jefe División de Cultura</p>
                    <p>Sofía Mejía Arias</p>
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
                    <p>Alejandra Marín Pineda</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Acompañamiento y producción sonora</p>
                    <p>Mateo Mejía Mejía</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Acompañamiento y producción audiovisual</p>
                    <p>Sebastian Jaimes</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Diseño visual</p>
                    <p>Álvaro Cabrejo</p>
                    <p>Julián David Solano Neuque</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Estudiantes asistentes del proyecto</p>
                    <p>Lina Constanza Mejía Ramírez</p>
                    <p>Liseth Caro Villate</p>
                    <p>Valentina Suárez García</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Profesoras y profesores invitados del proyecto</p>
                    <p>Ana María Romano</p>
                    <p>Brigitte Potente - Andrés Lagos</p>
                    <p>Catalina Vargas Tovar (Cajón Catalina de sastre)</p>
                    <p>Diana Bernal (Fundación Región Museo)</p>
                    <p>Juliana Borrero (Universidad Pedagógica y Tecnológica de Colombia)</p>
                    <p>Luisa Piedrahita Jaramillo</p>
                    <p>Marcia Cabrera Antía</p>
                    <p>María Jimena Sánchez (Taller Agosto)</p>
                  </div>
                  <div className="parrafo">
                    <p className="bold">Ilustraciones</p>
                    <p>Lina Constanza Mejía</p>
                  </div>
                </div>
                <div>
                  <div className="parrafo">
                    <p className="bold">Integrantes Grupo 1</p>
                    {
                      grupo_1.map((integrante, index) => (
                        <p key={index}>{integrante}</p>
                      ))
                    }
                  <div className="parrafo">
                    <p className="bold">Integrantes Grupo 2</p>
                    {
                      grupo_2.map((integrante, index) => (
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
          <div className="creditos-screen ml-15" style={{ maxWidth: "1200px", textAlign: "left", marginLeft: "0"}}>
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

export default CrecienteScreen;
