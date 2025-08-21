import { useEffect, useState } from 'react'
import type { CatFactProps, CatImageProps } from '../types/index'
import { fetchData } from '../utils/fetchData'
import { getThreeFirstWorld } from '../utils'

const CAT_FACT_URL = 'https://catfact.ninja/fact'
export function useFact() {
  const [fact, setFact] = useState<CatFactProps | undefined>(undefined)
  const [imgFact, setImgFact] = useState<CatImageProps | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)
  const getRandomFact = async () => {
    setLoading(true)
    try {
      const result = await fetchData(CAT_FACT_URL)
      setFact(result)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown Error'
      setError(message)
      console.error('Error:', message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getRandomFact()
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWorlds = getThreeFirstWorld(fact.fact)
    const getImgFromRandomFact = async () => {
      try {
        setLoading(true)
        const END_POINT = `https://cataas.com/cat/says/${threeFirstWorlds}?json=true`
        const response = await fetchData(END_POINT)
        const { id, url } = response
        setImgFact({ id, url })
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error'
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    getImgFromRandomFact()
  }, [fact])
  return { fact, imgFact, error, loading, getRandomFact }
}
