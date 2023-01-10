import React from 'react'
import { Loader } from './loader'
import { render, screen } from '@testing-library/react'

describe('Loader', () => {
  test('show loader', () => {
    render(<Loader show />)
  })
  const loader = screen.getByRole('loader')
  expect(loader).toBeInTheDocument()
})
