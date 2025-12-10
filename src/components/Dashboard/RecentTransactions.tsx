'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Transaction } from '@/types';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getStatusIcon = (status: Transaction['approvalStatus']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-accent" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const isHighValue = (value: number) => value > 1000000;

  return (
    <div className="card-dark">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        <button className="text-sm text-green-accent hover:text-[#8FD030] font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#333333]">
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Asset</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-light-gray">Type</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-light-gray">Quantity</th>
              <th className="text-right py-3 px-4 text-sm font-semibold text-light-gray">Value</th>
              <th className="text-center py-3 px-4 text-sm font-semibold text-light-gray">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransactions.map((tx) => (
              <tr
                key={tx.id}
                className={`border-b border-[#333333] hover:bg-[#2F2F2F] transition-colors ${
                  isHighValue(tx.value) ? 'bg-[#3F3F3F]' : ''
                }`}
              >
                <td className="py-3 px-4 text-sm text-light-gray">{formatDate(tx.date)}</td>
                <td className="py-3 px-4">
                  <span className="font-medium text-white">{tx.asset}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-1">
                    {tx.type === 'buy' ? (
                      <ArrowDownRight className="w-4 h-4 text-green-accent" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm font-medium capitalize text-white">{tx.type}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-right text-sm text-white">
                  {tx.quantity.toLocaleString()}
                </td>
                <td className={`py-3 px-4 text-right text-sm font-semibold ${
                  isHighValue(tx.value) ? 'text-gold-highlight' : 'text-white'
                }`}>
                  {formatCurrency(tx.value)}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center">
                    {getStatusIcon(tx.approvalStatus)}
                    <span className="ml-2 text-sm capitalize text-light-gray">{tx.approvalStatus}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#333333]">
          <p className="text-sm text-light-gray">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, transactions.length)} of {transactions.length} transactions
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-lg border border-[#333333] text-sm font-medium text-light-gray hover:bg-[#2F2F2F] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-lg border border-[#333333] text-sm font-medium text-light-gray hover:bg-[#2F2F2F] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

