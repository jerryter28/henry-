import React, { useState } from 'react';
import {
  TrendingUp,
  AlertTriangle,
  Building2,
  Users,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  DollarSign,
  Activity,
  Layers,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Download,
  Filter,
  BarChart3,
  BookOpen,
} from 'lucide-react';
import {
  QUARTER_DATA,
  ENTERPRISE_DEALS,
  ONBOARDING_BOTTLENECKS,
  STRATEGIC_INITIATIVES,
} from './data/saasData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'cot' | 'simulator' | 'enterprise'>('overview');
  
  // What-if simulator state
  const [simulatedChurn, setSimulatedChurn] = useState<number>(1.5);
  const [enterpriseExpansionRate, setEnterpriseExpansionRate] = useState<number>(20);
  const [smbGrowthRate, setSmbGrowthRate] = useState<number>(12);

  // Financial calculations
  const totalEnterpriseACV = ENTERPRISE_DEALS.reduce((acc, deal) => acc + deal.acv, 0);
  
  // Current annualized churn impact vs simulated
  const currentLostARR = Math.round(QUARTER_DATA.currentARR * (QUARTER_DATA.smbChurnRate / 100) * 4 * 0.45); // approx SMB portion
  const simulatedLostARR = Math.round(QUARTER_DATA.currentARR * (simulatedChurn / 100) * 4 * 0.45);
  const recoveredARR = Math.max(0, currentLostARR - simulatedLostARR);
  const simulatedEnterpriseExpansion = Math.round(totalEnterpriseACV * (enterpriseExpansionRate / 100));
  const netProjectedNewARR = Math.round(
    (QUARTER_DATA.currentARR * (smbGrowthRate / 100)) + simulatedEnterpriseExpansion + recoveredARR
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Corporate Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-100 tracking-tight text-sm sm:text-base">
                  SaaS Corporate Review & Strategic Advisory
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
                  Q-Review & Q+1 Action Plan
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Análisis Financiero Deductivo · Diagnóstico de Churn SMB · Gobernanza Enterprise
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Resumen Ejecutivo</span>
            </button>
            <button
              onClick={() => setActiveTab('cot')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'cot'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Razonamiento CoT</span>
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Simulador Q+1</span>
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                activeTab === 'enterprise'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise (4 Cuentas)</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Contextual */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-indigo-950/40 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span>INFORME TRIMESTRAL DE DESEMPEÑO</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">CRECIMIENTO +14%</span>
                <span aria-hidden="true">·</span>
                <span className="text-rose-400">ALERTA CHURN SMB 3.2%</span>
                <span aria-hidden="true">·</span>
                <span className="text-indigo-400">4 CUENTAS ENTERPRISE</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Diagnóstico de Rendimiento Trimestral y Hoja de Ruta Q+1
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Evaluación deductiva multicapa: el crecimiento bruto (+14%) es robusto en la superficie, pero la aceleración del Churn en SMB (3.2%) expone un fenómeno de <strong className="text-rose-300">cubo con fugas (Leaky Bucket)</strong> impulsado por onboarding deficiente. Simultáneamente, el cierre de 4 cuentas Enterprise reconfigura el mix de ingresos hacia un perfil de alto valor y ciclo largo que exige protección operativa inmediata.
              </p>
            </div>
            
            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                onClick={() => setActiveTab('cot')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-900/20"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Dictamen CoT</span>
              </button>
              <button
                onClick={() => setActiveTab('simulator')}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>Modelar Escenario Q+1</span>
              </button>
            </div>
          </div>
        </section>

        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top 4 KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric 1: Growth */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Crecimiento Suscripciones</span>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-white">+14.0%</span>
                  <span className="text-xs text-emerald-400 font-medium">QoQ</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  ARR estimado: <span className="text-slate-200 font-medium">$3.42M</span> (vs $3.00M Q anterior)
                </div>
                <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>

              {/* Metric 2: SMB Churn */}
              <div className="bg-slate-900 border border-rose-900/40 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-rose-300 uppercase tracking-wider">Churn Rate SMB</span>
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-rose-400">3.2%</span>
                  <span className="text-xs text-rose-400/80 font-mono">Mensual</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  Límite saludable: <span className="text-slate-200 font-medium">&lt; 1.5%</span> (Anualizado: ~32.8%)
                </div>
                <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              {/* Metric 3: Enterprise Logos */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cuentas Enterprise</span>
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-white">4</span>
                  <span className="text-xs text-indigo-400 font-medium">Cierres cerrados</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  ACV Total contratado: <span className="text-indigo-300 font-semibold">${(totalEnterpriseACV / 1000).toFixed(0)}k ARR</span>
                </div>
                <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              {/* Metric 4: Destrucción de Capital / LTV */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pérdida ARR por Churn SMB</span>
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-amber-400">-${(currentLostARR / 1000).toFixed(0)}k</span>
                  <span className="text-xs text-slate-400">Proyección Anual</span>
                </div>
                <div className="mt-2 text-xs text-slate-400">
                  Deterioro de Payback CAC por abandono temprano
                </div>
                <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
            </div>

            {/* Diagnostic Split: Onboarding Bottlenecks vs Enterprise Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Onboarding Friction Funnel */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-rose-400" />
                      Análisis de Embudo: Dónde se produce el Churn SMB (3.2%)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      El 54% de las cuentas SMB abandonan antes de alcanzar la activación (TTFV)
                    </p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">
                    Foco Crítico
                  </span>
                </div>

                <div className="space-y-4">
                  {ONBOARDING_BOTTLENECKS.map((b, idx) => (
                    <div key={idx} className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{b.stage}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400">Tasa éxito: <strong className="text-white">{b.completionRate}%</strong></span>
                          <span className="text-rose-400 font-semibold">Drop-off: -{b.dropOff}%</span>
                        </div>
                      </div>
                      
                      {/* Bar graph */}
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden flex">
                        <div
                          className="bg-indigo-500 h-2 rounded-l-full"
                          style={{ width: `${b.completionRate}%` }}
                        />
                        <div
                          className="bg-rose-500/70 h-2 rounded-r-full"
                          style={{ width: `${b.dropOff}%` }}
                        />
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        <strong className="text-slate-300">Causa raíz identificada:</strong> {b.cause}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-amber-950/30 border border-amber-900/40 rounded-lg text-xs text-amber-300 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                  <div>
                    <strong>Riesgo Financiero:</strong> Si seguimos adquiriendo SMBs sin corregir la fase de conexión API y activación Día 7, el Customer Acquisition Cost (CAC) no se amortiza, erosionando el margen bruto de la compañía.
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Enterprise Accounts Status */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      Las 4 Cuentas Enterprise Cerradas (${(totalEnterpriseACV / 1000).toFixed(0)}k ACV)
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Garantizar go-live y retención de estas cuentas es la prioridad #1 de revenue
                    </p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    100% Retención Target
                  </span>
                </div>

                <div className="space-y-3">
                  {ENTERPRISE_DEALS.map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3.5 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium text-slate-200 text-sm">{deal.name}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                            <span>{deal.industry}</span>
                            <span>·</span>
                            <span>{deal.seats} licencias</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-white">${(deal.acv / 1000).toFixed(0)}k ACV</div>
                          <div className={`text-xs font-medium ${
                            deal.riskScore === 'Alto' ? 'text-rose-400' :
                            deal.riskScore === 'Medio' ? 'text-amber-400' : 'text-emerald-400'
                          }`}>
                            Riesgo: {deal.riskScore}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Go-Live objetivo: <strong className="text-slate-300">{deal.targetGoLiveWeeks} semanas</strong></span>
                        </div>
                        <span className="text-indigo-400 font-medium">
                          {deal.expansionPotential}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-indigo-950/30 border border-indigo-900/40 rounded-lg text-xs text-indigo-300 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" />
                  <div>
                    <strong>Oportunidad de Net Revenue Retention (NRR):</strong> Estas 4 cuentas tienen potencial de expansión de +$250k adicionales durante el año si el time-to-value se cumple antes del día 45.
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Roadmap for Q+1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-400" />
                    Hoja de Ruta Estratégica Q+1: Plan de 4 Pilares
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Acciones concretas priorizadas para frenar el Churn y capitalizar las cuentas Enterprise
                  </p>
                </div>
                <div className="text-xs text-slate-400">
                  Horizonte de ejecución: <span className="text-slate-200 font-medium">Próximos 90 días</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STRATEGIC_INITIATIVES.map((init) => (
                  <div
                    key={init.id}
                    className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 space-y-3 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="text-xs font-mono font-medium text-indigo-400 uppercase">
                          {init.pillar}
                        </div>
                        <h3 className="text-sm font-semibold text-white leading-snug">
                          {init.title}
                        </h3>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium shrink-0 ${
                        init.priority.includes('P0')
                          ? 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                          : init.priority.includes('P1')
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {init.priority}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400">
                      <strong>Responsable:</strong> <span className="text-slate-300">{init.owner}</span>
                    </div>

                    <div className="text-xs text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 p-2 rounded">
                      <strong>Impacto Esperado:</strong> {init.expectedImpact}
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {init.actions.map((act, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ZERO-SHOT CHAIN OF THOUGHT DEDUCTIVE ANALYSIS */}
        {activeTab === 'cot' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-slate-800 pb-5">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider">
                <span>Metodología de Pensamiento Riguroso</span>
                <span>·</span>
                <span>Zero-Shot Chain of Thought (CoT)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Cadena de Razonamiento Deductivo y Dictamen Final
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Especialista en Negocios y Finanzas B2B SaaS · Análisis paso a paso de premisas, cuellos de botella y prescripción estratégica.
              </p>
            </div>

            {/* SECCIÓN 1: CADENA DE RAZONAMIENTO */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-l-4 border-indigo-500 pl-3">
                1. Cadena de Razonamiento Paso a Paso
              </h3>

              {/* Paso 1 */}
              <div className="bg-slate-950/80 border border-slate-800/90 rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-300 text-sm">
                    [Paso 1: Comprensión del problema y premisas]
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Fase 1: Desglose</span>
                </div>
                <div className="text-sm text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong>Premisa A (Top-line Momentum):</strong> El negocio experimentó un crecimiento trimestral del <strong>14% en suscripciones SaaS</strong>. Esto valida la tracción comercial y la demanda en el mercado.
                  </p>
                  <p>
                    <strong>Premisa B (Fuga y Destrucción de Valor):</strong> El Churn en el segmento SMB subió al <strong>3.2% mensual</strong>. En SaaS B2B, un churn mensual de 3.2% equivale a una tasa anualizada de aproximadamente <strong>~32.8% de pérdida de clientes</strong>, lo cual califica como un grave síntoma de <em>leaky bucket</em> (cubo con fugas).
                  </p>
                  <p>
                    <strong>Premisa C (Causalidad Específica):</strong> La causa raíz está formalmente diagnosticada: <strong>problemas en el onboarding</strong>. El cliente experimenta fricción prematura, no logra alcanzar el <em>Time-to-First-Value (TTFV)</em> y cancela antes de consolidar el hábito de uso.
                  </p>
                  <p>
                    <strong>Premisa D (Pilar Enterprise):</strong> Se cerraron <strong>4 cuentas grandes Enterprise</strong>. Esto introduce un cambio estructural: contratos de alto valor anual (ACV elevado), pero con altos requerimientos de soporte, ciclo de implementación largo y riesgo de concentración.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="bg-slate-950/80 border border-slate-800/90 rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-300 text-sm">
                    [Paso 2: Análisis analítico y relaciones causales]
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Fase 2: Diagnóstico Crítico</span>
                </div>
                <div className="text-sm text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong>1. Falacia del Crecimiento Bruto:</strong> Crecer al 14% con un churn de 3.2% en SMB oculta una ineficiencia en el gasto de adquisición (CAC). Si se continúa vertiendo inversión en ventas/marketing SMB sin resolver el onboarding, el CAC Payback se extenderá indefinidamente y se destruirá el Lifetime Value (LTV).
                  </p>
                  <p>
                    <strong>2. Doble Riesgo Operativo simultáneo:</strong>
                  </p>
                  <ul className="list-disc list-inside pl-2 space-y-1 text-slate-300">
                    <li>
                      <em>En SMB:</em> Abandono masivo en los primeros 30-60 días por falta de autoservicio o complejidad de integración.
                    </li>
                    <li>
                      <em>En Enterprise:</em> Si el equipo interno vuelca toda su atención a "apagar fuegos" en SMB, podría descuidar el onboarding de las 4 cuentas Enterprise. Un retraso o fracaso en el despliegue Enterprise causaría daño reputacional y pérdida de ingresos masivos contratados.
                    </li>
                  </ul>
                  <p>
                    <strong>3. Rebalanceo de Unit Economics:</strong> Las 4 cuentas Enterprise representan una inyección sustancial de ARR que eleva el Net Revenue Retention (NRR). No obstante, los clientes Enterprise tienen expectativas estrictas de SLA, seguridad e integración que no pueden postergarse.
                  </p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="bg-slate-950/80 border border-slate-800/90 rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-indigo-300 text-sm">
                    [Paso 3: Verificación de hipótesis y contraejemplos]
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Fase 3: Evaluación de Alternativas</span>
                </div>
                <div className="text-sm text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong>Hipótesis Alternativa 1: "¿Acelerar la captación de SMB para compensar el churn con más volumen?"</strong>
                    <br />
                    <em>Refutación:</em> Contraproducente. Aumentar el volumen de SMB agravará el embotellamiento del onboarding y saturará el equipo de soporte, multiplicando el churn y quemando efectivo en CAC irrecuperable.
                  </p>
                  <p>
                    <strong>Hipótesis Alternativa 2: "¿Abandonar el segmento SMB por completo de inmediato?"</strong>
                    <br />
                    <em>Refutación:</em> Prematuro. El crecimiento del 14% demuestra apetito de mercado. El fallo es puramente operativo/producto (onboarding), no necesariamente de validación de propuesta de valor. La solución óptima es crear un flujo de onboarding <em>self-serve</em> (Product-Led) y restringir el ICP.
                  </p>
                  <p>
                    <strong>Hipótesis Correcta: "Estrategia Dual Asimétrica"</strong>
                    <br />
                    <em>Validación:</em> Separar la ejecución en dos carriles: <strong>Automatizar y blindar el onboarding SMB</strong> mediante producto (cero fricción) mientras se asigna un <strong>equipo dedicado de Customer Success</strong> a las 4 cuentas Enterprise para asegurar 100% de éxito en go-live.
                  </p>
                </div>
              </div>
            </div>

            {/* SECCIÓN 2: DICTAMEN FINAL CONCLUYENTE */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                2. Dictamen Final Concluyente
              </h3>

              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-6 text-slate-200 space-y-4">
                <p className="font-medium text-white leading-relaxed">
                  Para el próximo trimestre, tu empresa debe ejecutar un <strong>Plan de Intervención Estratégica en 4 Acciones Inmediatas</strong> con el fin de proteger los unit economics y consolidar la expansión de ingresos:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-1.5">
                    <div className="text-xs font-mono text-emerald-400 font-semibold">1. OPERACIÓN ONBOARDING SMB (P0)</div>
                    <h4 className="text-sm font-bold text-white">Product-Led Onboarding y TTFV &lt; 48 Horas</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Rediseñar el flujo inicial eliminando fricciones técnicas. Implementar plantillas preconfiguradas, checklists interactivos y automatizar alertas para clientes inactivos tras el día 3. <strong>Meta:</strong> Reducir el churn SMB de 3.2% a menos del 1.5%.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-1.5">
                    <div className="text-xs font-mono text-indigo-400 font-semibold">2. BLINDAJE ENTERPRISE (P0)</div>
                    <h4 className="text-sm font-bold text-white">Equipo Exclusivo de Despliegue para las 4 Cuentas</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Designar un <em>Customer Success Manager (CSM)</em> y soporte técnico dedicado a las 4 nuevas cuentas. Establecer un plan de implementación a 30-60 días con métricas claras de adopción para asegurar el go-live y habilitar futuras expansiones (Net Dollar Retention).
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-1.5">
                    <div className="text-xs font-mono text-amber-400 font-semibold">3. REAJUSTE DE VENTAS & ICP (P1)</div>
                    <h4 className="text-sm font-bold text-white">Filtrado Riguroso del Cliente Ideal (ICP)</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Ajustar el criterio de calificación de ventas en SMB: frenar la entrada de clientes sin el perfil técnico o caso de uso adecuado. Modificar incentivos comerciales incluyendo cláusula de <em>clawback</em> si el cliente cancela en menos de 90 días.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-1.5">
                    <div className="text-xs font-mono text-sky-400 font-semibold">4. GOBERNANZA FINANCIERA (P1)</div>
                    <h4 className="text-sm font-bold text-white">Monitoreo Semanal de Cohortes y CAC Payback</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Establecer un ritual ejecutivo semanal para auditar las cohortes de churn en días 7, 14 y 30. Separar métricas de ingresos: medir de forma independiente el NRR Enterprise y el margen neto SMB para salvaguardar el flujo de caja operativo.
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-300 border-t border-slate-800 pt-3">
                  <strong>Conclusión Ejecutiva:</strong> El crecimiento del 14% certifica la demanda comercial; tu prioridad del próximo trimestre no es aumentar el gasto de adquisición, sino <strong>tapar la fuga del onboarding en SMB y garantizar el éxito operativo de las 4 cuentas Enterprise</strong> para asegurar rentabilidad y escalabilidad sostenible.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FINANCIAL & WHAT-IF SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
                <span>Modelado Financiero Predictivo</span>
                <span>·</span>
                <span>Análisis de Sensibilidad Q+1</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">
                Simulador de Sensibilidad: Impacto de Mitigar Churn SMB vs Expansión Enterprise
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Ajusta las variables de gestión para cuantificar el ARR recuperado y el nuevo ARR neto proyectado para el próximo trimestre.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sliders Controls */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 space-y-6">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Filter className="w-4 h-4 text-indigo-400" />
                  Variables de Control Q+1
                </h3>

                {/* Churn Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Churn Mensual SMB Objetivo:</span>
                    <span className="text-rose-400 font-bold font-mono">{simulatedChurn.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="4.0"
                    step="0.1"
                    value={simulatedChurn}
                    onChange={(e) => setSimulatedChurn(parseFloat(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0.8% (Óptimo)</span>
                    <span className="text-rose-400 font-semibold">Actual: 3.2%</span>
                    <span>4.0% (Crítico)</span>
                  </div>
                </div>

                {/* Enterprise Expansion Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Expansión de las 4 Cuentas Enterprise:</span>
                    <span className="text-indigo-400 font-bold font-mono">+{enterpriseExpansionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={enterpriseExpansionRate}
                    onChange={(e) => setEnterpriseExpansionRate(parseInt(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>0% (Sin expansión)</span>
                    <span>20% (Esperada)</span>
                    <span>50% (Agresiva)</span>
                  </div>
                </div>

                {/* SMB Growth Target Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Crecimiento Bruto SMB Proyectado:</span>
                    <span className="text-emerald-400 font-bold font-mono">+{smbGrowthRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={smbGrowthRate}
                    onChange={(e) => setSmbGrowthRate(parseInt(e.target.value))}
                    className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>5% (Moderado)</span>
                    <span>14% (Actual)</span>
                    <span>20% (Acelerado)</span>
                  </div>
                </div>

                <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400">
                  <p>
                    💡 <em>Nota analítica:</em> Reducir el churn a 1.5% aporta más EBITDA neto que elevar el gasto de adquisición con un embudo defectuoso.
                  </p>
                </div>
              </div>

              {/* Simulation Results Display */}
              <div className="lg:col-span-2 bg-slate-950/70 border border-slate-800 rounded-xl p-6 space-y-6">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Proyección de Impacto Financiero en ARR
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">ARR Recuperado por Churn</div>
                    <div className="text-2xl font-bold text-emerald-400 mt-2">
                      +${(recoveredARR / 1000).toFixed(0)}k
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Al bajar churn de 3.2% a {simulatedChurn}%
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                    <div className="text-xs text-slate-400">ARR Expansión Enterprise</div>
                    <div className="text-2xl font-bold text-indigo-400 mt-2">
                      +${(simulatedEnterpriseExpansion / 1000).toFixed(0)}k
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Sobre base contratada de ${(totalEnterpriseACV / 1000).toFixed(0)}k
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-indigo-900/40 rounded-xl p-4">
                    <div className="text-xs text-slate-400">ARR Proyectado Próximo Q</div>
                    <div className="text-2xl font-bold text-white mt-2">
                      ${(netProjectedNewARR / 1000000).toFixed(2)}M
                    </div>
                    <div className="text-[11px] text-indigo-300 mt-1">
                      Incremento neto positivo
                    </div>
                  </div>
                </div>

                {/* Scenario breakdown chart visual */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Composición del Retorno de Estrategia
                  </h4>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1 text-slate-300">
                        <span>Aporte por Control de Churn (Eficiencia de Onboarding):</span>
                        <span className="font-mono text-emerald-400 font-semibold">${(recoveredARR / 1000).toFixed(0)}k ARR</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full transition-all"
                          style={{ width: `${Math.min(100, (recoveredARR / (recoveredARR + simulatedEnterpriseExpansion + 1)) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1 text-slate-300">
                        <span>Aporte por Retención y Expansión Enterprise:</span>
                        <span className="font-mono text-indigo-400 font-semibold">${(simulatedEnterpriseExpansion / 1000).toFixed(0)}k ARR</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                          className="bg-indigo-500 h-2 rounded-full transition-all"
                          style={{ width: `${Math.min(100, (simulatedEnterpriseExpansion / (recoveredARR + simulatedEnterpriseExpansion + 1)) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong>Dictamen Cuantitativo:</strong> Si la compañía dedica 60 días a rediseñar el onboarding SMB para descender el churn al 1.5%, se generan de inmediato <strong>${(recoveredARR / 1000).toFixed(0)}k en ingresos recurrentes salvados</strong>, equivalentes a cerrar 2 o 3 cuentas Enterprise adicionales, pero con costo marginal cero de adquisición.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ENTERPRISE DETAIL & ROLLOUT MATRIX */}
        {activeTab === 'enterprise' && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase">
                <span>Cartera Estratégica</span>
                <span>·</span>
                <span>Gestión de Cuentas Clave</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">
                Matriz de Despliegue de las 4 Cuentas Enterprise Cerradas
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Desglose pormenorizado del estado de integración, asignación de recursos y plan de go-live para asegurar 100% de retención.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ENTERPRISE_DEALS.map((deal) => (
                <div
                  key={deal.id}
                  className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase">{deal.industry}</span>
                      <h3 className="text-lg font-bold text-white mt-0.5">{deal.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-400">${(deal.acv / 1000).toFixed(0)}k</div>
                      <span className="text-[11px] text-slate-400">ACV Anual</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                    <div>
                      <span className="text-slate-400">Fase actual:</span>
                      <div className="font-semibold text-slate-200 mt-0.5">{deal.deploymentStage}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Riesgo de retraso:</span>
                      <div className={`font-semibold mt-0.5 ${
                        deal.riskScore === 'Alto' ? 'text-rose-400' :
                        deal.riskScore === 'Medio' ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {deal.riskScore}
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400">Licencias contratadas:</span>
                      <div className="font-semibold text-slate-200 mt-0.5">{deal.seats} usuarios activos</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Objetivo Go-Live:</span>
                      <div className="font-semibold text-indigo-300 mt-0.5">{deal.targetGoLiveWeeks} semanas</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-300">
                      <strong>Potencial de Expansión (Upsell / Cross-sell):</strong>
                      <p className="text-indigo-300 mt-0.5">{deal.expansionPotential}</p>
                    </div>

                    <div className="text-xs text-slate-400 bg-slate-900 p-2.5 rounded border border-slate-800">
                      <strong>Plan de Acción Inmediato Q+1:</strong> Asignar Solution Architect para resolver bloqueos de seguridad y programar primera revisión de valor ejecutiva (QBR) en día 45.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <p>SaaS Strategic Advisory Suite · Análisis Cuantitativo y Dictamen Basado en Metodología Deductiva Zero-Shot Chain of Thought</p>
      </footer>
    </div>
  );
}
