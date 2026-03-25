export default function HomePage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section py-32 md:py-48">
        <div className="container mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
          
          <div className="badge animate-fade-in">Ecossistema Android de Nível Empresarial</div>
          <h1 className="text-6xl md:text-8xl font-heading mb-8 tracking-tighter leading-tight gradient-text">
            Prospecção de WhatsApp <br className="hidden md:block" />
            de Alta Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-sans">
            Automatize e escale conversas de vendas de alto toque diretamente no WhatsApp. <br className="hidden md:block" />
            Automação de UI determinística e parsing de acessibilidade em tempo real para um motor nativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary"
              download
            >
              Baixar APK Mais Recente
            </a>
            <a href="#modes" className="btn-secondary">
              Modos de Operação
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 font-mono uppercase tracking-widest">
            v1.0.8 • 247sales.dyagnosys.com • Seguro
          </p>
        </div>
      </section>

      {/* Business Core: Por que o 247 Sales Agent? */}
      <section className="border-y border-dark-border py-24 bg-dark-surface-low/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Por que o 247 Sales Agent?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Construído para resolver o "Paradoxo da Prospecção": escalar mensagens sem sacrificar a personalização ou a saúde da conta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Pillar 
              title="Entregabilidade Nativa" 
              desc="Envia da sua conta pessoal ou business. Maiores taxas de abertura e engajamento autêntico comparado a APIs."
            />
            <Pillar 
              title="Lógica Determinística" 
              desc="Pipeline de 6 etapas comprovado. Você define o gancho, solução e CTA; o agente garante a execução da sequência."
            />
            <Pillar 
              title="Eficiência de Custos" 
              desc="Elimine custos por mensagem da API do WhatsApp. Escale sua prospecção com custo marginal zero."
            />
            <Pillar 
              title="Segurança da Conta" 
              desc="Recursos de mimetismo humano: delays aleatórios (2-5s), resets e digitação natural para evitar detecção."
            />
          </div>
        </div>
      </section>

      {/* Deep-Dive Features */}
      <section className="section bg-dark-surface-low/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl mb-4 font-heading">Recursos Detalhados</h2>
              <p className="text-gray-400 text-lg">
                Projetado para operações em larga escala e ativos de alta conversão.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Scraper</div>
                <div className="text-xl font-heading text-center">Motor Jsoup</div>
              </div>
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Estado</div>
                <div className="text-xl font-heading text-center">Persistência</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Extração Inteligente"
              body="Group Scraper captura membros únicos. Home List Extraction escaneia conversas para follow-ups. Filtra admins."
              icon="🔍"
            />
            <FeatureCard
              title="VSL & Previews de Mídia"
              body="Scraping integrado para metadados. Aguarda thumbnails antes de enviar. Fallback para texto simples em redes lentas."
              icon="📹"
            />
            <FeatureCard
              title="Persistência de Campanha"
              body="Batch Store persiste status (SUCESSO, FALHA). Resiliência retoma campanhas exatamente de onde pararam."
              icon="🛡️"
            />
            <FeatureCard
              title="Personalização Dinâmica"
              body="Substitui {to} por nomes extraídos dos perfis. Template Vault para múltiplos scripts de vendas."
              icon="👤"
            />
            <FeatureCard
              title="Monitor de Acessibilidade"
              body="Listener de background garante que o motor esteja pronto com alertas visuais em tempo real e Radar UI."
              icon="📡"
            />
            <FeatureCard
              title="Utilitários Profissionais"
              body="Usage Guard monitora limites diários (ex: 50/dia) para proteger a saúde da conta e gerenciar cotas premium."
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Operating Modes Section */}
      <section id="modes" className="section relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 tracking-tight">Execução Multi-Modo</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Modos de operação versáteis projetados para lidar com qualquer cenário de vendas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ModeCard
              title="Envio Único"
              tag="Contas de Alto Valor"
              body="Foco 100% em conversão. Executa a sequência completa imediatamente para leads estratégicos."
            />
            <ModeCard
              title="Modo em Lote"
              tag="Prospecção Fria"
              body="Construção rápida de listas de grupos. Aborda sequencialmente cada membro de forma automática."
            />
            <ModeCard
              title="Modo de Lista"
              tag="Re-engajamento"
              body="Importe listas personalizadas. Campanhas de follow-up de alto ROI iterando pelo seu próprio banco de leads."
            />
            <ModeCard
              title="Transmissão"
              tag="Anúncios Amplos"
              body="Notificações instantâneas para sua rede. Automatiza o envio para múltiplos contatos simultaneamente."
            />
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section border-t border-dark-border bg-dark-surface-low/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Stack Tecnológica</h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Construído para Confiabilidade & Segurança</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechItem label="Android" value="Kotlin / Compose" />
            <TechItem label="Automação" value="Accessibility API" />
            <TechItem label="Segurança" value="HMAC-SHA256" />
            <TechItem label="Backend" value="Next.js / Supabase" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-surface-low to-dark-bg p-12 md:p-24 rounded-[3rem] border border-dark-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="text-5xl md:text-7xl mb-8 font-heading tracking-tighter">Escale sua Prospecção Hoje</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
              Baixe o 247 Sales Agent. <br />
              Automação determinística. Zero fricção de API. Entrega nativa autêntica.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
                className="btn-primary text-xl px-16 py-5"
                download
              >
                Baixar APK de Lançamento
              </a>
              <div className="text-gray-500 font-mono text-sm uppercase tracking-widest flex gap-8">
                <span>Teste Grátis</span>
                <span>•</span>
                <span>Licenciamento Seguro</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-gray-600 text-xs font-mono max-w-2xl mx-auto uppercase tracking-tighter leading-relaxed text-center">
            Software Proprietário. Desenvolvido e Mantido por Mindsense Products. Todos os direitos reservados. Redistribuição ou engenharia reversa não autorizada é estritamente proibida.
          </div>
        </div>
      </section>
    </div>
  )
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="text-left p-6 bg-dark-surface-low border border-dark-border rounded-2xl">
      <div className="text-primary font-mono text-xs uppercase tracking-widest mb-4">// {title}</div>
      <h3 className="text-2xl font-heading mb-4 text-white">{title}</h3>
      <p className="text-gray-400 font-sans leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function ModeCard({ title, tag, body }: { title: string; tag: string; body: string }) {
  return (
    <div className="p-8 md:p-10 bg-dark-surface-low border border-dark-border rounded-2xl hover:border-primary/40 transition-all group">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-3xl font-heading group-hover:text-primary transition-colors">{title}</h3>
        <span className="text-[10px] font-mono border border-primary/30 text-primary px-2 py-1 rounded uppercase tracking-tighter">
          {tag}
        </span>
      </div>
      <p className="text-gray-400 text-lg font-sans leading-relaxed">{body}</p>
    </div>
  )
}

function FeatureCard({ title, body, icon }: { title: string; body: string; icon: string }) {
  return (
    <div className="glass-card group hover:bg-dark-surface-high transition-colors">
      <div className="text-3xl mb-6">{icon}</div>
      <h3 className="text-2xl font-heading mb-4 text-white">{title}</h3>
      <p className="text-gray-400 font-sans leading-relaxed text-sm">{body}</p>
    </div>
  )
}

function TechItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg font-heading text-white">{value}</div>
    </div>
  )
}
