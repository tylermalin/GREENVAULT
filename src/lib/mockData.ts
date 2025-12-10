import { 
  PortfolioOverview, 
  PortfolioHolding, 
  Transaction, 
  CarbonCredit, 
  RiskMetrics,
  Alert 
} from '@/types';

// Seeded random number generator for deterministic values
let seed = 12345;
const seededRandom = () => {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
};

// Generate random number between min and max (deterministic)
const random = (min: number, max: number) => seededRandom() * (max - min) + min;

// Generate random date within range (deterministic)
const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + seededRandom() * (end.getTime() - start.getTime()));
};

export const generatePortfolioOverview = (): PortfolioOverview => {
  return {
    totalHoldings: 125000000,
    currentValue: 142500000,
    change24h: 2.34,
    change7d: 5.67,
    liquidityPercent: 68.5,
    riskScore: 42,
    esgAllocationPercent: 28.3,
    allocations: {
      crypto: 45.2,
      stablecoins: 26.5,
      carbonCredits: 18.7,
      alternatives: 9.6,
    },
  };
};

export const generateHoldings = (): PortfolioHolding[] => {
  // Reset seed for consistent generation
  seed = 12345;
  
  const cryptoAssets = ['BTC', 'ETH', 'SOL', 'AVAX', 'MATIC'];
  const stablecoins = ['USDC', 'USDT', 'DAI'];
  const alternatives = ['GOLD', 'REAL', 'ART'];
  
  const holdings: PortfolioHolding[] = [];
  
  // Crypto holdings
  cryptoAssets.forEach((symbol, idx) => {
    holdings.push({
      id: `crypto-${idx}`,
      assetType: 'crypto',
      name: symbol === 'BTC' ? 'Bitcoin' : symbol === 'ETH' ? 'Ethereum' : symbol,
      symbol,
      quantity: random(100, 5000),
      value: random(5000000, 50000000),
      change24h: random(-5, 8),
      change7d: random(-10, 15),
    });
  });
  
  // Stablecoin holdings
  stablecoins.forEach((symbol, idx) => {
    holdings.push({
      id: `stable-${idx}`,
      assetType: 'stablecoin',
      name: symbol,
      symbol,
      quantity: random(1000000, 10000000),
      value: random(1000000, 10000000),
      change24h: random(-0.1, 0.1),
      change7d: random(-0.2, 0.2),
    });
  });
  
  // Alternative holdings
  alternatives.forEach((symbol, idx) => {
    holdings.push({
      id: `alt-${idx}`,
      assetType: 'alternative',
      name: symbol,
      symbol,
      quantity: random(100, 1000),
      value: random(2000000, 15000000),
      change24h: random(-2, 3),
      change7d: random(-5, 8),
    });
  });
  
  return holdings;
};

export const generateTransactions = (count: number = 20): Transaction[] => {
  // Reset seed for consistent generation
  seed = 54321;
  
  const assets = ['BTC', 'ETH', 'USDC', 'USDT', 'SOL', 'Carbon Credit V2023', 'Carbon Credit V2024'];
  const types: ('buy' | 'sell')[] = ['buy', 'sell'];
  const statuses: ('approved' | 'pending' | 'rejected')[] = ['approved', 'pending', 'rejected'];
  
  const transactions: Transaction[] = [];
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  for (let i = 0; i < count; i++) {
    const asset = assets[Math.floor(seededRandom() * assets.length)];
    transactions.push({
      id: `tx-${i}`,
      date: randomDate(thirtyDaysAgo, now),
      asset,
      assetType: asset.includes('Carbon') ? 'carbon_credit' : asset.includes('USDC') || asset.includes('USDT') ? 'stablecoin' : 'crypto',
      type: types[Math.floor(seededRandom() * types.length)],
      quantity: random(10, 1000),
      value: random(50000, 5000000),
      approvalStatus: statuses[Math.floor(seededRandom() * statuses.length)],
    });
  }
  
  return transactions.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const generateCarbonCredits = (): CarbonCredit[] => {
  // Reset seed for consistent generation
  seed = 98765;
  
  const projects = [
    'Amazon Rainforest Conservation',
    'Renewable Energy Wind Farm',
    'Solar Power Initiative',
    'Reforestation Project',
    'Ocean Cleanup Initiative',
  ];
  
  const registries = ['Verra', 'Gold Standard', 'Climate Action Reserve', 'American Carbon Registry'];
  const vintages = [2020, 2021, 2022, 2023, 2024];
  const statuses: ('verified' | 'pending' | 'rejected')[] = ['verified', 'pending', 'rejected'];
  
  return projects.map((project, idx) => ({
    id: `cc-${idx}`,
    projectName: project,
    vintage: vintages[Math.floor(seededRandom() * vintages.length)],
    registry: registries[Math.floor(seededRandom() * registries.length)],
    quantity: random(1000, 50000),
    impactScore: random(85, 98),
    verificationStatus: statuses[Math.floor(seededRandom() * statuses.length)],
  }));
};

export const generateRiskMetrics = (): RiskMetrics => {
  return {
    overallScore: 42,
    volatilityExposure: 35,
    concentrationRisk: 28,
    complianceHealth: 92,
  };
};

export const generateAlerts = (): Alert[] => {
  return [
    {
      id: 'alert-1',
      type: 'approval',
      message: 'Transaction #TX-2024-001 requires approval ($2.5M BTC purchase)',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    },
    {
      id: 'alert-2',
      type: 'warning',
      message: 'Portfolio concentration risk increased by 5%',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    },
    {
      id: 'alert-3',
      type: 'info',
      message: 'Monthly compliance report generated',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    },
  ];
};

export const generateHistoricalData = (days: number = 30) => {
  // Reset seed for consistent generation
  seed = 11111;
  
  const data = [];
  const now = new Date();
  let value = 130000000;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    value += random(-2000000, 3000000);
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(value),
    });
  }
  
  return data;
};

