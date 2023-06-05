import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const styleTypography = {
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "25px",
  color: "black",
};

export default function ModalPoema() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    console.log("first");
    setOpen(false);
    console.log(open);
  };

  const ControlModalPoema = () => {
    setTimeout(() => {
      if (open == false) {
        setOpen(true);
      }
    }, 10000);
  };
  
  useEffect(() => {
    ControlModalPoema();
  }, []);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="boxModal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={styleTypography}
          >
            BALLENA-TRUENO{" "}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={styleTypography}
          >
            Aguantar la respiración <br /> ir adentro al adentro del adentro al
            centro <br />
            del mundo líquido con un oído pulpo membrana que resuene todos los
            cantos submarinos. <br /> <br />
            Tomar una bocanada de aire que acoja la incertidumbre del medio
            cambiante <br /> una que llene los pulmones y que permita la
            inmersión. <br />
            <br />
            Las bocanadas de aire hacen atmósfera. <br /> Allí nos encontramos{" "}
            <br />
            Pirarucú, Ballena, Humana <br /> <br />
            Lo profundo suena a rumor, a retumbar, a ronroneo, a letra R: <br />{" "}
            rugido revoloteo ritmo repetición. <br /> <br />
            Allá donde, ¿dónde? en el aire-océano… Un grave sonido de marea
            interoceánica pulula. un océano, un océano de palabras.
          </Typography>
          <Button color="error" onClick={() => handleClose()}>
            X
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
