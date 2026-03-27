export const LOCALES = ['en', 'pt'] as const
export type Locale = (typeof LOCALES)[number]

export const CONTENT = {
  en: {
    nav: {
      brand: 'Sales Agent',
    },
    hero: {
      badge: 'Enterprise-Grade Android Ecosystem',
      title: '247 Sales Agent —',
      titleHighlight: 'High-Performance WhatsApp Outreach',
      description:
        'An enterprise-grade Android ecosystem engineered to automate and scale high-touch sales conversations directly within WhatsApp and WhatsApp Business.',
    },
    footer: {
      tagline: 'Deterministic WhatsApp Automation',
      links: {
        github: 'GitHub',
        contact: 'Contact',
        privacy: 'Privacy',
        terms: 'Terms',
      },
    },
    pricing: {
      feature: 'Feature',
      freeTier: 'Free Tier',
      recommended: 'Recommended',
      perMonth: '/mo',
      or: 'or',
      yearly: 'yearly',
      locked: 'Locked',
      fullAccess: 'Full Access',
      experienceItFirst: 'Experience it first',
      dayFreeTrial: '-Day Free Trial',
    },
  },
  pt: {
    nav: {
      brand: 'Sales Agent',
    },
    hero: {
      badge: 'Ecossistema Android de Nível Empresarial',
      title: '247 Sales Agent —',
      titleHighlight: 'Prospecção de WhatsApp de Alta Performance',
      description:
        'Um ecossistema Android de nível empresarial projetado para automatizar e escalar conversas de vendas de alto toque diretamente no WhatsApp e WhatsApp Business.',
    },
    footer: {
      tagline: 'Automação Determinística de WhatsApp',
      links: {
        github: 'GitHub',
        contact: 'Contato',
        privacy: 'Privacidade',
        terms: 'Termos',
      },
    },
    pricing: {
      feature: 'Recurso',
      freeTier: 'Plano Grátis',
      recommended: 'Recomendado',
      perMonth: '/mês',
      or: 'ou',
      yearly: 'anual',
      locked: 'Bloqueado',
      fullAccess: 'Acesso Total',
      experienceItFirst: 'Experimente primeiro',
      dayFreeTrial: ' Dias de Teste Grátis',
    },
  },
} as const
