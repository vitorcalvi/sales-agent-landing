'use client';

interface PricingFeature {
  name: string;
  freeValue?: string;
  premiumValue?: string;
  isLocked?: boolean;
  highlight?: boolean;
}

interface PricingTableProps {
  title: string;
  description: string;
  features: PricingFeature[];
  monthlyPrice: string;
  yearlyPrice: string;
  currency?: string;
  trialDays?: number;
  locale?: "en" | "pt";
}

export default function PricingTable({
  title,
  description,
  features,
  monthlyPrice,
  yearlyPrice,
  currency = "$",
  trialDays = 7,
  locale = "en"
}: PricingTableProps) {
  const savingsPercent = 17;

  return (
    <section className="section bg-dark-surface-low/30 border-y border-dark-border">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">{description}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="py-4 px-6 font-heading text-primary uppercase text-sm tracking-widest">
                  {locale === "pt" ? "Recurso" : "Feature"}
                </th>
                <th className="py-4 px-6 font-heading text-gray-400 uppercase text-sm tracking-widest">
                  {locale === "pt" ? "Plano Grátis" : "Free Tier"}
                </th>
                <th className="py-6 px-6 relative">
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {locale === "pt" ? "Recomendado" : "Recommended"}
                    </span>
                  </div>
                  <div className="text-primary uppercase text-sm tracking-[0.2em] mb-2 font-mono text-center">
                    Premium
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-heading text-white tracking-tighter">
                        {monthlyPrice}
                      </span>
                      <span className="text-xs text-primary/60 font-mono uppercase">
                        {locale === "pt" ? "/mês" : "/mo"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-400 font-mono">{locale === "pt" ? "ou" : "or"}</span>
                      <span className="text-white font-mono font-medium">{yearlyPrice}</span>
                      <span className="text-gray-500 text-xs font-mono uppercase">
                        {locale === "pt" ? "anual" : "yearly"}
                      </span>
                      <span className="bg-green-500/20 text-green-400 text-[10px] font-bold uppercase px-1.5 py-0.5 rounded">
                        -{savingsPercent}%
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {  features.map((feature, index) => (
                <tr
                  key={`feature-${index}-${feature.name}`}
                  className={`border-b transition-colors ${
                    feature.highlight
                      ? "bg-primary/5 border-dark-border/50 hover:bg-primary/10"
                      : "border-dark-border/50 hover:bg-dark-surface-low/50"
                  }`}
                >
                  <td className="py-6 px-6 font-heading text-white">{feature.name}</td>
                  <td className="py-6 px-6 text-gray-400">
                    {feature.isLocked ? (
                      <span className="flex items-center gap-2 text-gray-500">
                        <span className="text-lg" aria-hidden="true">🔒</span>
                        <span className="font-mono text-sm">
                          {locale === "pt" ? "Bloqueado" : "Locked"}
                        </span>
                        <span className="sr-only">{locale === "pt" ? "Recurso não disponível" : "Feature not available"}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-sm">{feature.freeValue}</span>
                    )}
                  </td>
                  <td className="py-6 px-6 text-primary bg-primary/5 font-heading text-center">
                    {feature.isLocked ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="text-lg" aria-hidden="true">✅</span>
                        <span className="font-mono text-sm">
                          {locale === "pt" ? "Acesso Total" : "Full Access"}
                        </span>
                        <span className="sr-only">{locale === "pt" ? "Recurso disponível" : "Feature available"}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-lg font-bold">{feature.premiumValue}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-6">
            {locale === "pt" ? "Experimente primeiro" : "Experience it first"}
          </p>
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-primary font-heading text-xl">
            <span>{locale === "pt" ? `${trialDays} Dias de Teste Grátis` : `${trialDays}-Day Free Trial`}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
