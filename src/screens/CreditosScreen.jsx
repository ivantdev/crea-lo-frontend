import React, { useMemo } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../hooks";

import logo from "../assets/Crealo logo png 1.png";
import escudo from "../assets/escudo.png";
import "../css/CreditsScreen.css";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  padding: "4rem",
  color: "#A3C9D9",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  position: "relative",
  width: "1440px",
  height: "2722px",
  left: "0px",
  top: "0px",
  backgroundColor: "#173040",
}));

const CreditosScreen = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const AppropiateContainer = useMemo(
    () =>
      ({ children }) => {
        return !isMobile ? (
          <Container>{children}</Container>
        ) : (
          <ScrollContainer
            className="scroll-container"
            style={{
              fontFamily: "Inter",
              padding: "4rem",
              width: "calc(100vw - 6rem)",
              height: "calc(100vh - 2rem)",
              color: theme.palette.text.primary,
              lineHeight: "21px",
              "--webkit-user-select": "none",
              overflow: "hidden",
              userSelect: "none",
            }}
          >
            {children}
          </ScrollContainer>
        );
      },
    [isMobile]
  );

  return (
    <>
      <div id="creditosScreen" />
      <AppropiateContainer>
        <p
          style={{
            position: "absolute",
            width: "928px",
            height: "150px",
            left: "300px",
            top: "159px",
            fontWeight: 700,
            fontSize: "21px",
            lineHeight: "25px",
          }}
        >
          MEMORIAS <br />
          Proyecto: <br /> <br />
          CREA-LO OTROS MUNDOS POSIBLES EN LA UNAL <br />
          Laboratorios, talleres y experiencias para el activismo cultural
          universitario. 2022
        </p>
        <p
          style={{
            position: "absolute",
            width: "447px",
            height: "2090px",
            left: "300px",
            top: "358px",
            fontWeight: 600,
            fontSize: "21px",
            lineHeight: "25px",
          }}
        >
          Universidad Nacional de Colombia <br /> Vicerrectoría de Sede Bogotá{" "}
          <br />
          Dirección de Bienestar Universitario <br /> División de Cultura <br />{" "}
          <br />
          <em>Directora Bienestar Universitario</em> <br /> Sede Bogotá <br />{" "}
          Yuly Edith Sánchez <br /> <br />
          Jefe División de Cultura <br />
          Nicolás Zorro <br />
          <br />
          <br />
          Proyecto “Crea-lo: otros mundos posibles en la UNAL” <br /> <br />{" "}
          Coordinación general <br /> Diego García Bernal <br /> <br />{" "}
          Acompañamiento sensible <br /> Rafael Duarte Uriza <br /> María
          Natscheilly Torres <br /> Natalia Orozco Lucena <br /> Mateo Mejía
          Mejía <br /> <br /> Diseño visual <br /> Martin Gabriel Castaño
          Hincapié - Martirio <br /> <br />
          Estudiantes asistentes del proyecto <br /> Sofía Jaime Pacheco <br />{" "}
          José David Castañeda García <br /> Lina Constanza Mejía Ramírez <br />
          <br /> Mediación pedagógica y cultural <br /> Bibiana Carvajal Bernal{" "}
          <br />
          <br /> Estudiantes asistentes de mediación pedagógica y cultural{" "}
          <br /> William Felipe Rodríguez Castañeda <br /> Santiago Sarmiento
          Mora <br />
          <br /> Coordinación y conceptualización editorial <br /> Guadalupe
          Errázuriz <br />
          <br /> Diseño y desarrollo web <br /> Erick Santiago Díaz Bueno <br />{" "}
          Sebastián Castañeda García <br />
          <br /> Diagramación y diseño gráfico <br /> Juan Mojica —Publicaciones
          La Sorda <br />
          <br /> Profesoras y profesores invitados <br /> Angie Andrea Rodríguez
          —Rosil <br /> María Fernanda Vanegas <br /> José Francisco Álvarez
          Morales <br />
          Wiñay Mallky —Fredy Chikangana <br /> Adalid R. Rodríguez <br /> Danna
          Luz Ordóñez Arias <br /> Andrés Forero -HEREJE- <br /> Alexander
          Caicedo -W4CO- <br />
          <br /> Comité editorial <br />
          Sofía Jaime Pacheco <br /> José David García Castañeda <br /> Lina
          Constanza Mejía Ramírez <br /> Martín Gabriel Castaño Hincapié <br />{" "}
          Diego García Bernal <br /> Mateo Mejía Mejía <br /> Guadalupe
          Errázuriz <br /> María Natscheilly Torres <br /> Rafael Duarte Uriza{" "}
          <br /> Juan Mojica —Publicaciones La Sorda <br /> <br /> Todos los
          contenidos de esta publicación fueron desarrollados en el marco del
          proyecto «Crea-lo: otros mundos posibles en la UN. Laboratorios,
          talleres y experiencias para el activismo cultural universitario» a
          través de talleres y laboratorios colaborativos y representan una voz
          común de los participantes.
        </p>
        <p
          style={{
            position: "absolute",
            width: "409px",
            height: "1675px",
            left: "800px",
            top: "483px",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "21px",
            lineHeight: "25px",
          }}
        >
          Integrantes laboratorios 2022-1 <br />
          Anamaría Rodríguez Ramírez <br />
          Brian Sneider Gutiérrez Valderrama <br />
          César Luis Cerquera Montealegre
          <br />
          Dayanna Lizeth Arteaga Segovia <br />
          Erika Paola Cely Cruz <br />
          Iliana Pastorany Martínez Guio
          <br />
          Jenaro Larios Carvajal
          <br />
          Jhoan Andrés Ortiz Castillo
          <br />
          Johan Rodríguez Meneses <br />
          Karol Ximena Espitia Montaño
          <br />
          Laura Vanessa Macias Jara
          <br />
          María Camila Mendoza Quintero <br />
          Melany Gipsy Moreno González <br />
          Miguel Ángel Pascuas Cely <br />
          Paola Andrea Aguirre Bravo <br />
          Phoebe Mariana Lara Reina <br />
          Vielka Valentina Rodríguez Jaimes <br />
          <br />
          Integrantes laboratorios 2022-3 <br />
          Ana Fernanda Montañez Romero <br />
          Ana María Mavisoy González <br />
          Andrea Natalia Garzón Almario
          <br />
          Angela Gissell Garzón Marín
          <br />
          Ángela María López Gómez <br />
          Astrid Lorena Castillo Felacio <br />
          Brayan Daniel Reyes González
          <br />
          Carmen Lorena Pedraza Galvis <br />
          Catalina Daza Rintha <br />
          Cristian Snneyder Salamanca Pacheco
          <br />
          Daniela Duarte Cepeda <br />
          Duván Stiven Izaquita Sepúlveda <br />
          Escarle Fernanda Sánchez Escorcha
          <br />
          Francy Nataly Micolta Quiñones
          <br />
          Gabriela Correa Godoy
          <br />
          Heiner Fabián Martinez Rangel
          <br />
          Hollman Junior Ortiz Blanco <br />
          Humberto Antonio Nieto Aguirre <br />
          James Stevan Mena Burbano
          <br />
          Jennifer Dayana Gelvez Galvis <br />
          Jhosman Stiven Jiménez Ramos
          <br />
          Jonathan Fabián Ortiz Rojas
          <br />
          Jorge Iván Torres Ferrer <br />
          Jose Luis Castro Góngora
          <br />
          Juan David Martínez <br />
          Juliana Redondo Reyes
          <br />
          Kevin Ricardo Moreno Medalles <br />
          Laura Fernanda Rivera Bermúdez
          <br />
          Leidy Savina Valencia Andrade <br />
          Lina María Redondo Norato
          <br />
          María Fernanda Cedeno Reyes <br />
          María José Arias Mora
          <br />
          Marlon Iván Jiménez Fonseca
          <br />
          Miguel Alexander Giraldo Giraldo
          <br />
          Nicolás Gil Pachón
          <br />
          Oriana Melissa Cruz Cárdenas
          <br />
          Paola Andrea Certuche Garzón
          <br />
          Paula Stephania Rodríguez Silva
          <br />
          Sarakmila Valentina Corredor Pérez
          <br />
          Valentina Acelas Rodríguez
          <br />
          <br />
          Agradecimientos
          <br />
          <br />
          Escuela de Artes - UNAL Bogotá
          <br />
          Sofía Mejía Arias, Maestría Interdisciplinaria en Teatro y Artes Vivas
          —MITAV UNAL
        </p>
        <p
          style={{
            position: "absolute",
            width: "409px",
            height: "325px",
            left: "800px",
            top: "2190px",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "21px",
            lineHeight: "25px",
          }}
        >
          Universidad Nacional de Colombia <br /> DIVISIÓN DE CULTURA <br />{" "}
          Dirección de Bienestar Universitario <br /> Sede Bogotá <br />
          <br /> Edificio 103 - Centro Polideportivo <br /> Primer Piso <br />{" "}
          Ciudad Universitaria <br /> Bogotá D.C., Colombia <br />
          <br />
          Email: culturabien_bog@unal.edu.co <br /> Facebook: <br /> Área
          Cultura Unal Bog
        </p>
        <img
          src={logo}
          alt="Logo-Crealo"
          style={{
            position: "absolute",
            width: "200px",
            height: "132px",
            left: "400px",
            top: "2550px",
          }}
        />
        <img src={escudo} alt="Escudo-UN"      style={{
            position: "absolute",
            width: "232px",
            height: "98px",
            left: "850px",
            top: "2560px",
          }} />
      </AppropiateContainer>
    </>
  );
};

export default CreditosScreen;
