import React, { useEffect, useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../../hooks";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import "./Descentrar.css";
import { Button, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ModalDescentrar from "./components/ModalDescentrar";
import AsideDescentrar from "./components/AsideDescentrar";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  margin: "10px",
  padding: "1rem",
  maxWidth: "100%",
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

const ContainerBody = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1001,
  backgroundColor: theme.palette.background.default,
}));

const Descentrar = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();
  const [open, setOpen] = useState(false);
  const [indexContent, setIndexContent] = useState(0);
  const handleOpen = (i) => {
    setOpen(true);
    setIndexContent(i);
  };
  const handleClose = () => setOpen(false);

  const srcButton = [
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837490/dev/A/2_bm4frq.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837531/dev/B/3._olores_que_narran._mafe_m8r4eo.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837540/dev/C/4.gabi._experiencia_plaza_ztx0jl.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837708/dev/D/3.olores_que_narran._laura_ovlh3k.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837718/dev/E/1_zc7gi9.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671838764/dev/F/IMG_39071_5x_oaqhsx.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837751/dev/G/1_sjatih.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837756/dev/H/2._Cierre_sikuris._Jorge_Torres_dsrngy.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837768/dev/I/2._laboratorio_sensible._Miguel_o6emqw.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837781/dev/J/3._memorias_yscf9z.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671837800/dev/K/k1_kcaki0.png",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839281/dev/L/3._jonathan.cierre_con_sikuris_fjndzf.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839347/dev/M/1._sarakamila._cena_y_experiencia_plaza_u9s2j1.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839398/dev/N/2._catalina_daza._cierre_con_sikuris_e0sbbz.jpg",
    "https://res.cloudinary.com/crea-lo/image/upload/v1671839464/dev/Ni/WhatsApp_Image_2022-12-13_at_8.25.37_PM_1_tibttt.jpg",
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
    <ContainerBody>
      <div id="descentrar-background" />
        <IconButton
          aria-label="close"
          onClick={() => {
            window.history.back();
          }}
          sx={{...closeButtonStyles}}
        >
          <CloseIcon />
        </IconButton>
        <Container>
          <div style={{ maxWidth: "1350px", width: "100%"}}>
            <Grid
              container
              spacing={2}
              columns={12}
              style={{ padding: "0", margin: "0 auto", maxWidth: "100%", gap: "20px" }}
            >
              <Grid
                item
                container
                spacing={2}
                xs={3.8}
                justifyContent={"center"}
                alignContent={"flex-start"}
                style={{marginTop:"20rem", gap: "20px"}}
              >
                {srcButton.map((element, index) => (
                  <Grid item xs={3} key={index} style={{ maxWidth: "100%", padding: "0"}}>
                    <Item style={{ width: "max-content", maxWidth: "100%", margin: "0 auto" }}>
                      <Button
                        onClick={() => handleOpen(index)}
                        style={{ zIndex: 2001, margin: 0, padding: 0 }}
                      >
                        <img src={element} style={{ width: "100%", maxWidth: "213px", aspectRatio: "1 / 1", objectFit: "cover"}} />
                      </Button>
                    </Item>
                  </Grid>
                ))}
              </Grid>

              <Grid
                item
                xs={7.3}
                md={7.8}
                container
                style={{ padding: "0"}}
              >
                <Item style={{ width: "100%", maxWidth: "100%", background: "none", color: "#ffffff", textAlign: "unset" }}>
                  <AsideDescentrar />
                </Item>
              </Grid>
            </Grid>
            <ModalDescentrar open={open} indexContent={indexContent} handleClose={handleClose} style={{zIndex:2001}}/>
          </div>
        </Container>
    </ContainerBody>
  );
};

export default Descentrar;
