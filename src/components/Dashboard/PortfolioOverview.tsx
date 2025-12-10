'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { PortfolioOverview as PortfolioOverviewType } from '@/types';

interface PortfolioOverviewProps {
  data: PortfolioOverviewType;
  historicalData: { date: string; value: number }[];
}

const COLORS = {
  crypto: '#3b82f6', // blue for crypto
  stablecoins: '#CCCCCC', // medium gray for stablecoins
  carbonCredits: '#A2E83D', // green accent for ESG/carbon
  alternatives: '#FFD966', // gold highlight for alternatives
};

export default function PortfolioOverview({ data, historicalData }: PortfolioOverviewProps) {
  const pieData = [
    { name: 'Crypto', value: data.allocations.crypto, color: COLORS.crypto },
    { name: 'Stablecoins', value: data.allocations.stablecoins, color: COLORS.stablecoins },
    { name: 'Carbon Credits', value: data.allocations.carbonCredits, color: COLORS.carbonCredits },
    { name: 'Alternatives', value: data.allocations.alternatives, color: COLORS.alternatives },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Total Holdings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card-dark overflow-hidden">
          <p className="text-sm text-light-gray mb-1">Total Holdings</p>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white break-all" title={formatCurrency(data.totalHoldings)}>
            {formatCurrency(data.totalHoldings)}
          </p>
        </div>
        <div className="card-dark overflow-hidden">
          <p className="text-sm text-light-gray mb-1">Current Value</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-1 sm:gap-0">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white break-all flex-shrink" title={formatCurrency(data.currentValue)}>
              {formatCurrency(data.currentValue)}
            </p>
            <div className={`flex items-center flex-shrink-0 ${data.change24h >= 0 ? 'text-green-accent' : 'text-red-500'}`}>
              {data.change24h >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-medium whitespace-nowrap">{formatPercent(data.change24h)}</span>
            </div>
          </div>
          <p className="text-xs text-light-gray mt-1">24h change</p>
        </div>
        <div className="card-dark overflow-hidden">
          <p className="text-sm text-light-gray mb-1">7-Day Change</p>
          <div className="flex items-center">
            <p className={`text-lg md:text-xl lg:text-2xl font-bold break-all ${data.change7d >= 0 ? 'text-green-accent' : 'text-red-500'}`}>
              {formatPercent(data.change7d)}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="card-dark">
          <h3 className="text-lg font-semibold text-white mb-4">Asset Allocation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => `${value.toFixed(1)}%`}
                contentStyle={{ backgroundColor: '#1F1F1F', border: '1px solid #333333', borderRadius: '8px', color: '#FFFFFF' }}
                labelStyle={{ color: '#FFFFFF' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Trend Line */}
        <div className="card-dark">
          <h3 className="text-lg font-semibold text-white mb-4">Portfolio Value Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={historicalData}>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12, fill: '#CCCCCC' }} 
                stroke="#CCCCCC"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#CCCCCC' }} 
                tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
                stroke="#CCCCCC"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                labelFormatter={(label) => `Date: ${label}`}
                contentStyle={{ backgroundColor: '#1F1F1F', border: '1px solid #333333', borderRadius: '8px', color: '#FFFFFF' }}
                labelStyle={{ color: '#FFFFFF' }}
              />
              <Line type="monotone" dataKey="value" stroke="#A2E83D" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="kpi-card">
          <p className="kpi-label mb-1">Liquidity</p>
          <p className="kpi-value text-3xl">{data.liquidityPercent.toFixed(1)}%</p>
        </div>
        <div className="kpi-card">
          <p className="kpi-label mb-1">Risk Score</p>
          <p className="text-3xl font-bold text-white">{data.riskScore}</p>
          <p className="text-xs text-light-gray mt-1">Lower is better</p>
        </div>
        <div className="kpi-card">
          <p className="kpi-label mb-1">ESG Allocation</p>
          <p className="kpi-value text-3xl">{data.esgAllocationPercent.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}

