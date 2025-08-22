type SquareValue = 'X' | 'O' | null
type WinnerCombo = [number, number, number]

interface TurnType {
  x: 'X'
  o: 'O'
}
interface SquareProps {
  isSelected?: boolean
  children: React.ReactNode
  updateBoard?: (index: number) => void
  index?: number
}
interface ModalWinnerProps {
  winner: SquareValue | false
  resetGame: () => void
}

export type {
  TurnType,
  SquareProps,
  SquareValue,
  WinnerCombo,
  ModalWinnerProps,
}
