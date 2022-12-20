import React, { useMemo } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../hooks";
import pdfDesahogo from "../assets/pdfs/Desahogo-21-11-22-bajaWebpages.pdf";
const Container = styled("div")(({ theme }) => ({
  fontFamily: "ui-monospace, monospace",
  padding: "4rem",
  color: "white",
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#E9EFF2",
}));

const DesahogoScreen = () => {
  const theme = useTheme();
  const { isMobile } = useDeviceDetect();

  const styleTypography = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "21px",
    lineHeight: "25px",
  };
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
    <div style={styleTypography}>
      <AppropiateContainer>
        <Container
        
        >
          <h1 style={{ color: "red" }}>Desahogo</h1>
        </Container>
        <Container   style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <embed
            src={pdfDesahogo}
            type="application/pdf"
            width={430}
            height={630}
          />
        </Container>
      </AppropiateContainer>
    </div>
  );
};

export default DesahogoScreen;
