import React, { useMemo } from "react";
import { styled } from "@mui/system";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../hooks";
import { Button, colors } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/PedagogiesScreen.css"
const Container = styled("div")(({ theme }) => ({
  padding: "3rem 1rem 1rem 1rem",
  width: "100%",
  fontFamily: "Inter",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  // "--webkit-user-elect": "none",
  // userSelect: "none",
}));

const PedagogiesScreen = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ position: "relative", minHeight: "100vh"}}>
      <div id="pedagogies-screen" />
      <Container style={{ margin: "0 auto", position: "relative", zIndex: "1", maxWidth: "1300px"}}>
        <h1
          style={{
            fontWeight: "800",
            fontSize: "2.2rem",
            lineHeight: "46px",
            color: "#3F5759",
          }}
        >
          Pedagogías
        </h1>
        <Container style={{ justifyContent: "center", display: "flex", padding: "0" }}>
          <div className="grid">
            <Button
              variant="contained"
              className="Button"
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                flexGrow: "initial",
                margin: "10px",
                textTransform: "capitalize",
              }}
              onClick={() => navigate("/pedagogies/profundidad")}
            >
              Profundidad
            </Button>
            <Button
              variant="contained"
              className="Button"
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                flexGrow: "initial",
                margin: "10px",
                textTransform: "capitalize",
              }}
              onClick={() => navigate("/pedagogies/descentrar")}
            >
              Descentrar
            </Button>

            <Button
              variant="contained"
              className="Button"
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                color: "white",
                flexGrow: "initial",
                margin: "10px",
                textTransform: "capitalize",
              }}
              onClick={() => navigate("/pedagogies/resistir")}
            >
              Resistir
            </Button>
          </div>
        </Container>
        <Container
          className="pedagogias-text-container"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            color: "#3F5759",
            padding: "0",
            margin: "0 auto",
            maxWidth: "920px",
          }}
        >
          <p 
            className="parrafo"
            style={{textAlign: "justify", marginTop: "4rem" }}
          >
            Estas memorias, como ha sido habitual en Crea-lo, responden al
            devenir y al derivar de nuestras preguntas y prácticas creadoras. A
            lo largo de 2022, prestando mucha atención a lo que personas,
            materias y conversaciones iban revelando, un equipo conformado por
            estudiantes y acompañantes pedagógicos fuimos dando forma a
            metodologías pedagógicas cuya pregunta nodal casi siempre giró en
            torno a lo sensible.
          </p>
          <p className="parrafo" style={{textAlign: "justify"}}>
            Cuando hablábamos de “lo sensible” aparecía de manera protagónica el
            cuerpo y su potencia perceptiva. Fue así como intensificar
            experiencias gustativas, olfativas, táctiles, auditivas y visuales
            nos invitaron a pensar y proponer relacionamientos intersensibles,
            desde varias acciones del proyecto. Nuestros talleres, laboratorios
            y demás exploraciones para el activismo cultural universitario
            atravesaron entonces prácticas de percepción que fueron materia de
            experimentación regular. Este año, quizás con mayor insistencia que
            en los anteriores, buscamos a toda costa deslindar nuestros procesos
            de todo artificio y logística que pudiera llevarnos a una noción de
            lo cultural entendida como producción de eventos. Lo pedagógico,
            desde esta perspectiva que pone en cuestión las éticas y políticas
            del trabajo cultural hoy, implicó situarnos en las personas que
            hacíamos parte del proyecto, en nuestros deseos y en la estima de
            las experiencias singulares y colectivas para crear(nos) un sostén
            temporal y por consiguiente una política-poética de vínculos
            afectivos y emocionales. De esta manera, revueltas culturales desde
            los afectos y desde los sentidos fueron ocurriendo en nosotrxs y en
            cada unx de nosotrxs de diversas maneras.
          </p>
          <p className="parrafo" style={{textAlign: "justify"}}>
            Los tres gestos
            creativos-pedagógicos que presentamos a continuación
            (descentramientos, ballena-trueno y resistir) no pretenden describir
            de manera analítica qué hicimos y cómo. Más bien, dan cuenta de
            procesos de pensamiento colectivo en torno a una pregunta
            provocadora y varias condiciones creativas. Qué deseo subrayar del
            proyecto en esta versión por su potencia o necesidad de
            profundización fue la pregunta provocadora. Arrojarse de cabeza a
            plantear una respuesta individual a esa pregunta, a través del uso
            de la materialidad que cada unx deseara, fue una de las primeras
            condiciones creativas. Luego todo fue puro juego y experimentación.
            Nos propusimos visitar cada una de las respuestas y dialogar con
            ellas. Re-elaboramos las respuestas, les hicimos más preguntas, nos
            concentramos en sus materialidades, intervenimos aquello que iban
            haciendo lxs compañerxs, confiamos en la edición que cada quien iba
            proponiendo y fabulamos, sobre todo fabulamos mucho. Cabe señalar
            que fue claro desde el inicio, para quienes trabajamos en estos
            gestos, que teníamos un reto particular con respecto a las
            características escriturarles y de montaje editorial de los
            apartados pedagógicos hechos para “Creciente” y “Desahogo” (nuestras
            memorias publicadas de 2020 y 2021, respectivamente); nos interesó
            romper la voz singular así como la noción de autoría, inclusive nos
            propusimos expandir nuestros modos de escribir para provocar otros
            modos de leer-percibir nuestras intuiciones a propósito de lo
            pedagógico en Crea-lo. Así fueron brotado escrituras con sonidos,
            con imágenes, con hilos y con palabras, por mencionar algunas.
            Insistir en características polifónicas, polisémicas y polimórficas
            de nuestros modos de hacer en el proyecto fue nuestro lugar de
            enunciación para hablar de lo pedagógico este año. Con estos gestos,
            más que dar cuenta de un método, compartimos experiencias de
            pensamiento-creación que se acercan un poco a aquello que entendemos
            y practicamos como pedagogías para crear y creer en otros mundos
            posibles en la UNAL.
          </p>
        </Container>
      </Container>
    </Container>
  );
};

export default PedagogiesScreen;
