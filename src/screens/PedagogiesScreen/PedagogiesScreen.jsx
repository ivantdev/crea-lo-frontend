import React, { useMemo } from "react";
import { styled } from "@mui/system";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTheme } from "@mui/material/styles";
import { useDeviceDetect } from "../../hooks";
import { Button, Grid } from "@mui/material";
import "./PedagogiesScreen.css";
import { useNavigate } from "react-router-dom";




const Container = styled("div")(({ theme }) => ({
  fontFamily: "ui-monospace, monospace",
  padding: "3rem",
  marginLeft: "1rem",
  color: theme.palette.text.primary,
  lineHeight: "21px",
  "--webkit-user-elect": "none",
  userSelect: "none",
  backgroundColor: "#F8F9F9 ",
 
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
    <AppropiateContainer >
      <Container>
        <h1 className="grid"> Pedagogias</h1>
      </Container>
      <Container style={{justifyContent: "center", display:"flex"}}>
        <div className="grid">
          <Button
            variant="contained"
            className="Button"
            style={{ color: "white", flexGrow:"initial", margin:"10px", fontWeight:"bold" }}
            onClick={()=> navigate("/pedagogies/profundidad")}
          >
            Profundidad
          </Button>
          <Button
            variant="contained"
            className="Button"
            style={{ color: "white", flexGrow:"initial", margin:"10px" }}
            onClick={()=> navigate("/pedagogies/descentrar")}
          >
            Descentrar
          </Button>

          <Button
            variant="contained"
            className="Button"
            style={{ color: "white", flexGrow:"initial", margin:"10px" }}
            onClick={()=> navigate("/pedagogies/resistir")}
          >
            Resistir
          </Button>
        </div>
      </Container>
      <Container>
        <h3>
          Maecenas arcu augue, posuere sit amet elit ut, congue pulvinar risus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nullam blandit hendrerit bibendum. Proin sed
          lacus tristique, hendrerit magna eget, viverra leo. Maecenas tempus
          gravida vestibulum.
        </h3>
        <br />
        <p>
          Maecenas tincidunt tempus velit, vel sagittis arcu imperdiet ac. Donec
          pretium ante neque. Aliquam nisi urna, iaculis quis sodales a, auctor
          a enim. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Proin vehicula, sapien quis porta
          congue, enim metus auctor libero, ut convallis leo neque eu metus.
          Maecenas ut ipsum quis urna mattis convallis id non dolor. In hac
          habitasse platea dictumst. Aliquam eu dignissim massa. Morbi eget
          tempus magna. Proin neque mi, faucibus non enim in, commodo volutpat
          ipsum. Quisque convallis consectetur metus sodales pretium. Donec
          elementum purus et mauris placerat, ultrices tristique nunc pretium.
          Vestibulum bibendum quis nibh eget finibus. Quisque aliquet erat
          justo, ut condimentum mauris dapibus a. Donec interdum, lectus sit
          amet congue tincidunt, nisl dolor pharetra sem, ut sagittis sapien
          risus ut ex. In accumsan eleifend faucibus. Duis tristique venenatis
          pellentesque. Nulla facilisi. Aenean nunc magna, porttitor non dapibus
          et, maximus et lectus. Sed blandit condimentum mi, cursus auctor est
          vehicula vitae. Integer massa mi, mattis ac libero eget, varius
          bibendum mauris. Duis dictum, quam a feugiat bibendum, enim nisi
          facilisis purus, ac fringilla eros. Proin vitae magna lorem. Morbi sit
          amet risus vestibulum ex tempus convallis nec id lacus. Pellentesque
          rutrum orci eu massa sodales ultricies. Aenean venenatis consequat
          enim eu porttitor. Quisque rutrum ut felis ac efficitur. Nulla semper
          tristique vulputate. Sed a sem finibus, tincidunt eros vel, feugiat
          leo. Maecenas rhoncus tempus metus, maximus dapibus metus ultricies
          eget. Pellentesque vel dolor vel massa efficitur egestas. Nullam purus
          ligula, egestas non justo ut, scelerisque commodo purus. Quisque
          blandit volutpat ipsum a interdum. Curabitur in nisl lectus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras lobortis finibus leo, accumsan ultricies libero
          varius vel. Integer faucibus pellentesque velit, ut maximus lacus
          maximus a. Vivamus metus lacus, pulvinar ut feugiat quis, vestibulum
          vitae ipsum. Vivamus dolor turpis, mattis sed urna id, lacinia
          facilisis. Curabitur luctus facilisis risus. Nam non eros ac tellus
          maximus tincidunt a sed augue. Aenean in orci nisi. Etiam mollis
          dictum ligula et aliquam. Integer et elementum erat. Maecenas
          ultricies nec ex ac dictum. Vivamus accumsan dolor elit, at euismod
          lorem efficitur eu. Proin tempus, massa sit amet mollis placerat,
          lectus ante lacinia ipsum, eu porta eros felis a mauris. Aenean
          egestas vitae lacus a mollis. Proin eu eros sed leo imperdiet mollis
          ac id orci. Etiam vel dapibus ex. Nunc finibus nunc ligula, nec porta
          leo facilisis sed. Phasellus semper ac massa id mollis. Ut venenatis,
          metus vitae dignissim pulvinar, elit lorem molestie elit, eu venenatis
          erat sem eget neque. Maecenas in pharetra nunc. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec pellentesque ullamcorper
          justo. Morbi vulputate eleifend purus eu dapibus. Vestibulum gravida
          tincidunt nisl, non.
        </p>
      </Container>
    </AppropiateContainer>
  );
};

export default PedagogiesScreen;
