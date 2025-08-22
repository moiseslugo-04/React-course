import { render, screen } from '@testing-library/jest-dom'
import '@testing-library/jest-dom'
import Button from '../components/Button'

test('render the button with the right text', () => {
  render(<Button onClick={() => console.log('object')}>Click me</Button>)
  const buttonElement = screen.getByRole('button', { name: /Click me/i })
  expect(buttonElement).toBeInTheDocument()
})
