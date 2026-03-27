export type Locale = 'en' | 'pt'

export const CONTENT = {
  en: {
    hero: {
      badge: 'Enterprise-Grade Android Ecosystem',
      title: '247 Sales Agent —',
      titleLine2: 'High-Performance',
      titleLine3: 'WhatsApp Outreach',
      description:
        'An enterprise-grade Android ecosystem engineered to automate and scale high-touch sales conversations directly within WhatsApp and WhatsApp Business. By combining deterministic UI automation with real-time accessibility parsing, it provides a reliable, high-conversion outreach engine that operates natively on your device.',
      downloadApk: 'Download Latest APK',
      operatingModes: 'Operating Modes',
      version: 'v1.0.8 • 247sales.dyagnosys.com • Secure Distribution',
    },
    businessCore: {
      title: 'Business Core: Why 247 Sales Agent?',
      subtitle:
        'Solving the "Outreach Paradox": how to send hundreds of messages daily without sacrificing personalization or risking account bans.',
      pillars: [
        {
          title: 'Native Deliverability',
          desc: 'Unlike API-based solutions, we send from your personal or business account. This results in significantly higher open rates and authentic engagement.',
        },
        {
          title: 'Deterministic Logic',
          desc: "Replace the 'hallucination' risk of AI with a proven 6-stage sales pipeline. The agent ensures every lead receives the full sequence of hook, solution, and offer.",
        },
        {
          title: 'Cost Efficiency',
          desc: 'Eliminate the per-message cost of the WhatsApp Business API. Once installed, you can scale your outreach with zero marginal cost.',
        },
        {
          title: 'Account Safety First',
          desc: "Includes 'Human-Mimicry': randomized delays (2-5s), home-screen resets between contacts, and natural typing simulation.",
        },
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
          title: 'Group & Contact Extraction',
          body: 'Group Scraper captures unique member names. Home List Extraction scans conversations for follow-ups. Smart Filtering ignores admins and non-contacts.',
        },
        {
          icon: '📹',
          title: 'VSL & Rich Media Previews',
          body: 'Uses built-in Jsoup to scrape CTA/VSL metadata. The automation waits for WhatsApp to generate rich previews before tapping send.',
        },
        {
          icon: '🛡️',
          title: 'Campaign Persistence',
          body: 'Batch Store persists lead status (SUCCESS, FAILED). Crash Resilience ensures campaigns resume exactly where they left off if interrupted.',
        },
        {
          icon: '🧠',
          title: 'AI Script Generation',
          body: 'Leverages WhatsApp native AI features to transform raw data into 3-message sequences following proven persuasion psychology.',
        },
        {
          icon: '👁️',
          title: 'Real-Time VSL Preview',
          body: 'View the entire message flow in a WhatsApp-native interface. Automatically optimizes link previews for maximum CTR.',
        },
        {
          icon: '📊',
          title: 'Progress Dashboard',
          body: "Real-time 'Radar' UI shows the current contact, total progress, and success/failure statistics for live campaign monitoring.",
        },
      ],
    },
    modes: {
      title: 'Multi-Mode Execution',
      subtitle: 'Versatile operating modes designed to handle every sales scenario.',
      headers: { mode: 'Mode', useCase: 'Use Case', impact: 'Business Impact' },
      items: [
        {
          mode: 'Single Send',
          useCase: 'High-value, custom leads.',
          impact: '100% conversion focus on key accounts.',
        },
        {
          mode: 'Batch Mode',
          useCase: 'Cold outreach to group members.',
          impact: 'Rapid list building and mass awareness.',
          premium: true,
        },
        {
          mode: 'List Mode',
          useCase: 'Re-engaging custom imported lists.',
          impact: 'High-ROI follow-up campaigns.',
          premium: true,
        },
        {
          mode: 'Broadcast',
          useCase: 'Wide-net announcements.',
          impact: 'Instant notification to your entire network.',
        },
      ],
    },
    pricing: {
      title: 'Choose Your Scale',
      description: 'Start with our generous free tier or unlock the full power with Premium.',
      features: [
        { name: 'Daily Contacts', freeValue: '10 contacts/day', premiumValue: 'Unlimited', highlight: true },
        { name: 'Daily Messages', freeValue: '40 messages/day', premiumValue: 'Unlimited', highlight: true },
        { name: 'Sales Pipeline', freeValue: '3 Basic Stages', premiumValue: 'Full 6-Stage Engine', highlight: true },
        { name: 'AI Scripting', isLocked: true },
        { name: 'VSL Previews', isLocked: true },
        { name: 'Batch Scaling', isLocked: true },
        { name: 'Branding', freeValue: 'Standard CTA', premiumValue: 'Professional/Short CTA' },
      ],
      monthlyPrice: '$9.99',
      yearlyPrice: '$99.99',
      trialDays: 7,
    },
    security: {
      title: 'Enterprise-Grade Security',
      subtitle: 'Designed for professionals who demand 100% privacy and complete control over their data.',
      items: [
        {
          icon: '🔒',
          title: '100% Private & Local',
          body: 'The agent runs entirely on your Android device. Your contacts, messages, and sales scripts never leave your hardware. No cloud storage, no third-party servers.',
        },
        {
          icon: '🛡️',
          title: 'Secure Local Vault',
          body: 'Utilizes EncryptedSharedPreferences and AES-256 encryption to protect your local campaign data and license credentials against unauthorized access.',
        },
        {
          icon: '⚡',
          title: 'Native Automation',
          body: 'Operates through the Android Accessibility API, mimicking human interaction directly within the WhatsApp interface without using high-risk, unofficial APIs.',
        },
      ],
    },
    license: 'Proprietary Software. Developed and Maintained by Mindsense Products. All rights reserved. Unauthorized redistribution or reverse engineering is strictly prohibited.',
    cta: {
      title: 'Scale Your Outreach Today',
      subtitle: 'Download the 247 Sales Agent ecosystem. Native deliverability. Zero per-message cost. Proven conversion.',
      download: 'Download Release APK',
      badges: ['Free Trial', 'Secure Licensing'],
    },
  },
  pt: {
    hero: {
      badge: 'Ecossistema Android de Nível Empresarial',
      title: '247 Sales Agent —',
      titleLine2: 'Prospecção de WhatsApp',
      titleLine3: 'de Alta Performance',
      description:
        'Um ecossistema Android de nível empresarial projetado para automatizar e escalar conversas de vendas de alto toque diretamente no WhatsApp e WhatsApp Business. Combinando automação de UI determinística com parsing de acessibilidade em tempo real, ele fornece um motor de prospecção confiável e de alta conversão que opera nativamente no seu dispositivo.',
      downloadApk: 'Baixar APK Mais Recente',
      operatingModes: 'Modos de Operação',
      version: 'v1.0.8 • 247sales.dyagnosys.com • Distribuição Segura',
    },
    businessCore: {
      title: 'Business Core: Por que o 247 Sales Agent?',
      subtitle:
        'Resolvendo o "Paradoxo da Prospecção": como enviar centenas de mensagens diariamente sem sacrificar a personalização ou arriscar banimentos.',
      pillars: [
        {
          title: 'Entregabilidade Nativa',
          desc: 'Ao contrário de soluções baseadas em API, enviamos da sua conta pessoal ou business. Isso resulta em taxas de abertura significativamente maiores.',
        },
        {
          title: 'Lógica Determinística',
          desc: 'Substitua o risco de "alucinação" da IA por um pipeline de vendas de 6 estágios comprovado. O agente garante que cada lead receba a sequência completa.',
        },
        {
          title: 'Eficiência de Custos',
          desc: 'Elimine o custo por mensagem da API do WhatsApp Business. Uma vez instalado, você pode escalar sua prospecção com custo marginal zero.',
        },
        {
          title: 'Segurança da Conta',
          desc: 'Inclui mimetismo humano: delays aleatórios (2-5s), resets de tela entre contatos e simulação de digitação natural.',
        },
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
          title: 'Extração de Grupos e Contatos',
          body: 'O motor de extração captura membros de grupos automaticamente e escaneia conversas ativas para follow-ups inteligentes.',
        },
        {
          icon: '📹',
          title: 'VSL e Previews de Mídia Rica',
          body: 'Usa motor Jsoup integrado para extrair metadados. Aguarda o WhatsApp gerar o preview rico antes de completar o envio.',
        },
        {
          icon: '🛡️',
          title: 'Persistência de Campanha',
          body: 'Status dos leads (SUCESSO, FALHA) é salvo localmente. A resiliência garante que a campanha retome exatamente de onde parou.',
        },
        {
          icon: '🧠',
          title: 'Geração de Script por IA',
          body: 'Alavanca recursos de IA nativos para transformar dados brutos em sequências de 3 mensagens (Gancho, Solução, Oferta).',
        },
        {
          icon: '👁️',
          title: 'Preview de VSL em Tempo Real',
          body: 'Veja o fluxo completo de mensagens em uma interface nativa. Otimização automática de links para máximo clique.',
        },
        {
          icon: '📊',
          title: 'Painel de Progresso',
          body: "Interface 'Radar' em tempo real mostrando o contato atual, progresso total e estatísticas de sucesso/falha.",
        },
      ],
    },
    modes: {
      title: 'Execução Multi-Modo',
      subtitle: 'Modos versáteis projetados para lidar com qualquer cenário de vendas.',
      headers: { mode: 'Modo', useCase: 'Caso de Uso', impact: 'Impacto no Negócio' },
      items: [
        {
          mode: 'Envio Único',
          useCase: 'Leads de alto valor e personalizados.',
          impact: 'Foco 100% em conversão de contas chave.',
        },
        {
          mode: 'Modo em Lote',
          useCase: 'Prospecção fria em grupos.',
          impact: 'Construção rápida de lista e alcance em massa.',
          premium: true,
        },
        {
          mode: 'Modo de Lista',
          useCase: 'Re-engajamento de listas importadas.',
          impact: 'Campanhas de follow-up de alto ROI.',
          premium: true,
        },
        {
          mode: 'Transmissão',
          useCase: 'Anúncios para toda a rede.',
          impact: 'Notificação instantânea para seus contatos.',
        },
      ],
    },
    pricing: {
      title: 'Escolha Sua Escala',
      description: 'Comece com nosso plano gratuito ou desbloqueie o poder total com o Premium.',
      features: [
        { name: 'Contatos Diários', freeValue: '10 contatos/dia', premiumValue: 'Ilimitado', highlight: true },
        { name: 'Mensagens Diárias', freeValue: '40 mensagens/dia', premiumValue: 'Ilimitado', highlight: true },
        { name: 'Pipeline de Vendas', freeValue: '3 Estágios Básicos', premiumValue: 'Motor de 6 Estágios', highlight: true },
        { name: 'Scripts por IA', isLocked: true },
        { name: 'Previews de VSL', isLocked: true },
        { name: 'Escalabilidade em Lote', isLocked: true },
        { name: 'Branding', freeValue: 'CTA Padrão', premiumValue: 'CTA Profissional/Curto' },
      ],
      monthlyPrice: 'US$ 9,99',
      yearlyPrice: 'US$ 99,99',
      trialDays: 7,
    },
    security: {
      title: 'Segurança de Nível Empresarial',
      subtitle: 'Projetado para profissionais que exigem 100% de privacidade e controle total sobre seus dados.',
      items: [
        {
          icon: '🔒',
          title: '100% Privado e Local',
          body: 'O agente roda inteiramente no seu dispositivo Android. Seus contatos, mensagens e scripts nunca saem do seu hardware. Sem armazenamento em nuvem, sem servidores de terceiros.',
        },
        {
          icon: '🛡️',
          title: 'Cofre Local Seguro',
          body: 'Utiliza EncryptedSharedPreferences e criptografia AES-256 para proteger seus dados de campanha e credenciais de licença contra acessos não autorizados.',
        },
        {
          icon: '⚡',
          title: 'Automação Nativa',
          body: 'Opera através da API de Acessibilidade do Android, mimetizando a interação humana diretamente na interface do WhatsApp, sem usar APIs não oficiais de alto risco.',
        },
      ],
    },
    license: 'Software Proprietário. Desenvolvido e Mantido por Mindsense Products. Todos os direitos reservados. Redistribuição ou engenharia reversa não autorizada é estritamente proibida.',
    cta: {
      title: 'Escale sua Prospecção Hoje',
      subtitle: 'Baixe o ecossistema 247 Sales Agent. Entregabilidade nativa. Custo zero por mensagem. Conversão comprovada.',
      download: 'Baixar APK de Lançamento',
      badges: ['Teste Grátis', 'Licenciamento Seguro'],
    },
  },
} as const

export const METADATA = {
  en: {
    title: '247 Sales Agent — High-Performance WhatsApp Outreach',
    description: 'Enterprise-grade Android ecosystem for WhatsApp sales automation. Native deliverability, deterministic logic, zero per-message cost.',
    ogTitle: '247 Sales Agent — WhatsApp Automation',
    ogDescription: 'Automate and scale WhatsApp sales conversations with deterministic workflow automation.',
    locale: 'en_US',
  },
  pt: {
    title: '247 Sales Agent — Automação de WhatsApp de Alta Performance',
    description: 'Ecossistema Android de nível empresarial para automação de vendas no WhatsApp. Entregabilidade nativa, lógica determinística, custo zero por mensagem.',
    ogTitle: '247 Sales Agent — Automação de WhatsApp',
    ogDescription: 'Automatize e escale conversas de vendas no WhatsApp com automação de fluxo de trabalho determinístico.',
    locale: 'pt_BR',
  },
} as const
