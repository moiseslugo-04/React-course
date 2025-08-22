import type { SquareValue } from '@/types'
import { Square } from './Square'
export function Board({
  board,
  updateBoard,
}: {
  board: SquareValue[]
  updateBoard: (index: number) => void
}) {
  return (
    <section className='game'>
      {board.map((value, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {value}
          </Square>
        )
      })}
    </section>
  )
}
