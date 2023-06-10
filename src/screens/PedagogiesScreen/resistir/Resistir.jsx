import React, { useMemo } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../../hooks";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import "./Resistir.css";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1200,
  margin: "10px",
  padding: "2rem",
  width: "calc(100% - 1rem)",
  display: "flex",
  justifyContent: "center",
  fontFamily: "ui-monospace, monospace",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-select": "none",
  userSelect: "none",
  backgroundColor: "#2F4F4F",
  borderRadius: "10px",
}));

const Resistir = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const images = useMemo(() => {
    return {
      palabras_1: "https://res.cloudinary.com/crea-lo/image/upload/v1685416971/palabras_1_8d0b1f6940.png",
      palabras_2: "https://res.cloudinary.com/crea-lo/image/upload/v1685416970/palabras_2_67640fc0a5.png",
      palabras_3: "https://res.cloudinary.com/crea-lo/image/upload/v1685416972/palabras_3_b91a841f9b.png",
      palabras_4: "https://res.cloudinary.com/crea-lo/image/upload/v1685416973/palabras_4_08ab067f05.png",
      palabras_5: "https://res.cloudinary.com/crea-lo/image/upload/v1685416972/palabras_5_9ff56ef114.png",
      palabras_6: "https://res.cloudinary.com/crea-lo/image/upload/v1685416971/palabras_6_ceffd3c0cd.png",
      palabras_7: "https://res.cloudinary.com/crea-lo/image/upload/v1685416971/palabras_7_5b56bf0b57.png",
      palabras_8: "https://res.cloudinary.com/crea-lo/image/upload/v1685416971/palabras_8_35ed473237.png",
      pies_dibujando: "https://res.cloudinary.com/crea-lo/image/upload/v1685416970/Pies_dibujando_49c64f3cad.jpg",
      pies_dibujando_2: "https://res.cloudinary.com/crea-lo/image/upload/v1685416971/Pies_dibujando_2_4a54b33502.jpg",
      pies_sobre_cupula: "https://res.cloudinary.com/crea-lo/image/upload/v1685416974/Pie_sobre_cupula_Edificio_Gloria_Garces_Galeano_6ccea7460a.jpg",
      pies_sobre_cupula_2: "https://res.cloudinary.com/crea-lo/image/upload/v1685416975/Pie_2_sobre_cupula_Edificio_Gloria_Garces_Galeano_1c0b4779bc.jpg",
      pies_tierra: "https://res.cloudinary.com/crea-lo/image/upload/v1685416974/Pies_tierra_concreto_baldosa_64b883cba0.jpg",
      huella_pie: "https://res.cloudinary.com/crea-lo/image/upload/v1685416970/A_Fundirse_huela_pie_png_0e0a6c3529.jpg",
      video1: "https://res.cloudinary.com/crea-lo/video/upload/v1686411427/Resistir_1_0732f0ef98.mov",
      video2: "https://res.cloudinary.com/crea-lo/video/upload/v1686411370/Resistir_2_a5fc30a2e0.mov",
    }
  }, []);

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
      <Container>
      <div id="resistir-background" />
        <IconButton
          aria-label="close"
          onClick={() => {
            window.history.back();
          }}
          sx={{...closeButtonStyles}}
        >
          <CloseIcon />
        </IconButton>
        <Container style={{ zIndex: "3000", background: "unset", display: "block", padding: "0", maxWidth: "1200px" }}>
          <h1
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "46px",
            }}
          >
            Resistir
          </h1>
          <div className="resistir" style={{ maxWidth: "1200px"}}>

            <div className="right">
              <img className="mx--500 mt-5" src={images.palabras_1} alt="" />
            </div>
            <div className="right">
              <img className="mx--500" src={images.palabras_2} alt="" />
            </div>

            <div className="grid-1 gap-1 mt-3">
              <img className="" src={images.pies_sobre_cupula_2} alt="" />
              <img className="" src={images.pies_sobre_cupula} alt="" />
              <img className="" src={images.pies_dibujando_2} alt="" />
            </div>

            <div className="flex gap-1 mt-2 relative">
              <video className="mx--420" autoPlay controls muted src={images.video1}></video>
              <video className="mx--420" autoPlay controls muted src={images.video2}></video>
            </div>

            <div className="grid-1 gap-1 mt-3">
              <img className="" src={images.pies_dibujando_2} alt="" />
              <img className="" src={images.pies_tierra} alt="" />
            </div>

            <div className="flex gap-1 mt-3">
              <img className="" src={images.palabras_3} alt="" />
              <img className="" src={images.palabras_4} alt="" style={{"@media (minWidth: 768px)": { marginTop: "8rem"}}} />
            </div>

            <div className="center mt-3">
              <img className="" src={images.huella_pie} alt="" />
            </div>

            <div className="mt-3 center">
              <img className="mxx--58" src={images.palabras_5} alt="" />
            </div>

            <div className="flex gap-1 mt-3">
              <img className="" src={images.palabras_6} alt="" />
              <img className="" src={images.palabras_7} alt=""  style={{"@media (minWidth: 786px)": { paddingTop: "15rem" }}}/>
            </div>

            <div className="center mt-3">
              <img className="mxx--100" src={images.palabras_8} alt="" />
            </div>
            
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Resistir;
