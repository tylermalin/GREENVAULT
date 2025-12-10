'use client';

import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import { RiskMetrics, Alert } from '@/types';

interface RiskComplianceProps {
  riskMetrics: RiskMetrics;
  alerts: Alert[];
}

export default function RiskCompliance({ riskMetrics, alerts }: RiskComplianceProps) {
  const riskData = [
    { name: 'Risk Score', value: riskMetrics.overallScore, fill: '#ef4444' },
    { name: 'Remaining', value: 100 - riskMetrics.overallScore, fill: '#e5e7eb' },
  ];

  const getRiskLevel = (score: number) => {
    if (score < 30) return { label: 'Low', color: 'text-green-accent', bgColor: 'bg-[#2F3F2F]' };
    if (score < 60) return { label: 'Medium', color: 'text-yellow-500', bgColor: 'bg-[#3F3F2F]' };
    return { label: 'High', color: 'text-red-500', bgColor: 'bg-[#3F2F2F]' };
  };

  const riskLevel = getRiskLevel(riskMetrics.overallScore);

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'approval':
        return <CheckCircle className="w-5 h-5 text-green-accent" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'info':
        return <Shield className="w-5 h-5 text-light-gray" />;
    }
  };

  const formatTimeAgo = (date: Date) => {
    const hours = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Risk Score */}
      <div className="card-dark">
        <h3 className="text-lg font-semibold text-white mb-6">Risk & Compliance</h3>
        
        {/* Radial Chart */}
        <div className="flex flex-col items-center mb-6">
          <ResponsiveContainer width="100%" height={200}>
            <RadialBarChart
              innerRadius="60%"
              outerRadius="90%"
              data={riskData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" cornerRadius={10}>
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </RadialBar>
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <p className="text-sm text-light-gray mb-1">Overall Risk Score</p>
            <p className={`text-4xl font-bold ${riskLevel.color}`}>{riskMetrics.overallScore}</p>
            <p className={`text-sm font-medium mt-1 ${riskLevel.color}`}>{riskLevel.label} Risk</p>
          </div>
        </div>

        {/* Risk Indicators */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-[#2F2F2F] rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-sm font-medium text-light-gray">Volatility Exposure</span>
            </div>
            <span className="text-sm font-semibold text-white">{riskMetrics.volatilityExposure}%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#2F2F2F] rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm font-medium text-light-gray">Concentration Risk</span>
            </div>
            <span className="text-sm font-semibold text-white">{riskMetrics.concentrationRisk}%</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#2F3F2F] rounded-lg border border-green-accent/30">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-green-accent" />
              <span className="text-sm font-medium text-light-gray">Compliance Health</span>
            </div>
            <span className="text-sm font-semibold text-green-accent">{riskMetrics.complianceHealth}%</span>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="card-dark">
        <h3 className="text-lg font-semibold text-white mb-6">Alerts & Notifications</h3>
        <div className="space-y-3">
          {alerts.length === 0 ? (
            <p className="text-sm text-light-gray text-center py-8">No active alerts</p>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border ${
                  alert.type === 'warning'
                    ? 'bg-[#3F3F2F] border-yellow-500/30'
                    : alert.type === 'approval'
                    ? 'bg-[#2F3F2F] border-green-accent/30'
                    : 'bg-[#2F2F2F] border-[#333333]'
                }`}
              >
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{alert.message}</p>
                    <p className="text-xs text-light-gray mt-1">{formatTimeAgo(alert.timestamp)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

