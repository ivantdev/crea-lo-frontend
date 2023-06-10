import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'
import { styled } from "@mui/system";

import ballenaHilos from "../../../assets/images/profundidad/Provocación_con_hilos.jpg";
import audioBallena from "../../../assets/audio/Ballena 1.mp3";
import ballenaSumergida from "../../../assets/images/profundidad/ballenaSumergiendose.png";
import "./Profundidad.css";
import ModalPoema from "./components/ModalPoema";
import ModalsProfundidad from "./components/ModalsProfundidad";
import { ContentCopy } from "@mui/icons-material";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1200,
  margin: "10px",
  padding: "2rem",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "center",
  fontFamily: "ui-monospace, monospace",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#2F4F4F",
  borderRadius: "10px",
}));

const Profundidad = () => {
  const theme = useTheme();

  const closeButtonStyles = {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 2000,
    padding: "4px",
    borderRadius: "3px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    "&:hover": {
      backgroundColor: '#FFFFFF',
    },
  }

  return (
    <>
      <div id="profundidad-background" />
      <Container>
        <IconButton
          aria-label="close"
          onClick={() => {
            window.history.back();
          }}
          sx={{...closeButtonStyles}}
        >
          <CloseIcon />
        </IconButton>
        <Container style={{ padding: "0", margin: 0}}>
          <div style={{ maxWidth: "1050px"}}>
            <h1
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "38px",
                lineHeight: "46px",
                
              }}
            >
              Profundidad
            </h1>
            <img src={ballenaHilos} alt="ballena-bordada" style={{ width: "100%", maxWidth: "1000px"}} />
            <div>
              <audio controls autoPlay>
                <source src={audioBallena} type="audio/mpeg" />
              </audio>
            </div>
            <div className="HuellasDeAgua">
              <br />

              <h3>HUELLAS DE AGUA</h3>
              <p className="parrafo" style={{textAlign: "justify"}}>
                Los cuerpos de agua, todo lo que contienen y evocan, han sido
                metáforas de trabajo creativo recurrentes en Crea-lo. A finales de
                2020, durante la época de lluvias en el centro del país, la fuerza
                del agua nos dio motivos suficientes para pensar en las
                crecientes; conversamos entonces sobre maneras como el agua se
                abría paso en la tierra, brotaba de ella en forma de ríos,
                cascadas, lagunas, riachuelos… todos cuerpos de agua dulce.
              </p>
              <p className="parrafo" style={{textAlign: "justify"}}>
                A la
                luz de la geografía, nos encantamos con los sistemas de drenaje,
                nos parecieron gestos de crecimiento y proliferación de las aguas
                en el planeta maravillosos, al punto que fueron grafías
                protagonistas en Creciente, las memorias del proyecto Crea-lo
                2020.
              </p>
              <p className="parrafo" style={{textAlign: "justify"}}>
                Plegar y desplegar relacionamientos posibles en estos tres años de
                resistencias pedagógicas, políticas y culturales nos ha llevado a
                derivar entre aguas dulces, pero también desembocamos en la
                inmensidad del mar donde no solo encontramos agua salada. Vimos
                arrecifes, peces, seres tentaculares (pulpos campana), sirenas y
                barcos. Paso a paso fuimos cayendo en la cuenta de que para entrar
                al mar debíamos llevar la mirada a lo alto y contemplar por un
                tiempo a su pareja inseparable: la bóveda celeste. Mar y cielo, el
                abrazo y la conexión entre mundos, especies y fuerzas, fueron
                también trocha de nuestro andar metafórico y pedagógico.
              </p>
              <p className="parrafo" style={{textAlign: "justify"}}>
                Iniciamos
                2021 con la creación de cartografías celestes y en ellas nos
                dibujamos como proyecto; por un tiempo fuimos cartografía celeste
                y jugamos a ser estrellas, estrellas fugaces, constelaciones,
                entre otros cuerpos del firmamento. Vivíamos entre el cielo y el
                mar. Pero durante el estallido social en Colombia se hizo
                necesario salir de las aguas para tomar bocanadas de aire;
                arengamos, gritamos, paramos, avanzamos… El gesto de salir y
                batallar contra la turbulencia fue sin duda el germen de Desahogo,
                nuestras memorias 2021 donde el agua, de una u otra forma, seguía
                presente.
              </p>
              <p className="parrafo" style={{textAlign: "justify"}}>
                Insistimos con las aguas en este tercer cierre en 2022, pero esta
                vez fabulamos con ser ballenas que nadan en corrientes de hilos y
                océanos de palabras. Devenimos en mamíferxs de mar que surcan
                emociones y prácticas transatlánticas, transdisciplinares,
                transfronterizas… creamos nuestras mareas culturales y creemos en
                nuestras corrientes transformadoras. Nuestra ballena va-llena de
                prácticas pedagógicas resistentes, emergentes y parciales…{" "}
              </p>
              <p className="parrafo" style={{textAlign: "justify"}}>
                Invitamos a lxs lectorxs a que naveguen con nosotrxs en este nuevo
                gesto de inmersión para, cada vez, ir a lo más profundo de los
                agenciamientos y los activismos para otros mundos posibles.
              </p>
              <img
                src={ballenaSumergida}
                style={{ width: "100%", maxWidth: "1000px", padding: "2rem 0 0" }}
                alt="ballena Sumergiendose"
              />
            </div>
            <ModalPoema />
            <ModalsProfundidad />
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Profundidad;
