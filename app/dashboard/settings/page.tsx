'use client';

import { useState } from 'react';
import { User, Bell, Shield, Save, Check } from 'lucide-react';

export default function SettingsPage() {
  // Safe initial state loading from localStorage directly
  const [name, setName] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('saas_name') || 'Mukesh Sharma' : 'Mukesh Sharma';
  });
  
  const [email, setEmail] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('saas_email') || 'mukesh@example.com' : 'mukesh@example.com';
  });

  const [emailNotifications, setEmailNotifications] = useState(() => {
    if (typeof window === 'undefined') return true;
    const val = localStorage.getItem('saas_email_notifs');
    return val !== null ? val === 'true' : true;
  });

  const [securityAlerts, setSecurityAlerts] = useState(() => {
    if (typeof window === 'undefined') return true;
    const val = localStorage.getItem('saas_security_alerts');
    return val !== null ? val === 'true' : true;
  });

  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Save values to localStorage
    localStorage.setItem('saas_name', name);
    localStorage.setItem('saas_email', email);
    localStorage.setItem('saas_email_notifs', String(emailNotifications));
    localStorage.setItem('saas_security_alerts', String(securityAlerts));

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Account Settings</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">Manage your profile info, preferences, and security configurations.</p>
      </div>

      {saved && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
          <Check className="h-4 w-4" />
          Settings saved successfully to browser storage!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Information Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h3>
              <p className="text-xs text-slate-500">Update your name and email details.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Notifications Settings Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notifications</h3>
              <p className="text-xs text-slate-500">Choose what updates you want to receive via email.</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</div>
                <div className="text-xs text-slate-500">Receive weekly traffic and revenue summary updates.</div>
              </div>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer pt-2 border-t border-slate-100 dark:border-slate-800/60">
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">Security Alerts</div>
                <div className="text-xs text-slate-500">Get notified if there is an unknown login to your account.</div>
              </div>
              <input
                type="checkbox"
                checked={securityAlerts}
                onChange={(e) => setSecurityAlerts(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
              />
            </label>
          </div>
        </div>

        {/* Security Settings Card */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Password & Security</h3>
              <p className="text-xs text-slate-500">Manage your account password.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-slate-900 dark:text-white">Password</div>
              <div className="text-xs text-slate-500">Last changed 3 months ago</div>
            </div>
            <button
              type="button"
              onClick={() => alert('Password reset link sent to your email!')}
              className="px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg transition-colors cursor-pointer"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium text-sm transition-colors shadow-sm cursor-pointer"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}