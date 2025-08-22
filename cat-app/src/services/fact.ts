async function getRandomFact(endPoint: string) {
  try {
    console.log(endPoint, 'endpoint')
    const response = await fetch(endPoint)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Fetch Error:', error)
    throw error
  }
}

async function getCatImage(endPoint: string) {
  try {
    const response = await fetch(endPoint)
    if (!response.ok) throw new Error('Error getting the image Cat')
    const { id, url } = await response.json()
    return { id, url }
  } catch (error) {
    console.error(error)
  }
}

export { getRandomFact, getCatImage }
