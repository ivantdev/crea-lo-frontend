import React, { useEffect, useMemo, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../../hooks";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import "./Descentrar.css";
import { Grid } from "@mui/material";
const Container = styled("div")(({ theme }) => ({
  fontFamily: "ui-monospace, monospace",
  padding: "4rem",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#2F4F4F",
}));
const Descentrar = () => {
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div id="descentrar-background" />
      <AppropiateContainer>
        <Container>
          <h1
            style={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "38px",
              lineHeight: "46px",
            }}
          >
            Descentramientos
          </h1>
          <br />
          <Grid
           container
           direction="column"
           justifyContent="flex-end"
           alignItems="flex-start"
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Container>
      </AppropiateContainer>
    </>
  );
};

export default Descentrar;
