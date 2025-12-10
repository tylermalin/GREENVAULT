export type AssetType = 'crypto' | 'stablecoin' | 'carbon_credit' | 'alternative';

export interface PortfolioHolding {
  id: string;
  assetType: AssetType;
  name: string;
  symbol: string;
  quantity: number;
  value: number;
  change24h: number;
  change7d: number;
}

export interface Transaction {
  id: string;
  date: Date;
  asset: string;
  assetType: AssetType;
  type: 'buy' | 'sell';
  quantity: number;
  value: number;
  approvalStatus: 'approved' | 'pending' | 'rejected';
}

export interface CarbonCredit {
  id: string;
  projectName: string;
  vintage: number;
  registry: string;
  quantity: number;
  impactScore: number;
  verificationStatus: 'verified' | 'pending' | 'rejected';
}

export interface RiskMetrics {
  overallScore: number;
  volatilityExposure: number;
  concentrationRisk: number;
  complianceHealth: number;
}

export interface PortfolioOverview {
  totalHoldings: number;
  currentValue: number;
  change24h: number;
  change7d: number;
  liquidityPercent: number;
  riskScore: number;
  esgAllocationPercent: number;
  allocations: {
    crypto: number;
    stablecoins: number;
    carbonCredits: number;
    alternatives: number;
  };
}

export interface DashboardFilters {
  dateRange: '1D' | '7D' | '1M' | 'YTD';
  assetType: AssetType | 'all';
  esgCategory?: string;
}

export interface Alert {
  id: string;
  type: 'approval' | 'warning' | 'info';
  message: string;
  timestamp: Date;
}

