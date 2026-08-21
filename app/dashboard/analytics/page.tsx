'use client';

import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  { title: 'Total Revenue', value: '$48,250.00', change: '+12.5%', isPositive: true, icon: DollarSign },
  { title: 'Active Subscriptions', value: '1,420', change: '+8.2%', isPositive: true, icon: Users },
  { title: 'Conversion Rate', value: '3.6%', change: '-0.4%', isPositive: false, icon: Activity },
  { title: 'MRR Growth', value: '$12,400', change: '+24.1%', isPositive: true, icon: TrendingUp },
];

const topCountries = [
  { country: 'United States', users: '640', percentage: '45%' },
  { country: 'India', users: '320', percentage: '22%' },
  { country: 'United Kingdom', users: '210', percentage: '15%' },
  { country: 'Germany', users: '150', percentage: '10%' },
  { country: 'Others', users: '100', percentage: '8%' },
];

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics Overview</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Detailed metrics and performance indicators for your SaaS platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</span>
                <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                <span className={`flex items-center text-xs font-semibold ${stat.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {stat.isPositive ? <ArrowUpRight className="h-3 w-3 mr-0.5" /> : <ArrowDownRight className="h-3 w-3 mr-0.5" />}
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Growth Graph Placeholder Card */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Revenue vs Expenses</h3>
            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full font-medium">Year 2026</span>
          </div>
          
          {/* Visual Bar Representation */}
          <div className="h-64 flex items-end justify-between gap-2 pt-6 border-b border-slate-100 dark:border-slate-800">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
              // Dynamic mock heights for bars
              const heights = ['h-32', 'h-40', 'h-36', 'h-48', 'h-56', 'h-52', 'h-60', 'h-44', 'h-50', 'h-58', 'h-64', 'h-60'];
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className={`w-full max-w-[28px] ${heights[index]} bg-indigo-600 group-hover:bg-indigo-500 rounded-t-md transition-all duration-300`}></div>
                  <span className="text-[10px] text-slate-400">{month}</span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
              <span>Net Revenue Growth</span>
            </div>
          </div>
        </div>

        {/* Traffic / User Distribution by Country */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Audience by Country</h3>
          <div className="space-y-4">
            {topCountries.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{item.country}</span>
                  <span className="text-slate-500">{item.users} users ({item.percentage})</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full" 
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}