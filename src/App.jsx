import './App.css'
import { Route, Routes } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'
import { HomeScreen, TagScreen, EditorialScreen, GlossaryScreen, NotFound } from "./screens"
function App() {

  return (
    <ThemeContextProvider>
      <Routes location={location}>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/editorial" element={<EditorialScreen />} />
        <Route path="/glossary" element={<GlossaryScreen />} />
        <Route path="/tags/:tag" element={<TagScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContextProvider>
  )
}

export default App
