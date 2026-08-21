'use client';

import { useState } from 'react';
import { Search, Filter, ShoppingBag, Eye, MoreHorizontal } from 'lucide-react';

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Processing' | 'Cancelled';
  date: string;
}

const initialOrders: Order[] = [
  { id: 'ORD-9821', customerName: 'Rahul Sharma', customerEmail: 'rahul@example.com', product: 'Pro Plan Subscription', amount: '$299.00', status: 'Completed', date: 'Aug 20, 2026' },
  { id: 'ORD-9822', customerName: 'Priya Patel', customerEmail: 'priya@example.com', product: 'Enterprise License', amount: '$1,200.00', status: 'Completed', date: 'Aug 19, 2026' },
  { id: 'ORD-9823', customerName: 'Amit Verma', customerEmail: 'amit@example.com', product: 'Basic Add-on Pack', amount: '$49.00', status: 'Processing', date: 'Aug 18, 2026' },
  { id: 'ORD-9824', customerName: 'Sneha Gupta', customerEmail: 'sneha@example.com', product: 'Pro Plan Subscription', amount: '$299.00', status: 'Cancelled', date: 'Aug 15, 2026' },
  { id: 'ORD-9825', customerName: 'Vikram Singh', customerEmail: 'vikram@example.com', product: 'Enterprise Yearly', amount: '$2,400.00', status: 'Completed', date: 'Aug 12, 2026' },
];

export default function OrdersPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter orders logic
  const filteredOrders = initialOrders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Orders Management</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Track and manage all customer purchases and fulfillment status.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-semibold">
            <ShoppingBag className="h-4 w-4" />
            Total Orders: {initialOrders.length}
          </span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by order ID, product or name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="h-4 w-4 text-slate-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Processing">Processing</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Product</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{order.id}</td>
                    <td className="p-4">
                      <div className="font-medium text-slate-900 dark:text-slate-100">{order.customerName}</div>
                      <div className="text-xs text-slate-400">{order.customerEmail}</div>
                    </td>
                    <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{order.product}</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-slate-100">{order.amount}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          order.status === 'Completed'
                            ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                            : order.status === 'Processing'
                            ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400'
                            : 'bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-slate-500 dark:text-slate-400">{order.date}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Viewing details for order: ${order.id}`)}
                        className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                        title="View Order"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400">
                    No orders found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}