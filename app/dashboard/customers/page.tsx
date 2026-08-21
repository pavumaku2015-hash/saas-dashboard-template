'use client';

import { useState } from 'react';
import { Search, MoreHorizontal, UserPlus, Filter } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: 'Active' | 'Pending' | 'Inactive';
  spent: string;
  joinDate: string;
}

const initialCustomers: Customer[] = [
  { id: '1', name: 'Rahul Sharma', email: 'rahul@example.com', plan: 'Pro', status: 'Active', spent: '$299.00', joinDate: '2024-01-15' },
  { id: '2', name: 'Priya Patel', email: 'priya@example.com', plan: 'Enterprise', status: 'Active', spent: '$1,200.00', joinDate: '2024-02-01' },
  { id: '3', name: 'Amit Verma', email: 'amit@example.com', plan: 'Basic', status: 'Inactive', spent: '$49.00', joinDate: '2023-11-20' },
  { id: '4', name: 'Sneha Gupta', email: 'sneha@example.com', plan: 'Pro', status: 'Pending', spent: '$299.00', joinDate: '2024-03-10' },
  { id: '5', name: 'Vikram Singh', email: 'vikram@example.com', plan: 'Enterprise', status: 'Active', spent: '$2,400.00', joinDate: '2023-08-05' },
];

export default function CustomersPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter logic
  const filteredCustomers = initialCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = filterStatus === 'All' || customer.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Customers</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Manage your subscription customers and their status.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors cursor-pointer">
          <UserPlus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search customer name or email..."
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
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total Spent</th>
                <th className="p-4">Join Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{customer.name}</div>
                      <div className="text-xs text-slate-400">{customer.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="font-medium text-slate-800 dark:text-slate-200">{customer.plan}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          customer.status === 'Active'
                            ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400'
                            : customer.status === 'Pending'
                            ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400'
                            : 'bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400'
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-slate-900 dark:text-slate-100">{customer.spent}</td>
                    <td className="p-4 text-xs text-slate-500 dark:text-slate-400">{customer.joinDate}</td>
                    <td className="p-4 text-right">
                      <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    No customers found matching your search.
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