'use client';

import { useState } from 'react';
import { Download, Filter } from 'lucide-react';
import DashboardHeader from './Dashboard/DashboardHeader';
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
import { DashboardFilters } from '@/types';

export default function Dashboard() {
  const [filters, setFilters] = useState<DashboardFilters>({
    dateRange: '7D',
    assetType: 'all',
  });

  // Generate mock data
  const portfolioData = generatePortfolioOverview();
  const holdings = generateHoldings();
  const transactions = generateTransactions(20);
  const carbonCredits = generateCarbonCredits();
  const riskMetrics = generateRiskMetrics();
  const alerts = generateAlerts();
  const historicalData = generateHistoricalData(30);

  const handleExport = () => {
    // In a real app, this would generate and download a PDF/CSV
    alert('Export functionality would generate a report here');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
            {(['1D', '7D', '1M', 'YTD'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setFilters({ ...filters, dateRange: range })}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filters.dateRange === range
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-300'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>

        {/* Dashboard Panels */}
        <div className="space-y-6">
          <PortfolioOverview data={portfolioData} historicalData={historicalData} />
          <AssetAllocation holdings={holdings} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentTransactions transactions={transactions} />
            <ESGPanel carbonCredits={carbonCredits} />
          </div>
          <RiskCompliance riskMetrics={riskMetrics} alerts={alerts} />
        </div>
      </main>
    </div>
  );
}

