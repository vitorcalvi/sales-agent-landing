import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
  MockLink.displayName = 'MockLink'
  return MockLink
})

jest.mock('next/navigation', () => ({
  usePathname: () => '/en',
}))

describe('Navbar', () => {
  it('renders the logo number', () => {
    render(<Navbar />)
    expect(screen.getByText('247')).toBeInTheDocument()
  })

  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Sales Agent')).toBeInTheDocument()
  })

  it('renders language switcher', () => {
    render(<Navbar />)
    expect(screen.getByText('EN')).toBeInTheDocument()
    expect(screen.getByText('PT')).toBeInTheDocument()
  })

  it('has accessible navigation region', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('has language links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('href', '/en')
    expect(screen.getByRole('link', { name: 'PT' })).toHaveAttribute('href', '/pt')
  })
})
