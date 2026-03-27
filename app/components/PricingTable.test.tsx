import { render, screen } from '@testing-library/react'
import PricingTable from './PricingTable'

const mockProps = {
  title: 'Choose Your Plan',
  description: 'Select the plan that fits your needs',
  features: [
    { name: 'Daily Contacts', freeValue: '10/day', premiumValue: 'Unlimited', highlight: true },
    { name: 'Support', freeValue: 'Email', premiumValue: 'Priority' },
  ],
  monthlyPrice: '$9.99',
  yearlyPrice: '$99.99',
  trialDays: 7,
  locale: 'en' as const,
}

describe('PricingTable', () => {
  it('renders the title', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('Select the plan that fits your needs')).toBeInTheDocument()
  })

  it('renders monthly price', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('$9.99')).toBeInTheDocument()
  })

  it('renders yearly price', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('$99.99')).toBeInTheDocument()
  })

  it('renders trial days text', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText(/7-day free trial/i)).toBeInTheDocument()
  })

  it('renders feature names', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('Daily Contacts')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders free tier values', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('10/day')).toBeInTheDocument()
  })

  it('renders premium tier values', () => {
    render(<PricingTable {...mockProps} />)
    expect(screen.getByText('Unlimited')).toBeInTheDocument()
  })
})
