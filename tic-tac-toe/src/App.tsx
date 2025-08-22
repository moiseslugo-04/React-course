import { Square } from './components/Square'
import { TURNS } from './constants'
import './App.css'
import { useBoard } from './hooks/useBoard'
import { ModalWinner } from './components/ModalWinner'
import { Board } from './components/Board'
function App() {
  const { board, turn, winner, updateBoard, resetGame } = useBoard()
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>X</Square>
        <Square isSelected={turn === TURNS.o}>O</Square>
      </section>
      {winner !== null && <ModalWinner winner={winner} resetGame={resetGame} />}
    </main>
  )
}

export default App
