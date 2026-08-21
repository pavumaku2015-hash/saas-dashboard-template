'use client';

import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon?: React.ReactNode;
}

export default function MetricCard({ title, value, change, isPositive, icon }: MetricCardProps) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">{title}</span>
        {icon && <div className="w-5 h-5 text-slate-400">{icon}</div>}
      </div>
      <div className="mt-2 flex items-baseline justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-xs font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}