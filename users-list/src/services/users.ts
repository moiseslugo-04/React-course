import type { User } from '../types'

const API_URL = 'https://randomuser.me/api/?results=3&seed=moisesdev'
export async function fetchUsers(): Promise<{ users: User[] }> {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Error getting Users')
    const { results } = await response.json()
    return { users: results }
  } catch (err) {
    console.error(err)
    const message = typeof Error === err ? err : 'Unknown Error'
    throw message
  }
}
