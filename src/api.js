export async function getRanking () {
    const apiUrl = import.meta.env.VITE_API_URL

    const response = await fetch(apiUrl)
    const data = await response.json()

    return data
}