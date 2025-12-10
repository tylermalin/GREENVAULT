'use client';

import { CheckCircle, Clock, XCircle, Leaf } from 'lucide-react';
import { CarbonCredit } from '@/types';

interface ESGPanelProps {
  carbonCredits: CarbonCredit[];
}

export default function ESGPanel({ carbonCredits }: ESGPanelProps) {
  const totalCredits = carbonCredits.reduce((sum, cc) => sum + cc.quantity, 0);
  const verifiedCredits = carbonCredits.filter(cc => cc.verificationStatus === 'verified');
  const verifiedPercent = (verifiedCredits.reduce((sum, cc) => sum + cc.quantity, 0) / totalCredits) * 100;
  const avgImpactScore = carbonCredits.reduce((sum, cc) => sum + cc.impactScore, 0) / carbonCredits.length;

  const getStatusIcon = (status: CarbonCredit['verificationStatus']) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-5 h-5 text-green-accent" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="card-dark">
      <div className="flex items-center space-x-2 mb-6">
        <Leaf className="w-6 h-6 text-green-accent" />
        <h3 className="text-lg font-semibold text-white">ESG / Carbon Credit Holdings</h3>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="kpi-card">
          <p className="kpi-label mb-1">Total Carbon Credits</p>
          <p className="kpi-value text-2xl">{formatNumber(totalCredits)}</p>
          <p className="text-xs text-light-gray mt-1">tCO₂e</p>
        </div>
        <div className="kpi-card">
          <p className="kpi-label mb-1">Verified Credits</p>
          <p className="kpi-value text-2xl">{verifiedPercent.toFixed(1)}%</p>
          <p className="text-xs text-light-gray mt-1">
            {formatNumber(verifiedCredits.reduce((sum, cc) => sum + cc.quantity, 0))} tCO₂e
          </p>
        </div>
        <div className="kpi-card">
          <p className="kpi-label mb-1">Portfolio Impact Score</p>
          <p className="text-2xl font-bold text-gold-highlight">{avgImpactScore.toFixed(1)}</p>
          <p className="text-xs text-light-gray mt-1">Out of 100</p>
        </div>
      </div>

      {/* Carbon Credits Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#333333]">
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Project Name</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Vintage</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Registry</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-light-gray">Quantity</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-light-gray">Impact Score</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-light-gray">Status</th>
            </tr>
          </thead>
          <tbody>
            {carbonCredits.map((credit) => (
              <tr
                key={credit.id}
                className="border-b border-[#333333] hover:bg-[#2F2F2F] transition-colors"
              >
                <td className="py-3 px-4">
                  <span className="font-medium text-white">{credit.projectName}</span>
                </td>
                <td className="py-3 px-4 text-sm text-light-gray">{credit.vintage}</td>
                <td className="py-3 px-4 text-sm text-light-gray">{credit.registry}</td>
                <td className="py-3 px-4 text-right text-sm font-medium text-white">
                  {formatNumber(credit.quantity)} tCO₂e
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className="w-16 bg-[#333333] rounded-full h-2">
                      <div
                        className="bg-green-accent h-2 rounded-full"
                        style={{ width: `${credit.impactScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-white w-10 text-right">
                      {credit.impactScore}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {getStatusIcon(credit.verificationStatus)}
                    <span className="text-sm capitalize text-light-gray">
                      {credit.verificationStatus}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

