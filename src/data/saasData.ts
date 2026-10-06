export interface EnterpriseDeal {
  id: string;
  name: string;
  industry: string;
  acv: number; // in USD
  seats: number;
  deploymentStage: 'Kickoff' | 'Integration' | 'Security Audit' | 'Live Ready';
  riskScore: 'Bajo' | 'Medio' | 'Alto';
  targetGoLiveWeeks: number;
  expansionPotential: string;
}

export interface MetricSummary {
  growthRate: number; // 14%
  smbChurnRate: number; // 3.2%
  smbChurnTarget: number; // 1.5%
  enterpriseDealsClosed: number; // 4
  currentARR: number;
  priorARR: number;
  smbCustomerCount: number;
  cacSMB: number;
  ltvDestroyedSMB: number;
}

export const QUARTER_DATA: MetricSummary = {
  growthRate: 14.0,
  smbChurnRate: 3.2,
  smbChurnTarget: 1.4,
  enterpriseDealsClosed: 4,
  currentARR: 3420000,
  priorARR: 3000000,
  smbCustomerCount: 840,
  cacSMB: 1250,
  ltvDestroyedSMB: 184000,
};

export const ENTERPRISE_DEALS: EnterpriseDeal[] = [
  {
    id: 'ent-1',
    name: 'Atlas Financial Systems',
    industry: 'FinTech / Banca',
    acv: 145000,
    seats: 450,
    deploymentStage: 'Security Audit',
    riskScore: 'Medio',
    targetGoLiveWeeks: 4,
    expansionPotential: '+60% ARR en renovación Q3',
  },
  {
    id: 'ent-2',
    name: 'Meridian Health Network',
    industry: 'Healthcare / Clínico',
    acv: 120000,
    seats: 380,
    deploymentStage: 'Integration',
    riskScore: 'Bajo',
    targetGoLiveWeeks: 6,
    expansionPotential: 'Multi-hospital roll-out ($220k)',
  },
  {
    id: 'ent-3',
    name: 'Logix Supply Solutions',
    industry: 'Logística & Cadena',
    acv: 110000,
    seats: 290,
    deploymentStage: 'Kickoff',
    riskScore: 'Alto',
    targetGoLiveWeeks: 8,
    expansionPotential: 'Integración ERP global',
  },
  {
    id: 'ent-4',
    name: 'OmniRetail Omnichannel',
    industry: 'E-Commerce / Retail',
    acv: 105000,
    seats: 310,
    deploymentStage: 'Live Ready',
    riskScore: 'Bajo',
    targetGoLiveWeeks: 2,
    expansionPotential: 'Expansión a filiales LATAM',
  },
];

export const ONBOARDING_BOTTLENECKS = [
  {
    stage: 'Registro & Setup Inicial (Día 0-3)',
    completionRate: 88,
    dropOff: 12,
    cause: 'Formulario inicial extenso y fricción en verificación de dominio corporativo.',
    severity: 'Media',
  },
  {
    stage: 'Conexión de Fuentes / Integración API (Día 4-7)',
    completionRate: 61,
    dropOff: 27,
    cause: 'Falta de conectores no-code preconfigurados; el cliente SMB requiere asistencia técnica que no tiene.',
    severity: 'Crítica',
  },
  {
    stage: 'Activación del Valor Primario (TTFV) (Día 8-14)',
    completionRate: 46,
    dropOff: 15,
    cause: 'Ausencia de plantillas pre-armadas; el usuario no experimenta el momento "Aha!" en su primera semana.',
    severity: 'Crítica',
  },
  {
    stage: 'Adopción del Equipo & Primer Ciclo de Facturación (Día 30)',
    completionRate: 42,
    dropOff: 4,
    cause: 'Baja recurrencia de login por administradores; falta de alertas proactivas de re-engagement.',
    severity: 'Alta',
  },
];

export const STRATEGIC_INITIATIVES = [
  {
    id: 'init-1',
    pillar: 'Onboarding & Retención SMB',
    priority: 'P0 - Inmediata',
    title: 'Self-Serve Fast-Track Onboarding & Reducción de TTFV a < 48 horas',
    owner: 'Head of Product & Growth',
    expectedImpact: 'Reducir churn SMB de 3.2% a <1.5%, recuperando ~$140k ARR anual.',
    actions: [
      'Lanzar plantillas "1-Click Quickstart" por vertical de negocio.',
      'Implementar checklist interactivo in-app con micro-incentivos de uso.',
      'Configurar alertas automáticas de onboarding estancado a las 72h vía email/Slack.',
    ],
  },
  {
    id: 'init-2',
    pillar: 'Protección y Expansión Enterprise',
    priority: 'P0 - Inmediata',
    title: 'Customer Success Swat Team para el Despliegue de las 4 Cuentas Enterprise',
    owner: 'VP of Customer Success & Solutions',
    expectedImpact: 'Garantizar go-live 100% a tiempo ($480k ARR) y habilitar $250k de expansión NRR.',
    actions: [
      'Designar un Technical Account Manager (TAM) dedicado para las 4 cuentas.',
      'Establecer reuniones ejecutivas quincenales (QBR / Steering committee).',
      'Auditar dependencias de seguridad y single-sign-on (SSO) de inmediato.',
    ],
  },
  {
    id: 'init-3',
    pillar: 'Alineación de Ventas e ICP',
    priority: 'P1 - Alta',
    title: 'Ajuste de Criterios de Calificación de Ventas (ICP Guardrails)',
    owner: 'Head of Sales & Marketing',
    expectedImpact: 'Detener adquisición de clientes SMB no viables que incrementan CAC y rotación.',
    actions: [
      'Elevar el scoring mínimo de lead para clientes SMB (fit técnico obligatorio).',
      'Desincentivar comisiones de ventas por cuentas con churn dentro de los primeros 90 días (Clawback).',
      'Reorientar el 30% del presupuesto de pauta digital hacia cuentas Mid-Market y Enterprise.',
    ],
  },
  {
    id: 'init-4',
    pillar: 'Finanzas & Gobernanza de Métricas',
    priority: 'P2 - Media',
    title: 'Tablero de Unit Economics y Cohortes de Churn Semanal',
    owner: 'Director Financiero (CFO) / FP&A',
    expectedImpact: 'Visibilidad en tiempo real del Net Revenue Retention (NRR) y Payback Period.',
    actions: [
      'Monitoreo semanal del Churn por cohorte de canal de adquisición.',
      'Revisión del LTV/CAC diferenciado: SMB vs Mid-Market vs Enterprise.',
      'Simulación de flujo de caja protegiendo el margen operativo bruto.',
    ],
  },
];
