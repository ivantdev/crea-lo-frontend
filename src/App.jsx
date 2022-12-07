import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen, TagScreen, EditorialScreen, NotFound } from "./screens"
function App() {
  return (
    <Routes location={location}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/editorial" element={<EditorialScreen />} />
      <Route path="/tags/:tag" element={<TagScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
