import type { SquareProps } from '@/types'

export function Square({
  children,
  updateBoard,
  index,
  isSelected,
}: SquareProps) {
  const className = isSelected ? 'square is-selected' : 'square'
  const handleClick = () => {
    if (index === undefined || index === null || !updateBoard) return
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
