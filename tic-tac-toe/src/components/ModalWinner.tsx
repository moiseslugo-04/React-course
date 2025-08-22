import { Square } from './Square'
import type { ModalWinnerProps } from '@/types'
export function ModalWinner({ winner, resetGame }: ModalWinnerProps) {
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winner === false ? 'Tie' : 'Winner'}</h2>
        <header className='win'>{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Play Again</button>
        </footer>
      </div>
    </section>
  )
}
