import { render, screen } from '@testing-library/react'
import Menu from './Menu'

describe('Menu component', () => {
  it('renders navigation links', () => {
    render(<Menu />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
  })
})
