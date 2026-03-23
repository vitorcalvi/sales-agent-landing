export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Automatize Seu Pipeline de Vendas no WhatsApp
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Envie a mensagem certa para cada lead em cada etapa — automaticamente.
            <br className="hidden md:block" />
            Scripts de vendas pré-escritos entregues pelo WhatsApp via automação Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary"
              download
            >
              Baixar APK
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Ver Como Funciona
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-b from-transparent to-dark-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Por Que Escolher o Sales Agent?
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Construído para equipes de vendas que querem escalar o alcance no WhatsApp sem sacrificar o controle.
          </p>

          <div className="features-grid">
            <FeatureCard
              title="Movido por Acessibilidade"
              body="Usa os Serviços de Acessibilidade do Android para navegar no WhatsApp, encontrar contatos e enviar mensagens — sem API ou conta comercial."
            />
            <FeatureCard
              title="Pipeline de 6 Etapas"
              body="Cada lead avança por NOVO → ENGAJADO → QUALIFICADO → APRESENTANDO → OBJEÇÃO → FECHANDO com um template de mensagem em cada etapa."
            />
            <FeatureCard
              title="Controle Humano"
              body="Revise e aprove cada mensagem antes do envio. Automação cuida da navegação, você controla o conteúdo."
            />
            <FeatureCard
              title="Rastreamento de Pipeline"
              body="O estágio do contato é salvo no dispositivo. Retome qualquer conversa de onde parou, entre sessões e reinicializações."
            />
            <FeatureCard
              title="Sem WhatsApp Business"
              body="Funciona com seu WhatsApp pessoal. Sem chaves de API, sem conta comercial, sem restrições de número — instale o APK e comece."
            />
            <FeatureCard
              title="Pronto para B2B"
              body="Construído para equipes de vendas que alcançam profissionais de RH, tomadores de decisão e leads qualificados pelo WhatsApp em escala."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Três passos simples para automatizar seu outreach de vendas no WhatsApp.
          </p>

          <div className="max-w-3xl mx-auto">
            <StepCard
              number={1}
              title="Instalar e Configurar"
              description="Baixe o APK, ative o Serviço de Acessibilidade nas Configurações do Android e faça login com sua conta Google."
            />
            <StepCard
              number={2}
              title="Adicionar Contatos"
              description="Insira os nomes de exibição do WhatsApp dos seus leads. O agente os encontra automaticamente na sua lista de contatos."
            />
            <StepCard
              number={3}
              title="Executar o Pipeline"
              description="O agente abre cada chat, cola a mensagem da etapa correspondente e aguarda sua aprovação antes de enviar."
            />
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="section">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Pronto para Escalar Seu Alcance no WhatsApp?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Baixe o APK diretamente. Sem Play Store.
              <br />
              Requer Android 9+ e WhatsApp instalado.
            </p>
            <a
              href="https://github.com/vitorcalvi/sales-agent-releases/releases/latest/download/app-release.apk"
              className="btn-primary text-lg"
              download
            >
              Baixar APK
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="glass-card">
      <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
      <p className="text-gray-300">{body}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
