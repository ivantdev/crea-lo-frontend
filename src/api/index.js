import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_API_URL

const getTagsByCategory = async (category) => {
    const data = await axios.get(`${BASE_URL}/api/tags?populate=%2A&sort[1]=id&filters[category][name][$eq]=${category}`)
    return data
}

export { getTagsByCategory }
