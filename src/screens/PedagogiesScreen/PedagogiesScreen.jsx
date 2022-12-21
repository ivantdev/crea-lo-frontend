import React, { useMemo } from "react";
import { styled } from "@mui/system";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../hooks";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../css/PedagogiesScreen.css"
const Container = styled("div")(({ theme }) => ({
  fontFamily: "Inter",
  padding: "3rem",
  marginLeft: "1rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const PedagogiesScreen = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  //appropriate container for mobile or desktop
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
    <>
      <div id="pedagogies-screen" />
      <AppropiateContainer>
        <Container>
          <h1
            style={{
              position: "absolute",
              width: "622px",
              height: "44px",
              left: "176px",
              top: "169px",
              fontWeight:800,
              fontSize:"38px",
              lineHeight:"46px"
            }}
          >
            {" "}
            Pedagogias
          </h1>
        </Container>
        <Container style={{ justifyContent: "center", display: "flex" }}>
          <div className="grid">
            <Button
              variant="contained"
              className="Button"
              style={{
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
          style={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            color: "#3F5759",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              lineHeight: "44px",
              position: "absolute",
              width: "745px",
              height: "398px",
              left: "178px",
              top: "420px",
            }}
          >
            Estas memorias, como ha sido habitual en Crea-lo, responden al
            devenir y al derivar de nuestras preguntas y prácticas creadoras. A
            lo largo de 2022, prestando mucha atención a lo que personas,
            materias y conversaciones iban revelando, un equipo conformado por
            estudiantes y acompañantes pedagógicos fuimos dando forma a
            metodologías pedagógicas cuya pregunta nodal casi siempre giró en
            torno a lo sensible.
          </h2>
          <br />
          <p
            style={{
              position: "absolute",
              width: "622px",
              height: "1479px",
              left: "177px",
              top: "1000px",
              fontWeight: 400,
              fontSize: "21px",
              lineHeight: "25px",
            }}
          >
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
            cada unx de nosotrxs de diversas maneras. Los tres gestos
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
      </AppropiateContainer>
    </>
  );
};

export default PedagogiesScreen;
