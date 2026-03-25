export default function HomePage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="section py-32 md:py-48 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -z-10" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="badge animate-fade-in">Ecossistema Android de Nível Empresarial</div>
          <h1 className="text-6xl md:text-8xl font-heading mb-8 tracking-tighter leading-tight gradient-text">
            247 Sales Agent — <br className="hidden md:block" />
            Prospecção de WhatsApp <br className="hidden md:block" />
            de Alta Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 font-sans leading-relaxed">
            Um ecossistema Android de nível empresarial projetado para automatizar e escalar conversas de vendas de alto toque diretamente no WhatsApp e WhatsApp Business. 
            Combinando <strong>automação de UI determinística</strong> com <strong>parsing de acessibilidade em tempo real</strong>, ele fornece um motor de prospecção confiável e de alta conversão que opera nativamente no seu dispositivo.
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
            v1.0.8 • 247sales.dyagnosys.com • Distribuição Segura
          </p>
        </div>
      </section>

      {/* Business Core: Por que o 247 Sales Agent? */}
      <section className="border-y border-dark-border py-24 bg-dark-surface-low/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Business Core: Por que o 247 Sales Agent?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Resolvendo o "Paradoxo da Prospecção": como enviar centenas de mensagens diariamente sem sacrificar a personalização ou arriscar banimentos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Pillar 
              title="Entregabilidade Nativa" 
              desc="Ao contrário de soluções baseadas em API, enviamos da sua conta pessoal ou business. Isso resulta em taxas de abertura significativamente maiores."
            />
            <Pillar 
              title="Lógica Determinística" 
              desc="Substitua o risco de 'alucinação' da IA por um pipeline de vendas de 6 estágios comprovado. O agente garante que cada lead receba a sequência completa."
            />
            <Pillar 
              title="Eficiência de Custos" 
              desc="Elimine o custo por mensagem da API do WhatsApp Business. Uma vez instalado, você pode escalar sua prospecção com custo marginal zero."
            />
            <Pillar 
              title="Segurança da Conta" 
              desc="Inclui mimetismo humano: delays aleatórios (2-5s), resets de tela entre contatos e simulação de digitação natural."
            />
          </div>
        </div>
      </section>

      {/* App Interface Showcase */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Interface Empresarial</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Projetada para operações de alto volume com uma experiência Android nativa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
             {/* UI1 Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-dark-border rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl">
                 <img src="/UI1.png" alt="Dashboard" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Centro de Comando</span>
                 </div>
              </div>
              <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Centro de Comando</h3>
                 <p className="text-sm text-gray-400">Status e controles em tempo real</p>
              </div>
            </div>

            {/* UI3 Screen (Main) */}
            <div className="relative group md:-mt-16">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-primary/30 rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl transform scale-105 z-10">
                 <img src="/UI3.png" alt="Pipeline de Vendas" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Pipeline de Vendas</span>
                 </div>
              </div>
               <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Motor de Scripts</h3>
                 <p className="text-sm text-gray-400">Lógica determinística</p>
              </div>
            </div>

            {/* UI2 Screen */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[3rem] group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative bg-dark-bg border border-dark-border rounded-[2.5rem] overflow-hidden aspect-[9/19] shadow-2xl">
                 <img src="/UI2.png" alt="Execução" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                    <span className="text-white font-heading text-xl">Execução Ativa</span>
                 </div>
              </div>
               <div className="text-center mt-6">
                 <h3 className="text-xl font-heading text-white mb-2">Radar de Execução</h3>
                 <p className="text-sm text-gray-400">Monitoramento ao vivo</p>
              </div>
            </div>

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
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Extração</div>
                <div className="text-xl font-heading text-center">Motor de Dados</div>
              </div>
              <div className="bg-dark-surface-high border border-dark-border px-6 py-4 rounded-xl hidden sm:block">
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-1">Resiliência</div>
                <div className="text-xl font-heading text-center">Auto-Resume</div>
              </div>
            </div>
          </div>

          <div className="features-grid">
            <FeatureCard
              title="Extração de Grupos e Contatos"
              body="O motor de extração captura membros de grupos automaticamente e escaneia conversas ativas para follow-ups inteligentes."
              icon="🔍"
            />
            <FeatureCard
              title="VSL e Previews de Mídia Rica"
              body="Usa motor Jsoup integrado para extrair metadados. Aguarda o WhatsApp gerar o preview rico antes de completar o envio."
              icon="📹"
            />
            <FeatureCard
              title="Persistência de Campanha"
              body="Status dos leads (SUCESSO, FALHA) é salvo localmente. A resiliência garante que a campanha retome exatamente de onde parou."
              icon="🛡️"
            />
            <FeatureCard
              title="Geração de Script por IA"
              body="Alavanca a Meta AI nativa do WhatsApp para transformar dados brutos em sequências de 3 mensagens (Gancho, Solução, Oferta)."
              icon="🧠"
            />
            <FeatureCard
              title="Preview de VSL em Tempo Real"
              body="Veja o fluxo completo de mensagens em uma interface nativa. Otimização automática de links para máximo clique."
              icon="👁️"
            />
            <FeatureCard
              title="Painel de Progresso"
              body="Interface 'Radar' em tempo real mostrando o contato atual, progresso total e estatísticas de sucesso/falha."
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
              Modos versáteis projetados para lidar com qualquer cenário de vendas.
            </p>
          </div>

          <div className="overflow-x-auto mb-20">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Modo</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Caso de Uso</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Impacto no Negócio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Envio Único</td>
                  <td className="py-6 px-6 text-gray-400">Leads de alto valor e personalizados.</td>
                  <td className="py-6 px-6 text-white">Foco 100% em conversão de contas chave.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Modo em Lote <span className="text-xs text-primary ml-2 font-mono uppercase tracking-tighter">(Premium)</span></td>
                  <td className="py-6 px-6 text-gray-400">Prospecção fria em grupos.</td>
                  <td className="py-6 px-6 text-white">Construção rápida de lista e alcance em massa.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Modo de Lista <span className="text-xs text-primary ml-2 font-mono uppercase tracking-tighter">(Premium)</span></td>
                  <td className="py-6 px-6 text-gray-400">Re-engajamento de listas importadas.</td>
                  <td className="py-6 px-6 text-white">Campanhas de follow-up de alto ROI.</td>
                </tr>
                <tr className="border-b border-dark-border/50 hover:bg-dark-surface-low/50 transition-colors">
                  <td className="py-6 px-6 font-heading text-xl">Transmissão</td>
                  <td className="py-6 px-6 text-gray-400">Anúncios para toda a rede.</td>
                  <td className="py-6 px-6 text-white">Notificação instantânea para seus contatos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free vs Premium Section */}
      <section className="section bg-dark-surface-low/30 border-y border-dark-border">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Escolha Sua Escala</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
              Comece com nosso plano gratuito ou desbloqueie o poder total com o Premium.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">Recurso</th>
                  <th className="py-4 px-6 font-heading text-gray-400 uppercase text-sm tracking-widest">Plano Grátis</th>
                  <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest bg-primary/5">Plano Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Contatos Diários</td>
                  <td className="py-6 px-6 text-gray-400 font-mono">10 contatos/dia</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Ilimitado</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Mensagens Diárias</td>
                  <td className="py-6 px-6 text-gray-400 font-mono">40 mensagens/day</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Ilimitado</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Pipeline de Vendas</td>
                  <td className="py-6 px-6 text-gray-400">3 Estágios Básicos</td>
                  <td className="py-6 px-6 text-primary font-heading text-xl bg-primary/5">Motor de 6 Estágios</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Scripts por IA</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Bloqueado</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Acesso Total</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Previews de VSL</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Bloqueado</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Acesso Total</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Escalabilidade em Lote</td>
                  <td className="py-6 px-6 text-gray-500">🔒 Bloqueado</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">✅ Acesso Total</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-6 px-6 font-heading">Branding</td>
                  <td className="py-6 px-6 text-gray-400">CTA Padrão</td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading">CTA Profissional</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">Experimente primeiro</p>
            <div className="inline-block px-8 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-heading text-xl">
              7 Dias de Teste Grátis Inclusos
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="section border-t border-dark-border bg-dark-surface-low/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Stack Tecnológica</h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">Construído para Confiabilidade e Escala</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TechItem 
              label="Android" 
              value="Kotlin, Jetpack Compose, Coroutines (Flow/StateFlow), Accessibility Service API" 
            />
            <TechItem 
              label="Automação" 
              value="WhatsAppAutomator (Node-ID Determinístico & Interação por Texto)" 
            />
            <TechItem 
              label="Segurança" 
              value="EncryptedSharedPreferences, Validação de Licença HMAC-SHA256" 
            />
            <TechItem 
              label="Backend" 
              value="Next.js (TypeScript), PostgreSQL (Supabase), Stripe & Play Store Billing" 
            />
          </div>
        </div>
      </section>

      {/* License Section */}
      <section className="py-12 border-t border-dark-border text-center text-gray-600 text-[10px] font-mono uppercase tracking-widest bg-dark-bg">
        <div className="container mx-auto">
          Software Proprietário. Desenvolvido e Mantido por Mindsense Products. Todos os direitos reservados. Redistribuição ou engenharia reversa não autorizada é estritamente proibida.
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-dark-surface-low to-dark-bg p-12 md:p-24 rounded-[3rem] border border-dark-border relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />
            <h2 className="text-5xl md:text-7xl mb-8 font-heading tracking-tighter leading-tight text-center">Escale sua Prospecção Hoje</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed text-center">
              Baixe o ecossistema 247 Sales Agent. <br />
              Entregabilidade nativa. Custo zero por mensagem. Conversão comprovada.
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
      <div className="text-md font-heading text-white leading-relaxed">{value}</div>
    </div>
  )
}
