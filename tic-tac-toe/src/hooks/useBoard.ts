import { useState } from 'react'
import { TURNS, INITIAL_STATE } from '@/constants'
import type { SquareValue } from '@/types'
import { checkWinner } from '@/utils/checkWinner'
import { checkEndGame } from '@/utils/checkEndGame'
export function useBoard() {
  const [board, setBoard] = useState<SquareValue[]>(() => {
    const boardFromStorage = localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : INITIAL_STATE
  })
  const [turn, setTurn] = useState<'X' | 'O'>(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.x
  })
  const [winner, setWinner] = useState<SquareValue | false>(null)
  const updateBoard = (index: number) => {
    if (board[index] || winner) return
    const newTurn = turn === TURNS.o ? TURNS.x : TURNS.o
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    setTurn(newTurn)
    const newWinner = checkWinner(newBoard)
    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', JSON.stringify(newTurn))
    if (newWinner) setWinner(newWinner)
    if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(INITIAL_STATE)
    setWinner(null)
    setTurn(TURNS.x)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }
  return { board, turn, winner, updateBoard, resetGame }
}
