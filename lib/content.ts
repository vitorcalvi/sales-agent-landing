export type Locale = 'en' | 'pt'

export const CONTENT = {
  en: {
    hero: {
      badge: 'Trusted by 1,000+ sellers worldwide',
      title: 'Send 100+ WhatsApp Messages a Day — Without Getting Banned',
      titleLine2: '',
      titleLine3: '',
      description:
        'Tired of copying and pasting the same message over and over? Let the app do it for you — safely, automatically, and free to start.',
      downloadApk: 'Download Free Now',
      operatingModes: 'See How It Works',
      version: 'v1.0.8 — Updated March 2026, stable and secure',
    },
    businessCore: {
      title: 'The Daily WhatsApp Grind Is Killing Your Sales',
      subtitle:
        "You open WhatsApp. Find the contact. Type the message. Send. Repeat. Over and over, until your wrist hurts and your brain is numb. And still, only half of them reply. All the while, you're wondering: 'Will WhatsApp flag my account if I send too many?'",
      paragraphs: [
        'You know you need to reach more people, but doing it manually is soul-crushing. Every day you waste hours that could be spent talking to actual customers or building your business.',
        "And the fear is real. Get flagged once and your WhatsApp account — your main sales channel — could be restricted. That's months of work building your contact list, gone.",
        'What if you could automate all of this? Send hundreds of personalized-looking messages every day, without triggering spam filters, and without spending a fortune on expensive automation tools?',
      ],
    },
    interface: {
      title: 'Enterprise Interface',
      subtitle: 'Designed for high-volume operations with a native Android experience.',
      screens: [
        {
          image: '/UI1.png',
          alt: 'Dashboard',
          title: 'Command Center',
          subtitle: 'Real-time stats & controls',
          hoverText: 'Command Center',
        },
        {
          image: '/UI3.png',
          alt: 'Sales Pipeline',
          title: 'Script Engine',
          subtitle: 'Deterministic sales logic',
          hoverText: 'Sales Pipeline',
          isMain: true,
        },
        {
          image: '/UI2.png',
          alt: 'Execution',
          title: 'Execution Radar',
          subtitle: 'Live process monitoring',
          hoverText: 'Active Execution',
        },
      ],
    },
    features: {
      title: 'Deep-Dive Features',
      subtitle: 'Engineered for large-scale operations and high-conversion assets.',
      badges: [
        { label: 'Extraction', value: 'Engine' },
        { label: 'Crash', value: 'Resilience' },
      ],
      items: [
        {
          icon: '🔍',
          title: 'Import Groups in One Tap',
          body: 'Select any WhatsApp group and import all contacts automatically. No manual copy-paste, no tedious data entry.',
        },
        {
          icon: '📹',
          title: 'Links That Look Professional',
          body: 'Your links always generate beautiful previews. More clicks, more engagement, more conversions.',
        },
        {
          icon: '🛡️',
          title: 'Never Lose Your Progress',
          body: 'Phone dies? App closes? Campaign continues exactly where it left off. No duplicates, no missed contacts.',
        },
        {
          icon: '🧠',
          title: 'AI Writes Your Sales Message',
          body: 'Answer a few questions and AI generates a complete 3-message sales sequence — hook, solution, offer — in seconds.',
        },
        {
          icon: '👁️',
          title: 'Preview Before You Send',
          body: 'See exactly what your customer will see before the message is sent. Perfect your pitch every time.',
        },
        {
          icon: '📊',
          title: 'Live Campaign Dashboard',
          body: "Watch your campaign in real time. See who received the message, who's left, and your success rate all on one screen.",
        },
      ],
    },
    modes: {
      title: 'Which Situation Sounds Like You?',
      subtitle: 'Different goals, different modes. Pick the one that matches your workflow.',
      headers: {
        persona: 'Your Situation',
        mode: 'Mode',
        outcome: 'What You Get',
      },
      items: [
        {
          persona:
            'I have an important client and want to send them a personalized message right now',
          mode: 'Single Send',
          outcome: 'One perfectly-crafted message reaches exactly the right person.',
        },
        {
          persona: 'I want to reach every member of a WhatsApp group at once',
          mode: 'Batch Mode',
          outcome: 'Message entire groups in minutes, not hours — Premium feature.',
          premium: true,
        },
        {
          persona: 'I have a list of old customers I want to re-engage',
          mode: 'List Mode',
          outcome: 'Upload your list and wake up dormant leads automatically — Premium feature.',
          premium: true,
        },
        {
          persona: 'I need to tell my entire network about a new product or promotion',
          mode: 'Broadcast',
          outcome: 'One announcement delivered to everyone who matters immediately.',
        },
      ],
    },
    pricing: {
      title: 'Start Free Today — No Card, No Deadline',
      description:
        'Begin with our free plan and upgrade only when you need more power. No credit card required to start.',
      features: [
        {
          name: 'Daily Contacts',
          freeValue: '10 contacts/day',
          premiumValue: 'Unlimited',
          highlight: true,
        },
        {
          name: 'Daily Messages',
          freeValue: '40 messages/day',
          premiumValue: 'Unlimited',
          highlight: true,
        },
        {
          name: 'Sales Sequence',
          freeValue: '3-step basic',
          premiumValue: 'Full 6-step engine',
          highlight: true,
        },
        { name: 'AI Message Writing', isLocked: true, premiumLabel: 'Premium only' },
        { name: 'Professional Previews', isLocked: true, premiumLabel: 'Premium only' },
        { name: 'Batch & List Modes', isLocked: true, premiumLabel: 'Premium' },
        { name: 'Support', freeValue: 'Email', premiumValue: 'Priority' },
      ],
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      trialDays: 7,
    },
    security: {
      title: 'Security & Privacy',
      subtitle: "We don't just say 'secure' — we design for it from the ground up.",
      items: [
        {
          icon: '🔒',
          title: 'Your Contacts Never Leave Your Phone',
          body: 'All your data stays on your device. No cloud storage. No third-party servers. Just you, your phone, and your contacts.',
        },
        {
          icon: '🛡️',
          title: 'Your Data Stays Protected on Your Device',
          body: 'Even if someone accesses your phone, your campaign data is encrypted and locked. Only you can see it.',
        },
        {
          icon: '⚡',
          title: 'Works Through the Official WhatsApp App',
          body: 'The app uses WhatsApp already installed on your phone. No unofficial APIs, no risky hacks. Your account stays safe.',
        },
      ],
    },
    license:
      'Proprietary Software. Developed and Maintained by Mindsense Products. All rights reserved. Unauthorized redistribution or reverse engineering is strictly prohibited.',
    howItWorks: {
      title: 'How It Works — 3 Simple Steps',
      subtitle: "You don't need to be a tech expert. If you can use WhatsApp, you can use this.",
      steps: [
        {
          step: '1',
          title: 'Install and Write Your Message',
          body: 'Download the app. Type your sales message once — or let AI write it for you in 3 simple steps.',
        },
        {
          step: '2',
          title: 'Import Your Contacts',
          body: 'Pull contacts from any WhatsApp group, or upload a list of phone numbers. One tap, done.',
        },
        {
          step: '3',
          title: 'Start Your Campaign',
          body: 'Press go. The app sends your messages while you do other things. Track results in real time.',
        },
      ],
    },
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Real stories from people who were exactly where you are now.',
      items: [
        {
          quote:
            'I used to spend 3 hours every morning sending WhatsApp messages manually. Now I do it in 10 minutes and my sales doubled in the first month. Best investment I made for my business.',
          name: 'Sarah Chen',
          role: 'Online jewelry seller, Los Angeles, CA',
          result: '+100% sales in 30 days',
        },
        {
          quote:
            "I was terrified of getting my WhatsApp account banned. This app sends messages so naturally that I've had zero issues in 6 months. They keep you safe while scaling.",
          name: 'Marcus Johnson',
          role: 'Real estate agent, Miami, FL',
          result: '6 months, zero account issues',
        },
        {
          quote:
            'I researched WhatsApp Business API and the costs were insane. Plus you need a verified business account. This app works on my personal number, flat monthly fee, and does the same job. Game changer.',
          name: 'Emily Rodriguez',
          role: 'Independent consultant, Austin, TX',
          result: 'Saved $200/month vs API',
        },
      ],
    },
    cta: {
      title: 'Start Sending Smarter — Today',
      subtitle:
        'No credit card. No commitment. Download and send your first campaign in 5 minutes.',
      download: 'Download Free Now',
      badges: ['No credit card', 'Cancel anytime'],
    },
  },
  pt: {
    hero: {
      badge: 'Usado por mais de 1.000 vendedores no Brasil',
      title: 'Envie 100+ Mensagens no WhatsApp por Dia — Sem Ser Bloqueado',
      titleLine2: '',
      titleLine3: '',
      description:
        'Cansado de copiar e colar a mesma mensagem repetidas vezes? Deixe o app fazer por você — com segurança, automaticamente, e grátis para começar.',
      downloadApk: 'Baixar Grátis Agora',
      operatingModes: 'Ver Como Funciona',
      version: 'v1.0.8 — Atualizado Março 2026, estável e seguro',
    },
    businessCore: {
      title: 'A Rotina Manual do WhatsApp Está Arruinando Suas Vendas',
      subtitle:
        'Você abre o WhatsApp. Procura o contato. Digita a mensagem. Envia. Repete. Dezenas de vezes, até a mente cansar e o pulso doer. E ainda assim, metade nem responde. E o medo nunca sai da sua cabeça: "Será que vou ser bloqueado se mandar demais?"',
      paragraphs: [
        'Você sabe que precisa alcançar mais pessoas, mas fazer manualmente é desgastante. Toda dia você perde horas que poderiam ser usadas para atender clientes de verdade ou grow o seu negócio.',
        'E o medo é real. Ser bloqueado uma vez significa perder sua conta WhatsApp — seu principal canal de vendas — com milhares de contatos que construiu com tanto trabalho. Tudo pode ir pelo ralo.',
        'E se você pudesse automatizar tudo isso? Enviar centenas de mensagens personalizadas por dia, sem disparar os filtros de spam, e sem pagar uma fortuna em ferramentas caras?',
      ],
    },
    interface: {
      title: 'Interface Empresarial',
      subtitle: 'Projetada para operações de alto volume com uma experiência Android nativa.',
      screens: [
        {
          image: '/UI1.png',
          alt: 'Dashboard',
          title: 'Centro de Comando',
          subtitle: 'Status e controles em tempo real',
          hoverText: 'Centro de Comando',
        },
        {
          image: '/UI3.png',
          alt: 'Pipeline de Vendas',
          title: 'Motor de Scripts',
          subtitle: 'Lógica determinística',
          hoverText: 'Pipeline de Vendas',
          isMain: true,
        },
        {
          image: '/UI2.png',
          alt: 'Execução',
          title: 'Radar de Execução',
          subtitle: 'Monitoramento ao vivo',
          hoverText: 'Execução Ativa',
        },
      ],
    },
    features: {
      title: 'Recursos Detalhados',
      subtitle: 'Projetado para operações em larga escala e ativos de alta conversão.',
      badges: [
        { label: 'Extração', value: 'Motor de Dados' },
        { label: 'Resiliência', value: 'Auto-Resume' },
      ],
      items: [
        {
          icon: '🔍',
          title: 'Importe Grupos com Um Toque',
          body: 'Selecione qualquer grupo do WhatsApp e importe todos os contatos automaticamente. Sem copiar, colar ou perder tempo.',
        },
        {
          icon: '📹',
          title: 'Links Que Parecem Profissionais',
          body: 'Seus links sempre geram prévias bonitas. Mais cliques, mais engajamento, mais conversões.',
        },
        {
          icon: '🛡️',
          title: 'Nunca Perca Seu Progresso',
          body: 'Celular morreu? App fechou? A campanha continua exatamente de onde parou. Sem duplicatas, sem contatos perdidos.',
        },
        {
          icon: '🧠',
          title: 'IA Escreve Sua Mensagem de Vendas',
          body: 'Responda algumas perguntas e a IA gera uma sequência completa de 3 mensagens — gancho, solução, oferta — em segundos.',
        },
        {
          icon: '👁️',
          title: 'Pré-visualize Antes de Enviar',
          body: 'Veja exatamente o que seu cliente vai ver antes da mensagem sair. Acerte no pitch toda vez.',
        },
        {
          icon: '📊',
          title: 'Painel de Campanha em Tempo Real',
          body: 'Acompanhe sua campanha ao vivo. Veja quem recebeu, quem falta, e sua taxa de sucesso tudo em uma tela.',
        },
      ],
    },
    modes: {
      title: 'Qual Situação Parece com a Sua?',
      subtitle: 'Diferentes objetivos, modos diferentes. Escolha o que combina com seu fluxo.',
      headers: {
        persona: 'Sua Situação',
        mode: 'Modo',
        outcome: 'Resultado',
      },
      items: [
        {
          persona:
            'Tenho um cliente importante e quero mandar uma mensagem personalizada agora mesmo',
          mode: 'Envio Único',
          outcome: 'Uma mensagem perfeitamente escrita chega na pessoa certa.',
        },
        {
          persona: 'Quero alcançar todos os membros de um grupo do WhatsApp de uma vez',
          mode: 'Modo em Lote',
          outcome: 'Mande mensagens para grupos inteiros em minutos, não horas — recurso Premium.',
          premium: true,
        },
        {
          persona: 'Tenho uma lista de clientes antigos que quero reativar',
          mode: 'Modo de Lista',
          outcome: 'Carregue sua lista e acorde leads parados automaticamente — recurso Premium.',
          premium: true,
        },
        {
          persona: 'Preciso avisar toda minha rede sobre um produto novo ou promoção',
          mode: 'Transmissão',
          outcome: 'Um anúncio chega para todos que importam em segundos.',
        },
      ],
    },
    pricing: {
      title: 'Comece Grátis Hoje — Sem Cartão, Sem Prazo',
      description:
        'Comece com nosso plano gratuito e faça upgrade só quando precisar de mais poder. Nenhum cartão necessário.',
      features: [
        {
          name: 'Contatos Diários',
          freeValue: '10 contatos/dia',
          premiumValue: 'Ilimitado',
          highlight: true,
        },
        {
          name: 'Mensagens Diárias',
          freeValue: '40 mensagens/dia',
          premiumValue: 'Ilimitado',
          highlight: true,
        },
        {
          name: 'Sequência de Vendas',
          freeValue: '3 passos básico',
          premiumValue: 'Motor completo 6 passos',
          highlight: true,
        },
        { name: 'Escrita por IA', isLocked: true, premiumLabel: 'Apenas Premium' },
        { name: 'Prévias Profissionais', isLocked: true, premiumLabel: 'Apenas Premium' },
        { name: 'Modos Lote e Lista', isLocked: true, premiumLabel: 'Premium' },
        { name: 'Suporte', freeValue: 'Email', premiumValue: 'Prioritário' },
      ],
      monthlyPrice: 'US$ 9,99',
      yearlyPrice: 'US$ 99,99',
      trialDays: 7,
    },
    security: {
      title: 'Segurança e Privacidade',
      subtitle:
        "Não dizemos 'seguro' só porque soa bem. Projetamos segurança desde o primeiro dia.",
      items: [
        {
          icon: '🔒',
          title: 'Seus Contatos Nunca Saem do Seu Celular',
          body: 'Todos os seus dados ficam no seu aparelho. Nenhum armazenamento em nuvem. Nenhum servidor de terceiros. Só você e seu WhatsApp.',
        },
        {
          icon: '🛡️',
          title: 'Seus Dados Ficam Protegidos no Dispositivo',
          body: 'Mesmo se alguém acessar seu celular, os dados da campanha são criptografados e bloqueados. Só você tem acesso.',
        },
        {
          icon: '⚡',
          title: 'Funciona com o WhatsApp Oficial',
          body: 'O app usa o WhatsApp já instalado no seu telefone. Sem APIs não oficiais, sem gambiarras. Sua conta fica segura.',
        },
      ],
    },
    license:
      'Software Proprietário. Desenvolvido e Mantido por Mindsense Products. Todos os direitos reservados. Redistribuição ou engenharia reversa não autorizada é estritamente proibida.',
    howItWorks: {
      title: 'Como Funciona — 3 Passos Simples',
      subtitle: 'Você não precisa ser expert em tecnologia. Se sabe usar WhatsApp, sabe usar isso.',
      steps: [
        {
          step: '1',
          title: 'Instale e Escreva Sua Mensagem',
          body: 'Baixe o app. Digite sua mensagem de vendas uma vez — ou deixe a IA escrever para você em 3 passos.',
        },
        {
          step: '2',
          title: 'Importe Seus Contatos',
          body: 'Puxe contatos de qualquer grupo do WhatsApp, ou carregue uma lista de números. Um toque, pronto.',
        },
        {
          step: '3',
          title: 'Inicie a Campanha',
          body: 'Aperte iniciar. O app envia suas mensagens enquanto você faz outras coisas. Acompanhe os resultados em tempo real.',
        },
      ],
    },
    testimonials: {
      title: 'O Que Nossos Clientes Dizem',
      subtitle: 'Histórias reais de pessoas que estavam exatamente onde você está agora.',
      items: [
        {
          quote:
            'Eu gastava 3 horas toda manhã mandando mensagens manualmente no WhatsApp. Agora faço em 10 minutos e minhas vendas dobraram no primeiro mês. Melhor investimento que fiz para o negócio.',
          name: 'Ana Paula Silva',
          role: 'Vendedora de semi-joias, São Paulo, SP',
          result: '+100% vendas em 30 dias',
        },
        {
          quote:
            'Tinha pavor de bloquear minha conta. Esse app envia mensagens tão naturalmente que nunca tive problemas. 6 meses e contando.',
          name: 'Carlos Eduardo Santos',
          role: 'Corretor de imóveis, Rio de Janeiro, RJ',
          result: '6 meses sem bloqueios',
        },
        {
          quote:
            'Pesquisei a API do WhatsApp Business — os custos eram absurdos. E ainda precisa de empresa verificada. Esse app funciona na minha conta pessoal, preço fixo, e faz o mesmo trabalho. Cambaleou tudo.',
          name: 'Mariana Costa',
          role: 'Consultora independente, Belo Horizonte, MG',
          result: 'Economizou R$ 200/mês',
        },
      ],
    },
    cta: {
      title: 'Comece a Vender Mais Inteligente — Hoje',
      subtitle:
        'Sem cartão de crédito. Sem compromisso. Baixe e envie sua primeira campanha em 5 minutos.',
      download: 'Baixar Grátis Agora',
      badges: ['Sem cartão', 'Cancele quando quiser'],
    },
  },
} as const

export const METADATA = {
  en: {
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description:
      'Send 100+ WhatsApp messages daily without getting banned. Native deliverability, zero per-message cost, account protection built-in.',
    ogTitle: '247 Sales Agent — WhatsApp Automation That Actually Works',
    ogDescription:
      'Automate WhatsApp sales safely and effectively. No per-message fees, no account bans. Start free.',
    locale: 'en_US',
  },
  pt: {
    title: '247 Sales Agent — Automação de WhatsApp que Funciona de Verdade',
    description:
      'Envie 100+ mensagens WhatsApp por dia sem ser bloqueado. Entregabilidade nativa, custo zero por mensagem, proteção da conta garantida.',
    ogTitle: '247 Sales Agent — Automação de WhatsApp Segura e Eficaz',
    ogDescription:
      'Automatize vendas no WhatsApp com segurança. Sem taxa por mensagem, sem bloqueios. Comece grátis.',
    locale: 'pt_BR',
  },
} as const
