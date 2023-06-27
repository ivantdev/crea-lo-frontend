import { useState, useEffect } from 'react'

const useStaticFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        fetchTags()
    },[])
    return { loading, error, data }
}

export { useStaticFetch }