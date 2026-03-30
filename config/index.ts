export const SITE_CONFIG = {
  name: '247 Sales Agent',
  url: 'https://247.dyagnosys.com',
  version: '1.0.8',
  apkUrl:
    'https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk',
  contact: {
    email: 'contact@dyagnosys.com',
    github: 'https://github.com/vitorcalvi/sales-agent-releases',
  },
  company: {
    name: 'Mindsense Products',
    copyright: '© 2025 Mindsense Products. All rights reserved.',
  },
} as const

export const PRICING_CONFIG = {
  monthlyPrice: 9.99,
  yearlyPrice: 99.99,
  trialDays: 7,
  currency: 'USD',
} as const

export const FEATURES = {
  free: {
    dailyContacts: 10,
    dailyMessages: 40,
    salesPipelineStages: 3,
  },
  premium: {
    dailyContacts: 'Unlimited',
    dailyMessages: 'Unlimited',
    salesPipelineStages: 6,
  },
} as const
