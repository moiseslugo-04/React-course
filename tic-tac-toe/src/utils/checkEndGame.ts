import type { SquareValue } from '@/types'
export function checkEndGame(board: SquareValue[]) {
  return board.every((square) => square !== null)
}
