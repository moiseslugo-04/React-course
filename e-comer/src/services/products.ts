async function getAllProducts(endPoint: string) {
  try {
    const response = await fetch(endPoint)
    if (!response.ok) throw new Error('Error getting Products')
    const { products } = await response.json()
    return products
  } catch (err) {
    console.error(err)
    throw err
  }
}
async function getAllCategories(endPoint: string) {
  try {
    const response = await fetch(endPoint)
    if (!response.ok) throw new Error('Error getting all Categories')
    const categories = await response.json()
    return categories
  } catch (error) {
    console.error(error)
    throw error
  }
}
export { getAllProducts, getAllCategories }
