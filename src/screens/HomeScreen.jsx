import React, { useEffect } from 'react'
import { getTagsByCategory } from "../api"

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
    <div>Home</div>
  )
  u
}

export default HomeScreen