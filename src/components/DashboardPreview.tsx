'use client';

import { useMemo } from 'react';
import PortfolioOverview from './Dashboard/PortfolioOverview';
import AssetAllocation from './Dashboard/AssetAllocation';
import RecentTransactions from './Dashboard/RecentTransactions';
import ESGPanel from './Dashboard/ESGPanel';
import RiskCompliance from './Dashboard/RiskCompliance';
import {
  generatePortfolioOverview,
  generateHoldings,
  generateTransactions,
  generateCarbonCredits,
  generateRiskMetrics,
  generateAlerts,
  generateHistoricalData,
} from '@/lib/mockData';

export default function DashboardPreview() {
  // Generate mock data once on client side to avoid hydration mismatches
  const { portfolioData, holdings, transactions, carbonCredits, riskMetrics, alerts, historicalData } = useMemo(() => {
    return {
      portfolioData: generatePortfolioOverview(),
      holdings: generateHoldings(),
      transactions: generateTransactions(5), // Fewer transactions for preview
      carbonCredits: generateCarbonCredits(),
      riskMetrics: generateRiskMetrics(),
      alerts: generateAlerts(),
      historicalData: generateHistoricalData(30),
    };
  }, []);

  return (
    <div className="space-y-4 bg-charcoal">
      <PortfolioOverview data={portfolioData} historicalData={historicalData} />
      <AssetAllocation holdings={holdings} />
      <div className="grid grid-cols-1 gap-4">
        <RecentTransactions transactions={transactions} />
        <ESGPanel carbonCredits={carbonCredits} />
      </div>
      <RiskCompliance riskMetrics={riskMetrics} alerts={alerts} />
    </div>
  );
}

