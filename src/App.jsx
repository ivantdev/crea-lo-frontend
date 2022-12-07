import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeScreen, TagScreen, EditorialScreen, NotFound } from "./screens"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/editorial" element={<EditorialScreen />} />
        <Route path="/tags/:tag" element={<TagScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
