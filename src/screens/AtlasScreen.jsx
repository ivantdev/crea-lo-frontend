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
import { useLazyQuery } from '@apollo/client'
import { GET_TAGS_BY_CATEGORY } from '../graphql/queries/getAllTags'



const AtlasScreen = () => {
  const [pasoTags, setPasoTags] = React.useState([])
  const [pisadaTags, setPisadaTags] = React.useState([])
  const [huellaTags, setHuellaTags] = React.useState([])
  const { radius, dampingFactor, farFog } = useControls({
    radius: 25,
    dampingFactor: 0.1,
    farFog: 0,
  })

  const [getPasoTags, { data: pasoTagsResponse }] = useLazyQuery(GET_TAGS_BY_CATEGORY);
  const [getPisadaTags, { data: pisadaTagsResponse }] = useLazyQuery(GET_TAGS_BY_CATEGORY);
  const [getHuellaTags, { data: huellaTagsResponse }] = useLazyQuery(GET_TAGS_BY_CATEGORY);

  useEffect(() => {
    getPasoTags({ variables: { category: "paso" } });
    getPisadaTags({ variables: { category: "pisada" } });
    getHuellaTags({ variables: { category: "huella" } });
  }, [getPasoTags, getPisadaTags, getHuellaTags]);
  
  useEffect(() => {
    if (pasoTagsResponse) {
      setPasoTags(pasoTagsResponse.tags.data)
    }
  }, [pasoTagsResponse])

  useEffect(() => {
    if (pisadaTagsResponse) {
      setPisadaTags(pisadaTagsResponse.tags.data)
    }
  }, [pisadaTagsResponse])
  
  useEffect(() => {
    if (huellaTagsResponse) {
      setHuellaTags(huellaTagsResponse.tags.data)
    }
  }, [huellaTagsResponse])

  if (pisadaTags.length > 0 && pasoTags.length > 0 && huellaTags.length > 0) {
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
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  )

}

export default AtlasScreen