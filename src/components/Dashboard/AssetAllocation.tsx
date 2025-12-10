'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AssetType, PortfolioHolding } from '@/types';

interface AssetAllocationProps {
  holdings: PortfolioHolding[];
}

const COLORS: Record<AssetType, string> = {
  crypto: '#3b82f6', // blue for crypto
  stablecoin: '#CCCCCC', // medium gray for stablecoins
  carbon_credit: '#A2E83D', // green accent for ESG/carbon
  alternative: '#FFD966', // gold highlight for alternatives
};

export default function AssetAllocation({ holdings }: AssetAllocationProps) {
  const [selectedFilter, setSelectedFilter] = useState<AssetType | 'all'>('all');
  const [expandedAsset, setExpandedAsset] = useState<string | null>(null);

  const filters: { label: string; value: AssetType | 'all' }[] = [
    { label: 'All', value: 'all' },
    { label: 'Crypto', value: 'crypto' },
    { label: 'Stablecoins', value: 'stablecoin' },
    { label: 'Carbon Credits', value: 'carbon_credit' },
    { label: 'ESG Assets', value: 'carbon_credit' },
  ];

  const filteredHoldings = selectedFilter === 'all' 
    ? holdings 
    : holdings.filter(h => h.assetType === selectedFilter);

  // Calculate totals by asset type
  const totalsByType = filteredHoldings.reduce((acc, holding) => {
    if (!acc[holding.assetType]) {
      acc[holding.assetType] = 0;
    }
    acc[holding.assetType] += holding.value;
    return acc;
  }, {} as Record<AssetType, number>);

  const totalValue = Object.values(totalsByType).reduce((sum, val) => sum + val, 0);

  const barData = Object.entries(totalsByType).map(([type, value]) => ({
    type: type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value,
    percentage: (value / totalValue) * 100,
    color: COLORS[type as AssetType],
  }));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="card-dark">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h3 className="text-lg font-semibold text-white mb-4 sm:mb-0">Asset Allocation</h3>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter.value
                  ? 'bg-green-accent text-charcoal'
                  : 'bg-[#2F2F2F] text-light-gray hover:bg-[#3F3F3F]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData} layout="vertical">
            <XAxis 
              type="number" 
              tick={{ fontSize: 12, fill: '#CCCCCC' }} 
              tickFormatter={(value) => `$${(value / 1000000).toFixed(0)}M`}
              stroke="#CCCCCC"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              type="category" 
              dataKey="type" 
              tick={{ fontSize: 12, fill: '#CCCCCC' }} 
              width={100}
              stroke="#CCCCCC"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ backgroundColor: '#1F1F1F', border: '1px solid #333333', borderRadius: '8px', color: '#FFFFFF' }}
              labelStyle={{ color: '#FFFFFF' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Asset Details */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-light-gray mb-3">Holdings Details</h4>
        {filteredHoldings.map((holding) => (
          <div key={holding.id} className="border border-[#333333] rounded-card p-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setExpandedAsset(expandedAsset === holding.id ? null : holding.id)}
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[holding.assetType] }}
                  />
                  <div>
                    <p className="font-medium text-white">{holding.name}</p>
                    <p className="text-sm text-light-gray">{holding.symbol}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-white">{formatCurrency(holding.value)}</p>
                <p className="text-sm text-light-gray">
                  {holding.quantity.toLocaleString()} {holding.symbol}
                </p>
              </div>
              {expandedAsset === holding.id ? (
                <ChevronUp className="w-5 h-5 text-light-gray ml-4" />
              ) : (
                <ChevronDown className="w-5 h-5 text-light-gray ml-4" />
              )}
            </div>
            {expandedAsset === holding.id && (
              <div className="mt-4 pt-4 border-t border-[#333333] grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-light-gray">24h Change</p>
                  <p className={`font-medium ${holding.change24h >= 0 ? 'text-green-accent' : 'text-red-500'}`}>
                    {holding.change24h >= 0 ? '+' : ''}{holding.change24h.toFixed(2)}%
                  </p>
                </div>
                <div>
                  <p className="text-light-gray">7d Change</p>
                  <p className={`font-medium ${holding.change7d >= 0 ? 'text-green-accent' : 'text-red-500'}`}>
                    {holding.change7d >= 0 ? '+' : ''}{holding.change7d.toFixed(2)}%
                  </p>
                </div>
                <div>
                  <p className="text-light-gray">Asset Type</p>
                  <p className="font-medium text-white">
                    {holding.assetType.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </p>
                </div>
                <div>
                  <p className="text-light-gray">Allocation</p>
                  <p className="font-medium text-white">
                    {((holding.value / totalValue) * 100).toFixed(2)}%
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

