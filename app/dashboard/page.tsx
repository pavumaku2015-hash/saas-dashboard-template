import MetricCard from "../components/metric-card";
import SalesChart from "../components/sales-chart";
import ThemeToggle from "../components/theme-toggle"; 
import { DollarSign, Users, ShoppingCart, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Top Header Section with Theme Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Welcome back to your template preview.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
            Upgrade to Pro ↗
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={<Users className="w-5 h-5" />} title="Total Users" value="10,482" change="+12%" isPositive={true} />
      </div>

      {/* Analytics & Sales Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Recent Sales</h3>
          <div className="space-y-4">
            {[
              { name: "Olivia Martin", email: "olivia@email.com", amount: "+$1,999.00" },
              { name: "Jackson Lee", email: "jackson@email.com", amount: "+$39.00" },
              { name: "Isabella Nguyen", email: "isabella@email.com", amount: "+$299.00" },
            ].map((sale, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{sale.name}</p>
                  <p className="text-xs text-slate-500">{sale.email}</p>
                </div>
                <span className="font-semibold text-sm">{sale.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}