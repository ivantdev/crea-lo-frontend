import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import hoja1 from "../../../../assets/images/profundidad/hoa1.png";
import hoja2 from "../../../../assets/images/profundidad/hoja2.png";
import hoja3 from "../../../../assets/images/profundidad/hoja3.png";
import hoja4 from "../../../../assets/images/profundidad/hoja4.png";
import marmapa from "../../../../assets/images/profundidad/marmapa.png";
import ballena from "../../../../assets/images/profundidad/ballena.jpg";
import picnoclina from "../../../../assets/images/profundidad/picnoclina.png";
import oceanoaire from "../../../../assets/images/profundidad/oceanoarie.png";
import tejidoBallena1 from "../../../../assets/audio/BallenaPrimeraParte.mp3";
import tejidoBallena2 from "../../../../assets/audio/BallenaSegundaParte.mp3";
import tejidoBallena3 from "../../../../assets/audio/BallenaTerceraParte.mp3";
const ModalsProfundidad = () => {
  const [opens, setOpens] = useState(() => {
    let open = new Array(23);
    open.fill(false);
    return open;
  });
  const [stylesC, setStyles] = useState([]);

  const blues = [
    "#5F9EA0",
    "#4682B4",
    "#B0C4DE",
    "#ADD8E6",
    "#B0E0E6",
    "#87CEFA",
    "#87CEEB",
    "#6495ED",
    "#00BFFF",
    "#1E90FF",
    "#4169E1",
    "#0000FF",
    "#0000CD",
    " #00008B",
    "#000080",
    "#191970",
  ];

  const handleClose = (index) => {
    const opensClose = [...opens];
    opensClose[index] = false;
    setOpens(opensClose);
    console.log(index);
  };

  const verifyColumn = (numb) => {
    switch (true) {
      case numb < 5:
        return `${(numb / 5) * 100}%`;
      case 5 <= numb && numb < 10:
        return `${((numb - 5) / 5) * 100}%`;
      case 10 <= numb && numb < 15:
        return `${((numb - 10) / 5) * 100}%`;
      case 15 <= numb && numb < 20:
        return `${((numb - 15) / 5) * 100}%`;
      case 20 <= numb && numb < 25:
        return `${((numb - 20) / 5) * 100}%`;
      case 25 <= numb && numb < 30:
        return `${((numb - 25) / 5) * 100}%`;
      default:
        return `${((numb - 30) / 5) * 100}%`;
    }
  };

  const verifyRow = (numb) => {
    switch (true) {
      case numb < 5:
        return `0%`;
      case 5 <= numb && numb < 10:
        return `25%`;
      case 10 <= numb && numb < 15:
        return `calc(50% - 300px)`;
      case 20 <= numb && numb < 25:
        return `calc(75% - 300px)`;
      case 25 <= numb && numb < 30:
        return `calc(80% - 300px)`;
      case 30 <= numb && numb < 35:
        return `calc(10% - 300px)`;
      case 35 <= numb && numb < 40:
        return `calc(35% - 300px)`;
      default:
        return `calc(85% - 300px)`;
    }
  };

  const aleatoryBackground = () => {
    return blues[Math.floor(Math.random() * blues.length)];
  };

  const stylesA = () => {
    wordsProvocations.forEach((word, index) => {
      stylesC.push({
        position: "absolute",
        top: verifyColumn(index),
        left: verifyRow(index),
        bgcolor: aleatoryBackground(),
        boxShadow: 24,
        p: 4,
        color:"white"
      });
    });
    console.log(stylesC);
    setStyles(stylesC);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };
  const wordsProvocations = [
    { media: "img", src: ballena },
    "Las ballenas cantan ¿qué cantan?",
    "Mar de palabras.  ",
    { media: "img", src: hoja1 },
    "Quien lo mira lo ve por vez primera, siempre.",
    { media: "img", src: marmapa },
    { media: "img", src: hoja3 },
    "¿Que es la profundidad?",
    { media: "img", src: picnoclina },
    "Perdida de la dirección",
    { media: "audio", src: tejidoBallena3 },
    "El mar como ecosistema de relacionamientos",
    { media: "img", src: hoja2 },
    { media: "img", src: oceanoaire },
    "Duermo en una cama un poco más azul que el mar. Storni",

    "Ballenas: El destello de las estrellas del universo",
    { media: "img", src: hoja4 },
    "Brŭzdan-bordar: estar en el borde",

    "Mar movido por viento y gravedad",
    { media: "audio", src: tejidoBallena2 },
    "Salado",
    "Dulce",
    { media: "audio", src: tejidoBallena1 },
  ];

  const controlModalsProfundidad = () => {
    setTimeout(() => {
      const opensStates = [...opens];
      opensStates.fill(true);
      setOpens(opensStates);
      console.log(opens);
    }, 60000);
  };

  useEffect(() => {
    stylesA();
    //   inicializerStates();
    console.log(stylesC);
    controlModalsProfundidad();
  }, []);

  console.log(hoja1);

  return (
    <div>
      {wordsProvocations.map((word, index) => (
        <Modal
          open={opens[index]}
          onClose={() => handleClose(index)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          key={index}
         
        >
          <Box sx={stylesC[index]} id="boxModal">
            <Typography id="modal-modal-title" variant="h6" component="h2" style={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "25px"
            }}>
              {typeof word == "string" ? (
                word
              ) : word.media == "img" ? (
                <img src={word.src} width={350} />
              ) : word.media == "audio" ? (
                <audio controls>
                  <source src={word.src} type="audio/mpeg" />
                </audio>
              ) : (
                <video width="" height="" controls></video>
              )}
            </Typography>
            <Button
              style={{ color: "whitesmoke" }}
              onClick={() => handleClose(index)}
            >
              X
            </Button>
          </Box>
        </Modal>
      ))}
    </div>
  );
};

export default ModalsProfundidad;
