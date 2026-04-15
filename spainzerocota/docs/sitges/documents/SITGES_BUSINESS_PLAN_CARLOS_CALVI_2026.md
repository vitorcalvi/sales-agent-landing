# PLAN DE NEGOCIO — 247 Sales Agent

**Solicitante**: Carlos Vitor Botti Calvi  
**NIE**: [Número de Identificación]  
**Domicilio fiscal**: Sitges, Barcelona, España  
**Fecha**: Marzo 2026  
**Ayuda solicitada**: Ajuts per a fomentar l'emprenedoria — Ajuntament de Sitges (€6,000)

---

## 1. MEMORANDO DEL PROYECTO

### 1.1 Resumen Ejecutivo

**247 Sales Agent** es una aplicación de automatización de WhatsApp diseñada para profesionales de ventas, consultores y PYMEs que necesitan escalar su outreach comercial sin sacrificar personalización ni seguridad de cuentas.

El producto combina automatización determinista vía Android Accessibility Service con generación de scripts asistida por IA (Meta AI), ofreciendo una alternativa 10x más económica que las soluciones API tradicionales de WhatsApp Business.

**Propuesta de valor única**:
- **Zero marginal cost**: Sin costes por mensaje ni suscripciones a APIs costosas
- **Native deliverability**: Mensajes enviados desde cuentas personales/empresariales reales (mayor tasa de apertura)
- **100% local & private**: Todos los datos permanecen en el dispositivo del usuario

### 1.2 Problema Identificado

El mercado de automatización de WhatsApp presenta tres problemas críticos:

| Problema | Impacto | Solución Actual | Limitación |
|----------|---------|-----------------|------------|
| **Coste elevado de APIs** | €0.005-0.08 por conversación | WhatsApp Business API | Inviabilidad para volúmenes altos |
| **Baja deliverability** | 40-60% tasas de apertura | Solutions API-based | Banderas de spam automáticas |
| **Riesgo de bloqueos** | Pérdida de cuentas empresariales | Herramientas no oficiales | Violación de ToS, riesgos legales |

**Oportunidad de mercado**: 2+ billones de usuarios de WhatsApp globally, con crecimiento del 15% anual en uso empresarial.

### 1.3 Solución Propuesta

247 Sales Agent resuelve estos problemas mediante:

1. **Automatización nativa Android**: Utiliza Accessibility Service para interactuar directamente con la app oficial de WhatsApp
2. **Pipeline de ventas determinista**: 6 etapas predefinidas (Hook → Solución → Oferta → CTA) en lugar de IA no predecible
3. **Mimicry humano**: Delays aleatorizados, escritura natural, resets de pantalla para evitar detección
4. **Persistencia de campañas**: Auto-resume tras fallos, zero pérdida de progreso

### 1.4 Mercado Objetivo

| Segmento | Tamaño | Necesidad | Willingness to Pay |
|----------|--------|-----------|-------------------|
| **Consultores de ventas** | ~50,000 en España/Portugal | Lead generation escalable | €29-99/mes |
| **Agencias de marketing** | ~8,000 en Cataluña | Outreach automatizado para clientes | €49-149/mes |
| **Departamentos de RRHH** | ~15,000 PYMEs en España | Reclutamiento masivo | €29-49/mes |
| **Emprendedores digitales** | ~200,000 hispanohablantes | Prospección sin equipo de ventas | €9-29/mes |

**TAM (Total Addressable Market)**: €50M+ en España/Portugal  
**SAM (Serviceable Addressable Market)**: €15M (PYMEs tech-forward)  
**SOM (Serviceable Obtainable Market)**: €500K (año 1-2)

---

## 2. PLAN DE MARKETING Y MERCADO

### 2.1 Análisis Competitivo

| Competidor | Modelo | Precio | Debilidad |
|------------|--------|--------|-----------|
| WhatsApp Business API | Oficial | €0.005-0.08/conversación | Coste prohibitivo para scale |
| ManyChat | SaaS API-based | €15-199/mes | Baja deliverability, sin Android nativo |
| Wati | SaaS API-based | €29-99/mes | Requiere API verification |
| Respond.io | SaaS multi-canal | €79-199/mes | Complejidad, overkill para WhatsApp-only |
| **247 Sales Agent** | Android native + Freemium | **€9.99-99.99/año** | **Zero API cost, native deliverability** |

**Ventaja competitiva sostenible**: Barrera técnica significativa (Android Accessibility expertise) + efecto red (cada usuario genera datos para mejorar pipelines).

### 2.2 Estrategia de Marketing

**Fase 1 (Meses 1-6): Product-Led Growth**
- SEO técnico: "WhatsApp automation", "sales outreach tools", "automatizar WhatsApp"
- Content marketing: Blog posts, tutoriales en YouTube, casos de uso
- Free tier generoso para adopción viral

**Fase 2 (Meses 6-12): Paid Acquisition**
- Google Ads: Keywords de intent comercial
- LinkedIn Ads: Targeting a sales managers, HR directors
- Influencer partnerships: Micro-influencers en ventas/emprendeduría

**Fase 3 (Año 2+): Enterprise & Partnerships**
- Programa de partners con agencias de marketing
- White-label licensing para consultoras
- API interna para integraciones enterprise

### 2.3 Proyecciones de Ventas (3 años)

| Métrica | Año 1 | Año 2 | Año 3 |
|---------|-------|-------|-------|
| Usuarios Free | 5,000 | 20,000 | 50,000 |
| Usuarios Premium | 200 | 1,000 | 3,500 |
| Conversión Free→Paid | 4% | 5% | 7% |
| ARPU (Premium) | €89/año | €99/año | €119/año |
| **Ingresos Recurrentes** | **€17,800** | **€99,000** | **€416,500** |
| Crecimiento YoY | - | 456% | 321% |

### 2.4 Canales de Distribución

1. **Google Play Store**: Principal canal de adquisición (70% de usuarios)
2. **Web directa (247salesagent.com)**: Conversiones higher-value (30% de revenue)
3. **Affiliates**: 20% commission para referrers (lanzar Q2 2026)
4. **B2B direct sales**: Para cuentas enterprise (Q4 2026)

---

## 3. PLAN DE OPERACIONES

### 3.1 Ubicación e Infraestructura

**Domicilio fiscal**: Sitges, Barcelona (domicilio particular + workspace)
**Modelo**: 100% remoto con infraestructura cloud

| Recurso | Proveedor | Coste Mensual |
|---------|-----------|---------------|
| Hosting backend | Vercel Pro | €20 |
| Base de datos | Neon PostgreSQL | €19 |
| Pagos | Stripe (2.9% + €0.25/txn) | Variable |
| Herramientas dev | GitHub Copilot, etc. | €50 |
| **Total fijo** | | **€89/mes** |

### 3.2 Equipo y Tecnología

**Stack Tecnológico**:
- **Frontend Android**: Kotlin, Jetpack Compose, Coroutines
- **Backend**: Next.js 14, TypeScript, Prisma ORM
- **Database**: PostgreSQL (Neon serverless)
- **Payments**: Stripe Connect
- **Deployment**: Vercel + Google Play Store

**Desarrollo continuo**:
- Mantenimiento: 10-15 horas/semana
- Nuevas features: 20-30 horas/semana
- Customer support: 5 horas/semana

### 3.3 Cronograma de Operaciones (2026)

| Mes | Hito | Entregable |
|-----|------|------------|
| **Abril** | MVP refinement | Bug fixes, performance optimization |
| **Mayo** | Launch free tier | Google Play Store publication |
| **Junio** | Premium features | AI scripting, VSL builder |
| **Julio** | Marketing push | Content campaigns, SEO |
| **Agosto** | Partner program | Affiliate system |
| **Septiembre** | Enterprise tier | White-label options |
| **Q4** | Scale | B2B sales, integrations |

### 3.4 Proveedores y Partnerships

| Tipo | Proveedor | Propósito |
|------|-----------|-----------|
| Payments | Stripe | Procesamiento de suscripciones |
| Database | Neon | PostgreSQL serverless |
| Hosting | Vercel | Edge functions, API hosting |
| App Distribution | Google Play | Android app store |
| Legal | Gestoría local | Contabilidad, facturación |

---

## 4. ORGANIZACIÓN Y RECURSOS HUMANOS

### 4.1 Estructura Legal

**Forma jurídica**: Autónomo (RETA)  
**Actividad económica**: Desarrollo de software y servicios digitales  
**IAE**: 849.1 (Servicios informáticos)  
**Fecha de inicio de actividad**: [Fecha RETA alta]

### 4.2 Equipo Fundador

**Carlos Vitor Botti Calvi**  
- **Rol**: Founder & Developer  
- **Experiencia**: 20+ años en desarrollo de software, trading algorítmico  
- **Competencias**: Full-stack development, Android, fintech, SaaS  
- **Dedicación**: Full-time (40+ horas/semana)

### 4.3 Necesidades Futuras de Personal

| Fase | Rol | Cuando | Coste |
|------|-----|--------|-------|
| Fase 2 (Año 2) | Customer Success | 500+ paid users | €25,000/año |
| Fase 3 (Año 3) | Sales/BD | Enterprise push | €35,000/año + comisiones |
| Fase 3 (Año 3) | Marketing manager | Scale acquisition | €30,000/año |

**Modelo**: Primero validar product-market fit (Año 1) antes de contratar.

### 4.4 Asesoría Externa

| Servicio | Proveedor | Coste Anual |
|----------|-----------|-------------|
| Contabilidad | Gestoría local | €1,200 |
| Legal (TOS, privacidad) | Abogado online | €500 |
| Consultoría fiscal | Asesor fiscal | €800 |
| **Total** | | **€2,500/año** |

---

## 5. PLAN FINANCIERO

### 5.1 Inversión Inicial Requerida

| Concepto | Importe | Justificación |
|----------|---------|---------------|
| **Hardware** | €2,500 | Laptop desarrollo, dispositivo Android secundario para testing |
| **Software** | €1,200 | Licencias anuales (IDEs, tools, services) |
| **Marketing inicial** | €2,000 | Google Ads, content creation, SEO tools |
| **Legal y setup** | €800 | Gestoría, registro, docs legales |
| **Reserva operativa** | €1,500 | 3 meses de runway |
| **TOTAL** | **€8,000** | |

**Financiación**:
- Aportación propia: €2,000 (25%)
- **Ayuda Sitges**: €6,000 (75%)
- **Otras ayudas en trámite**: Kit Digital (€2,000-12,000), ACCIÓ (€25,000-75,000 si aplica)

### 5.2 Facturación de Gastos a la Ayuda

| Categoría | Concepto | Importe | Factura |
|-----------|----------|---------|---------|
| Hardware | Laptop desarrollo | €1,800 | [Proveedor] |
| Hardware | Android test device | €400 | [Proveedor] |
| Software | Licencias anuales | €800 | [Proveedores varios] |
| Servicios | Hosting año 1 | €240 | Vercel, Neon |
| Servicios | Gestoría año 1 | €600 | [Gestoría] |
| Marketing | Google Ads | €1,000 | Google |
| Marketing | Content/SEO tools | €500 | [Proveedores] |
| **TOTAL** | | **€5,340** | |
| **80% subvencionable** | | **€4,272** | |

*Nota: El 80% de €5,340 = €4,272. Se solicitará el máximo de €6,000 para cubrir gastos adicionales de marketing y desarrollo.*

### 5.3 Proyección de Cash Flow (12 meses)

| Mes | Ingresos | Gastos | Balance | Acumulado |
|-----|----------|--------|---------|-----------|
| **M1** | €0 | €500 | -€500 | -€500 |
| **M2** | €0 | €400 | -€400 | -€900 |
| **M3** | €200 | €350 | -€150 | -€1,050 |
| **M4** | €400 | €350 | €50 | -€1,000 |
| **M5** | €600 | €400 | €200 | -€800 |
| **M6** | €800 | €450 | €350 | -€450 |
| **M7** | €1,000 | €500 | €500 | €50 |
| **M8** | €1,200 | €550 | €650 | €700 |
| **M9** | €1,400 | €600 | €800 | €1,500 |
| **M10** | €1,600 | €650 | €950 | €2,450 |
| **M11** | €1,800 | €700 | €1,100 | €3,550 |
| **M12** | €2,000 | €750 | €1,250 | €4,800 |

**Break-even**: Mes 7  
**ROI año 1**: +€4,800 (después de inversión inicial)  
**Con ayuda Sitges**: Break-even adelantado a Mes 4

### 5.4 Análisis de Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| WhatsApp cambia ToS | Media | Alto | Diversificación a Telegram, Signal |
| Competencia de Meta | Baja | Crítico | Pivot a white-label, nichos específicos |
| Baja adopción inicial | Media | Alto | Free tier agresivo, marketing contenido |
| Problemas técnicos Android | Media | Medio | Testing exhaustivo, soporte rápido |
| Cambios regulatorios GDPR | Baja | Medio | Privacy-by-design, compliance proactiva |

### 5.5 Ratios Financieros Proyectados

| Ratio | Año 1 | Año 2 | Año 3 |
|-------|-------|-------|-------|
| Margen bruto | 85% | 88% | 90% |
| CAC (Customer Acquisition Cost) | €15 | €12 | €8 |
| LTV (Lifetime Value) | €89 | €150 | €250 |
| LTV:CAC | 5.9:1 | 12.5:1 | 31:1 |
| Churn rate (mensual) | 5% | 3% | 2% |
| MRR al cierre | €167 | €825 | €3,470 |

---

## 6. ANEXOS

### 6.1 Documentación Soporte

- [ ] DNI/NIE del solicitante
- [ ] Certificado de empadronamiento (Sitges)
- [ ] Alta RETA (Modelo 036)
- [ ] Certificados de estar al corriente (AEAT + SS)
- [ ] Facturas de gastos subvencionables
- [ ] Certificado de validación Penedès-Garraf

### 6.2 Declaración Responsable

Yo, **Carlos Vitor Botti Calvi**, con NIE [número], declaro bajo mi responsabilidad que:

1. Los datos contenidos en este plan de negocio son ciertos y verificables
2. La actividad empresarial descrita se desarrollará desde el municipio de Sitges
3. No he recibido otras ayudas públicas para los mismos gastos en los últimos 3 años
4. Me comprometo a mantener la actividad durante un mínimo de 3 años
5. Autorizo al Ajuntament de Sitges a verificar la veracidad de los datos presentados

Sitges, [fecha]

_________________________  
Firma del solicitante

---

**Documento generado**: 26 de marzo de 2026  
**Versión**: 1.0  
**Próxima revisión**: Tras validación Penedès-Garraf

---

*Este plan de negocio cumple con los requisitos del Anexo 4 de las bases de la convocatoria "Ajuts per a fomentar l'emprenedoria i la creació de noves empreses" del Ajuntament de Sitges.*
