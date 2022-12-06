import React, { useEffect, useRef } from 'react'
import "../css/HomeScreen.css"
import { getTagsByCategory } from "../api"
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useScreenSize } from '../hooks'
import { useControls } from "leva"
import Cylinder from '../components/Cylinder'

const HomeScreen = () => {
  const [pasoTags, setPasoTags] = React.useState([])
  const [pisadaTags, setPisadaTags] = React.useState([])
  const [huellaTags, setHuellaTags] = React.useState([])
  const { width, height } = useScreenSize()
  const { cylinderHeight, radius, dampingFactor, backgroundColor } = useControls(
    {
      cylinderHeight: 1,
      radius: 4.3,
      dampingFactor: 0.1,
      backgroundColor: "#000000"
    })
  const firstCylinder = useRef()
  const secondCylinder = useRef()
  const thirdCylinder = useRef()

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

  const changeBackgroundColor = (e) => {
    //change backgroundColor based on camera position: x and z changes
    console.log(e.target.object.position)

  }

  return (
    <div id="canvas-container">
      <Canvas className='canvas'>
        <Foo />
        <axesHelper args={[60, 60, 60]} />
        <color attach="background" args={[backgroundColor]} />
        <fog attach="fog" args={[backgroundColor, 0, 80]} />
        <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} dampingFactor={dampingFactor} onChange={changeBackgroundColor} />
        <ambientLight intensity={0.4} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Cylinder height={4} radius={20} columns={10} spacing={3} />
      </Canvas>
    </div>
  )
}

const Foo = () => {
  const { camera } = useThree()
  const { cameraPosition } = useControls({ cameraPosition: { x: 0, y: 0, z: 40 } })
  useEffect(() => {
    camera.position.x = cameraPosition.x
    camera.position.y = cameraPosition.y
    camera.position.z = cameraPosition.z
  }, [cameraPosition])

}

export default HomeScreen