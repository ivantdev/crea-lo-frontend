import React, { useMemo } from "react";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Gallery from "../components/Gallery";
import pdfDesahogo from "../assets/pdfs/Desahogo-21-11-22-bajaWebpages.pdf";
import desahogo_background from "../assets/images/desahogo_background.jpg";

const Container = styled("div")(({ theme }) => ({
  position: "relative",
  fontFamily: "ui-monospace, monospace",
  padding: "2rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
}));

const DesahogoScreen = () => {
  const theme = useTheme();

  const styleTypography = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "21px",
    lineHeight: "25px",
  };

  return (
      <Container style={{ minHeight: "100vh", }}>
        <div style={{ 
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url('${desahogo_background}')`,
          
          }}></div>
        <Container style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 0 0 0" }}>
          <h1>Desahogo</h1>
          <Container   style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
            }}>
              <Typography variant="body1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, vero soluta deserunt animi hic eos consequuntur quae maiores magni consectetur quod dolor tempore quasi dolorum non beatae unde reprehenderit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit laboriosam libero, nisi voluptatum dolorem iure ratione at ipsum perspiciatis incidunt architecto quasi, quia, voluptates saepe iusto necessitatibus et nesciunt.
              </Typography>

          </Container>
          <Container
            style={{
              padding: "2rem 0",
            }}
          >
            <h2 style={{ fontWeight: "500", fontSize: "1.8rem"}}>
              Fotografías
            </h2>

            <Gallery imageUrls=
              {[
                "https://picsum.photos/seed/picsum/2500/1667/",
                "https://picsum.photos/seed/1/2500/1667/",
                "https://picsum.photos/seed/2/2500/1667/",
                "https://picsum.photos/seed/3/2500/1667/",
                "https://picsum.photos/seed/4/2500/1667/",
                "https://picsum.photos/seed/5/2500/1667/",
                "https://picsum.photos/seed/6/2500/1667/",
                "https://picsum.photos/seed/7/2500/1667/",
                "https://picsum.photos/seed/8/2500/1667/",
                "https://picsum.photos/seed/9/2500/1667/",
              ]}
              styles={{ margin: "2rem 0" }}
            />
          </Container>
        </Container>
      </Container>
  );
};

export default DesahogoScreen;
