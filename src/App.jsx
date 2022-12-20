import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./contexts/ThemeContext";
import HomeScreen from "./screens/HomeScreen";
import AtlasScreen from "./screens/AtlasScreen";
import PedagogiesScreen from "./screens/PedagogiesScreen/PedagogiesScreen";
import FragmentsScreen from "./screens/FragmentsScreen";
import TagScreen from "./screens/TagScreen";
import NotFound from "./screens/NotFound";
import HeaderLayout from "./layouts/HeaderLayout";
import Sidebar from "./components/Sidebar";
import Profundidad from "./screens/PedagogiesScreen/profundidad/Profundidad";

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
            <Route path="/tags/:tag" element={<TagScreen />} />
            <Route path="/pedagogies/profundidad" element={<Profundidad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App;
