import { WINNER_COMBOS } from '@/constants'
import type { SquareValue } from '@/types'
export function checkWinner(board: SquareValue[]) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}
