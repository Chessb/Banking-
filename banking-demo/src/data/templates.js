export const templateTabs = [
  { id: 'frontend', label: 'Frontend', description: 'Customer web app template', completion: 74 },
  { id: 'backend', label: 'Backend', description: 'API/service template', completion: 60 },
  { id: 'admin', label: 'Admin', description: 'Operations console template', completion: 65 }
];

export const frontendPages = [
  'Sign in / MFA',
  'Dashboard overview',
  'Accounts & statements',
  'Transfers & bill pay',
  'Investments & wallet'
];

export const frontendComponents = [
  'Top navigation with profile switcher',
  'Balance summary cards',
  'Recent transactions table',
  'Investment package cards',
  'Wallet connect status panel'
];

export const investmentPackages = [
  {
    id: 'starter-income',
    name: 'Starter Income',
    risk: 'Low',
    minimum: '$100',
    expectedRange: '3% - 6% / year',
    description: 'Bond-heavy package for conservative growth and liquidity.'
  },
  {
    id: 'balanced-growth',
    name: 'Balanced Growth',
    risk: 'Medium',
    minimum: '$500',
    expectedRange: '6% - 10% / year',
    description: 'Diversified index + fixed-income blend for long-term goals.'
  },
  {
    id: 'digital-assets-plus',
    name: 'Digital Assets Plus',
    risk: 'High',
    minimum: '$1,000',
    expectedRange: '8% - 18% / year',
    description: 'Crypto and innovation sleeve for higher-risk investors.'
  }
];

export const walletProviders = ['MetaMask', 'Coinbase Wallet', 'WalletConnect'];

export const backendDomains = [
  ['Identity', 'Authentication, MFA challenge, session refresh, role checks.'],
  ['Accounts', 'Account metadata, balances, statement snapshots, ownership links.'],
  ['Payments', 'Transfers, bill-pay scheduling, limits, and processor orchestration.'],
  ['Wallet & Assets', 'Wallet link lifecycle, asset balances, and on-chain transfer intents.'],
  ['Audit & Risk', 'Immutable event logs, risk scoring, and compliance exports.']
];

export const backendApis = [
  ['POST', '/api/v1/auth/login'],
  ['GET', '/api/v1/accounts'],
  ['POST', '/api/v1/transfers'],
  ['GET', '/api/v1/investments/packages'],
  ['POST', '/api/v1/investments/subscribe'],
  ['POST', '/api/v1/wallets/connect'],
  ['GET', '/api/v1/wallets/:id/portfolio'],
  ['GET', '/api/v1/admin/audit-events']
];

export const adminModules = [
  ['User Ops', 'KYC status, profile edits, lock/unlock, MFA resets, session revoke.'],
  ['Fraud Queue', 'Risk signal feed, event timeline, case owner assignment, escalation path.'],
  ['Disputes', 'Chargeback intake, SLA timers, evidence upload, resolution states.'],
  ['Investment Oversight', 'Package performance, risk flags, suitability checks, disclosures.'],
  ['Feature Controls', 'Feature flags, transfer limits, maintenance messaging, regional toggles.']
];
