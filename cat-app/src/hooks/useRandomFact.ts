import { useEffect, useState } from 'react'
import type { CatFactProps } from '../types'
import { getRandomFact } from '../services/fact'
const CAT_FACT_URL = 'https://catfact.ninja/fact'

export function useRandomFact() {
  const [error, setError] = useState<string | null>(null)
  const [fact, setFact] = useState<CatFactProps | undefined>(undefined)
  const refreshFact = async () => {
    try {
      const newFact = await getRandomFact(CAT_FACT_URL)
      setFact(newFact)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown ERROR'
      setError(message)
    }
  }

  useEffect(() => {
    refreshFact()
  }, [])
  return { error, fact, refreshFact }
}
