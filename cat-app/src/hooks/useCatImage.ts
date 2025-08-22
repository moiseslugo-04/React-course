import { useState, useEffect } from 'react'
import type { CatImageProps } from '../types'
import { getCatImage } from '../services/fact'
import { getThreeFirstWorld } from '../utils'

export function useCatImage({ fact }: { fact: string | undefined }) {
  const [imgFact, setImgFact] = useState<CatImageProps | undefined>(undefined)
  const [error, setError] = useState<null | string>(null)
  useEffect(() => {
    if (!fact) return
    const threeFirstWorlds = getThreeFirstWorld(fact)
    const END_POINT = `https://cataas.com/cat/says/${threeFirstWorlds}?json=true`

    const getImgFromRandomFact = async () => {
      try {
        const result = await getCatImage(END_POINT)
        setImgFact(result)
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown Error'
        setError(message)
      }
    }
    getImgFromRandomFact()
  }, [fact])
  return { imgFact, error }
}
