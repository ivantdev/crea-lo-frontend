import React, { useMemo } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../hooks";

import FooterLogos from "../components/FooterLogos";
import "../css/CreditsScreen.css";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100vw",
  height: "100%",
  display: "grid",
  justifyContent: "center",
  fontFamily: "Inter",
  color: "#A3C9D9",
  lineHeight: "21px",
  backgroundColor: "#173040",
}));

const CreditosScreen = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const integrantes_2022_1 = [
    "Anamaría Rodríguez Ramírez",
    "Brian Sneider Gutiérrez Valderrama",
    "César Luis Cerquera Montealegre",
    "Dayanna Lizeth Arteaga Segovia",
    "Erika Paola Cely Cruz",
    "Iliana Pastorany Martínez Guio",
    "Jenaro Larios Carvajal",
    "Jhoan Andrés Ortiz Castillo",
    "Johan Rodríguez Meneses",
    "Karol Ximena Espitia Montaño",
    "Laura Vanessa Macias Jara",
    "María Camila Mendoza Quintero",
    "Melany Gipsy Moreno González",
    "Miguel Ángel Pascuas Cely",
    "Paola Andrea Aguirre Bravo",
    "Phoebe Mariana Lara Reina",
    "Vielka Valentina Rodríguez Jaimes",
  ]

  const integrantes_2022_3 = [
    "Ana Fernanda Montañez Romero",
    "Ana María Mavisoy González",
    "Andrea Natalia Garzón Almario",
    "Angela Gissell Garzón Marín",
    "Ángela María López Gómez",
    "Astrid Lorena Castillo Felacio",
    "Brayan Daniel Reyes González",
    "Carmen Lorena Pedraza Galvis",
    "Catalina Daza Rintha",
    "Cristian Snneyder Salamanca Pacheco",
    "Daniela Duarte Cepeda",
    "Duván Stiven Izaquita Sepúlveda",
    "Escarle Fernanda Sánchez Escorcha",
    "Francy Nataly Micolta Quiñones",
    "Gabriela Correa Godoy",
    "Heiner Fabián Martinez Rangel",
    "Hollman Junior Ortiz Blanco",
    "Humberto Antonio Nieto Aguirre",
    "James Stevan Mena Burbano",
    "Jennifer Dayana Gelvez Galvis",
    "Jhosman Stiven Jiménez Ramos",
    "Jonathan Fabián Ortiz Rojas",
    "Jorge Iván Torres Ferrer",
    "Jose Luis Castro Góngora",
    "Juan David Martínez",
    "Juliana Redondo Reyes",
    "Kevin Ricardo Moreno Medalles",
    "Laura Fernanda Rivera Bermúdez",
    "Leidy Savina Valencia Andrade",
    "Lina María Redondo Norato",
    "María Fernanda Cedeno Reyes",
    "María José Arias Mora",
    "Marlon Iván Jiménez Fonseca",
    "Miguel Alexander Giraldo Giraldo",
    "Nicolás Gil Pachón",
    "Oriana Melissa Cruz Cárdenas",
    "Paola Andrea Certuche Garzón",
    "Paula Stephania Rodríguez Silva",
    "Sarakmila Valentina Corredor Pérez",
    "Valentina Acelas Rodríguez",
  ]

  return (
    <>
      <Container style={{ padding: "4rem 4rem 2rem 4rem"}}>
        <div id="creditosScreen" />
        <div className="creditos-screen ml-15" style={{ maxWidth: "1200px"}}>
          <header className="mt-3">
            <h2 className="m-0">MEMORIAS</h2>
            <h3 className="m-0">Proyecto:</h3>
          </header>

          <div className="description mt-3">
            <p style={{ fontSize: "1.2em"}}><span className="bold">CREA-LO</span> OTROS MUNDOS POSIBLES EN LA UNAL </p>
            <p>Laboratorios, talleres y experiencias para el activismo cultural universitario.</p>
            <p>2022</p>
          </div>

          <div className="grid-2 gap-2">
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
                <p>Nelson Ivan Castellanos Betancourt</p>
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
      <Container style={{ padding: "2rem 4rem"}}>
        <div className="creditos-screen" style={{ maxWidth: "1200px"}}>
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
        <FooterLogos />
      </Container>
    </>
  );
};

export default CreditosScreen;
