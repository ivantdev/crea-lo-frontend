import React, { useEffect } from 'react'
import "../css/HomeScreen.css"
import { getTagsByCategory } from "../api"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const HomeScreen = () => {
  const [pasoTags, setPasoTags] = React.useState([])
  const [pisadaTags, setPisadaTags] = React.useState([])
  const [huellaTags, setHuellaTags] = React.useState([])

  useEffect(() => {
    const fetchTags = async () => {
      const pasoTags = await getTagsByCategory("paso")
      const pisadaTags = await getTagsByCategory("pisada")
      const huellaTags = await getTagsByCategory("huella")
      setPasoTags(pasoTags.data)
      setPisadaTags(pisadaTags.data)
      setHuellaTags(huellaTags.data)
    }
    fetchTags()
  }, [])

  return (
    <div id="canvas-container">
      <Canvas className='canvas'>
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh >
          <cylinderGeometry args={[5, 5, 5, 32, 6
          ]} />
          <meshStandardMaterial wireframe transparent />
        </mesh>
      </Canvas>
    </div>
  )
}

export default HomeScreen