import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import logo_crealo from '../assets/images/logo crea-lo.png'
import logo_cultura_1 from '../assets/images/logo_cultura_1.svg'
import logo_cultura_2 from '../assets/images/logo_cultura_2.svg'
import logo_bienestar from '../assets/images/logo_bienestar.png'
import logo_unal from '../assets/escudo.png'

const Container = styled('div')(({ theme }) => ({
  width: "100vw",
  position: "relative",
  padding: "1rem 0",
  scrollSnapType: "x mandatory",
  overflowY: "hidden",
  display: "flex",
  backgroundColor: "#173040",
  // media queries
  '@media (max-width: 375px)': {
    width: "clamp(280px, 5vw, 300px)",
  }
}))

const Section = styled('section')(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  maxHeight: "100%",
  scrollSnapAlign: "start",
  flex: "none",
  gap: "1rem",
  overflowX: "scroll",
  '&::-webkit-scrollbar': {
    display: "none"
  },
  '& > img': {
    width: "clamp(100px, 20vw, 200px)",
    height: "auto",
    margin: "0 1rem",
    // media queries
    '@media (max-width: 375px)': {
      width: "clamp(80px, 10vw, 100px)",
    }
  },
}))

const FooterLogos = ({ isHome = false }) => {
  return (
    <Container>
      <Section>
        {
          !isHome && <img src={logo_crealo} alt="logo_crealo" />
        }
        <img src={logo_cultura_1} alt="logo_cultura_1" style={{ maxWidth: "100px", borderTopRightRadius: "30px", borderBottomLeftRadius: "30px" }} />
        <img src={logo_bienestar} alt="bienestar" style={{ minWidth: "300px" }} />
        <img src={logo_unal} alt="unal" style={{ minWidth: "250px" }} />

      </Section>
    </Container>
  )
}

export default FooterLogos
