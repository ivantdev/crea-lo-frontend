import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import HomeScreen from "./screens/HomeScreen";
import AtlasScreen from "./screens/AtlasScreen";
import PedagogiesScreen from "./screens/PedagogiesScreen/PedagogiesScreen";
import FragmentsScreen from "./screens/FragmentsScreen";
import NotFound from "./screens/NotFound";
import HeaderLayout from "./layouts/HeaderLayout";
import Sidebar from "./components/Sidebar";
import Profundidad from "./screens/PedagogiesScreen/profundidad/Profundidad";
import DesahogoScreen from "./screens/DesahogoScreen";
import CrecienteScreen from "./screens/CrecienteScreen";
import CreditosScreen from "./screens/CreditosScreen";
import Descentrar from "./screens/PedagogiesScreen/descentrar/Descentrar";
import Resistir from "./screens/PedagogiesScreen/resistir/Resistir";
import ProximamaneteScreen from "./screens/ProximamenteScreen";

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <HeaderLayout />
        <Sidebar pageWrapId="main-content" outerContainerId="root" right />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/atlas" element={<AtlasScreen />} />
            <Route path="/pedagogies" element={<PedagogiesScreen />} />
            <Route path="/fragments" element={<FragmentsScreen />} />
            <Route path="/pedagogies/profundidad" element={<Profundidad />} />
            <Route path="/pedagogies/descentrar" element={<Descentrar />} />
            <Route path="/pedagogies/resistir" element={<Resistir />} />

            <Route path="/desahogo" element={<DesahogoScreen />} />
            <Route path="/creciente" element={<CrecienteScreen />} />
            <Route path="/credits" element={<CreditosScreen />} />

            <Route path="/mapa-colombia" element={<ProximamaneteScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
