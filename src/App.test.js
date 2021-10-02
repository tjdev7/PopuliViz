import { render, screen } from '@testing-library/react'
import App from './App'


test('renders front page', () => {
   render(<App />)
   const mainTitle = screen.getByText(/PopuliViz/)
   expect(mainTitle).toBeInTheDocument()
})
