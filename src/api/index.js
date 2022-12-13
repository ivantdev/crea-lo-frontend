import axios from "axios"
const BASE_URL = "https://strapi-production-faee.up.railway.app"

const getTagsByCategory = async (category) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate=%2A&filters[category][name][$eq]=${category}`)
    return data
}

const getTagImages = async (tag) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate[images][populate][0]=link&filters[name][$eq]=${tag}`)
    return data
}

const getTagVideos = async (tag) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate[0]=videos&filters[name][$eq]=${tag}`)
    return data
}

const getTagCreations = async (tag) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate[0]=creations&filters[name][$eq]=${tag}`)
    return data
}

const getTagContent = async (tag) => {
    const images = await getTagImages(tag)
    const videos = await getTagVideos(tag)
    const creations = await getTagCreations(tag)
    return { images, videos, creations }
}

const getConcepts = async () => {
    const data = await axios.get(`${BASE_URL}/api/concepts`)
    return data
}

export { getTagsByCategory, getTagContent }