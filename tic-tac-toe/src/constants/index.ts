import type { SquareValue, TurnType, WinnerCombo } from '@/types'

const TURNS: TurnType = {
  x: 'X',
  o: 'O',
}

const WINNER_COMBOS: WinnerCombo[] = [
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna
  [0, 4, 8], // Diagonal principal
  [2, 4, 6], // Diagonal secundaria
]
const INITIAL_STATE: SquareValue[] = Array(9).fill(null)
export { TURNS, INITIAL_STATE, WINNER_COMBOS }
