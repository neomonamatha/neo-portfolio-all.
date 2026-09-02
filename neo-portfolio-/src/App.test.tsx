import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('renders the core identity and project section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /business-minded/i })).toBeInTheDocument()
    expect(screen.getByText('SYNARI Smart Asset Tracker')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#projects')
  })
})