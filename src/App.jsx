import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './contexts/ThemeContext'
import HomeScreen from './screens/HomeScreen'
import EditorialScreen from './screens/EditorialScreen'
import GlossaryScreen from './screens/GlossaryScreen'
import TagScreen from './screens/TagScreen'
import NotFound from './screens/NotFound'
import HeaderLayout from './layouts/HeaderLayout'

function App() {
  return (
    <ThemeContextProvider>
      <HeaderLayout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/editorial" element={<EditorialScreen />} />
          <Route path="/glossary" element={<GlossaryScreen />} />
          <Route path="/tags/:tag" element={<TagScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App

