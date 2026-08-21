'use client';

import { useState } from 'react';
import { CreditCard, Download, CheckCircle2, Zap } from 'lucide-react';

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending';
  plan: string;
}

const invoices: Invoice[] = [
  { id: 'INV-001', date: 'Aug 01, 2026', amount: '$299.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: 'INV-002', date: 'Jul 01, 2026', amount: '$299.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: 'INV-003', date: 'Jun 01, 2026', amount: '$299.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
  { id: 'INV-004', date: 'May 01, 2026', amount: '$299.00', status: 'Paid', plan: 'Pro Plan - Monthly' },
];

export default function BillingPage() {
  const [isUpgrading, setIsUpgrading] = useState(false);

  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Billing & Subscription</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your billing information, active subscription plan, and download invoices.</p>
      </div>

      {/* Current Plan Card */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="space-y-2 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/30 text-indigo-200 border border-indigo-400/20">
            <Zap className="h-3.5 w-3.5 text-indigo-400" />
            Current Plan
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Pro Plan</h2>
          <p className="text-slate-300 text-sm max-w-md">
            You are currently enjoying unlimited access to analytics, custom roles, and priority support.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 z-10 w-full md:w-auto">
          <div className="text-right hidden md:block">
            <div className="text-2xl font-bold">$299<span className="text-xs text-slate-400 font-normal"> /month</span></div>
            <div className="text-xs text-emerald-400 flex items-center justify-end gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> Renews Sep 1, 2026
            </div>
          </div>
          <button 
            onClick={() => alert('You are already on the Pro Plan!')}
            className="px-5 py-2.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer text-center"
          >
            Manage Plan
          </button>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Payment Method</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-14 bg-indigo-600 text-white rounded flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
              VISA
            </div>
            <div>
              <div className="font-semibold text-sm text-slate-900 dark:text-white">Visa ending in •••• 4242</div>
              <div className="text-xs text-slate-500">Expiry 12/28 • Default payment card</div>
            </div>
          </div>
          <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer">
            Edit Card
          </button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Billing History & Invoices</h3>
          <span className="text-xs text-slate-400">Showing last 4 invoices</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Invoice ID</th>
                <th className="p-4">Billing Date</th>
                <th className="p-4">Plan Description</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{inv.id}</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{inv.date}</td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{inv.plan}</td>
                  <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{inv.amount}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400">
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => alert(`Downloading ${inv.id}.pdf...`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <Download className="h-3.5 w-3.5" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}