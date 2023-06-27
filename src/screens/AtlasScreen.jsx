import React, { useEffect, Suspense } from 'react'
import "../css/AtlasScreen.css"
import { getTagsByCategory } from "../api"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import { useControls } from "leva"
import Cloud from '../components/Cloud'
import LevaCameraControls from "../components/LevaCameraControls"
import Connections from '../components/Connections'
import DynamicBackground from '../components/DynamicBackground'
import LevaConfiguration from '../components/LevaConfiguration'

const AtlasScreen = () => {
  const [pasoTags, setPasoTags] = React.useState([])
  const [pisadaTags, setPisadaTags] = React.useState([])
  const [huellaTags, setHuellaTags] = React.useState([])
  const { radius, dampingFactor, farFog } = useControls(
    {
      radius: 25,
      dampingFactor: 0.1,
      farFog: 0,
    },)

  useEffect(() => {
    const fetchTags = async () => {
      const STATIC = import.meta.env.VITE_STATIC
      const pasoTags = STATIC === "1" ? await (await fetch(`/api/tags/paso.json`)).json() : await getTagsByCategory("paso")
      const pisadaTags = STATIC === "1" ? await (await fetch(`/api/tags/pisada.json`)).json() : await getTagsByCategory("pisada")
      const huellaTags = STATIC === "1" ? await (await fetch(`/api/tags/huella.json`)).json() : await getTagsByCategory("huella")
      setPasoTags(pasoTags.data.data)
      setPisadaTags(pisadaTags.data.data)
      setHuellaTags(huellaTags.data.data)
    }
    fetchTags()
  }, [])

  return (
    <>
      <LevaConfiguration />
      <div id="atlas-background" />
      <div id="canvas-container">
        <Canvas className='canvas' camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <DynamicBackground />
            <LevaCameraControls />
            <fog attach="fog" near={0} far={farFog} />
            <OrbitControls dampingFactor={dampingFactor} />
            <ambientLight intensity={0.4} />
            <Cloud count={6} radius={radius} tags={Array.prototype.concat(pasoTags, pisadaTags, huellaTags)} />
            <Connections count={6} radius={radius} tags={Array.prototype.concat(pasoTags, pisadaTags, huellaTags)} />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  )
}

export default AtlasScreen