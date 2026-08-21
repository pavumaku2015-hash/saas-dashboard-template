"use client";

import { 
  Users, 
  DollarSign, 
  ShoppingBag, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";

import OverviewChart from "./components/overview-chart";
import ThemeToggle from "./components/theme-toggle";

const stats = [
  { name: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
  { name: "Active Subscriptions", value: "+2,350", change: "+180.1%", icon: Users },
  { name: "Sales", value: "+12,234", change: "+19%", icon: ShoppingBag },
  { name: "Active Now", value: "+573", change: "+201", icon: TrendingUp },
];

const recentSales = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", initial: "OM" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", initial: "JL" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", initial: "IN" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", initial: "WK" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-8 font-sans transition-colors duration-200">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back to your template preview.</p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <span>Upgrade to Pro</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.name}</span>
              <item.icon className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{item.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Recent Activity */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {/* Chart Box */}
        <div className="md:col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Revenue Overview</h3>
          <OverviewChart />
        </div>

        {/* Recent Activity Box */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Sales</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">You made 265 sales this month.</p>
          <div className="space-y-6">
            {recentSales.map((sale) => (
              <div key={sale.email} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {sale.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{sale.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{sale.email}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{sale.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}