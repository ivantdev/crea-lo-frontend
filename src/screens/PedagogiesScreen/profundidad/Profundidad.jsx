import React, { useEffect, useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../../hooks";
import { styled } from "@mui/system";

import ballenaHilos from "../../../assets/Provocación_con_hilos.jpg";
import audioBallena from "../../../assets/audio/Ballena 1.mp3";
import ballenaSumergida from "../../../assets/ballenaSumergiendose.png";
import "./Profundidad.css";
import ModalPoema from "./components/ModalPoema";
import ModalsProfundidad from "./components/ModalsProfundidad";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "ui-monospace, monospace",
  padding: "4rem",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#2F4F4F",
}));

const Profundidad = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();
  const [poemaComplete, setComplete] = useState(false);
  const [cont, setCont] = useState(0);

  const AppropiateContainer = useMemo(
    () =>
      ({ children }) => {
        return !isMobile ? (
          <Container>{children}</Container>
        ) : (
          <ScrollContainer
            className="scroll-container"
            style={{
              fontFamily: "ui-monospace, monospace",
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
    <AppropiateContainer style={{ backgroundColor: "#2F4F4F" }}>
      <Container

      // style={{  backgroundImage: `url(${fondoProfundidad})` }}
      >
        <h1>Profundidad</h1>
        <br />
        <img
          src={ballenaHilos}
          alt="ballena-bordada"
          width={550}
          // style={{ display: "block", margin: "auto" }}
        />
        <br />
        <div
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alingItems: "center",
            // }}
          >
            <audio controls autoPlay>
              <source src={audioBallena} type="audio/mpeg" />
            </audio>
          </div>
        <div className="HuellasDeAgua">
          <br />

          

          <h3>HUELLAS DE AGUA</h3>
          <p>
            Los cuerpos de agua, todo lo que contienen y evocan, han sido
            metáforas de trabajo creativo recurrentes en Crea-lo. A finales de
            2020, durante la época de lluvias en el centro del país, la fuerza
            del agua nos dio motivos suficientes para pensar en las crecientes;
            conversamos entonces sobre maneras como el agua se abría paso en la
            tierra, brotaba de ella en forma de ríos, cascadas, lagunas,
            riachuelos… todos cuerpos de agua dulce. A la luz de la geografía,
            nos encantamos con los sistemas de drenaje, nos parecieron gestos de
            crecimiento y proliferación de las aguas en el planeta maravillosos,
            al punto que fueron grafías protagonistas en Creciente, las memorias
            del proyecto Crea-lo 2020.
          </p>
          <p>
            Plegar y desplegar relacionamientos posibles en estos tres años de
            resistencias pedagógicas, políticas y culturales nos ha llevado a
            derivar entre aguas dulces, pero también desembocamos en la
            inmensidad del mar donde no solo encontramos agua salada. Vimos
            arrecifes, peces, seres tentaculares (pulpos campana), sirenas y
            barcos. Paso a paso fuimos cayendo en la cuenta de que para entrar
            al mar debíamos llevar la mirada a lo alto y contemplar por un
            tiempo a su pareja inseparable: la bóveda celeste. Mar y cielo, el
            abrazo y la conexión entre mundos, especies y fuerzas, fueron
            también trocha de nuestro andar metafórico y pedagógico. Iniciamos
            2021 con la creación de cartografías celestes y en ellas nos
            dibujamos como proyecto; por un tiempo fuimos cartografía celeste y
            jugamos a ser estrellas, estrellas fugaces, constelaciones, entre
            otros cuerpos del firmamento. Vivíamos entre el cielo y el mar. Pero
            durante el estallido social en Colombia se hizo necesario salir de
            las aguas para tomar bocanadas de aire; arengamos, gritamos,
            paramos, avanzamos… El gesto de salir y batallar contra la
            turbulencia fue sin duda el germen de Desahogo, nuestras memorias
            2021 donde el agua, de una u otra forma, seguía presente.
          </p>
          <p>
            Insistimos con las aguas en este tercer cierre en 2022, pero esta
            vez fabulamos con ser ballenas que nadan en corrientes de hilos y
            océanos de palabras. Devenimos en mamíferxs de mar que surcan
            emociones y prácticas transatlánticas, transdisciplinares,
            transfronterizas… creamos nuestras mareas culturales y creemos en
            nuestras corrientes transformadoras. Nuestra ballena va-llena de
            prácticas pedagógicas resistentes, emergentes y parciales…{" "}
          </p>
          <p>
            Invitamos a lxs lectorxs a que naveguen con nosotrxs en este nuevo
            gesto de inmersión para, cada vez, ir a lo más profundo de los
            agenciamientos y los activismos para otros mundos posibles.
          </p>
          <img src={ballenaSumergida} alt="ballena Sumergiendose" width={600} />
        </div>
        <ModalPoema />
        <ModalsProfundidad />
      </Container>
    </AppropiateContainer>
  );
};

export default Profundidad;
