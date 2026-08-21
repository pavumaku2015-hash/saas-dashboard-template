import Link from "next/link";
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  ShoppingBag, 
  Settings, 
  CreditCard,
  LogOut
} from "lucide-react";

const menuItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "#", icon: BarChart3 },
  { name: "Customers", href: "#", icon: Users },
  { name: "Orders", href: "#", icon: ShoppingBag },
  { name: "Billing", href: "#", icon: CreditCard },
  { name: "Settings", href: "#", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col justify-between p-4 h-screen sticky top-0">
      <div>
        {/* Brand Logo */}
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-lg">
            S
          </div>
          <span className="text-lg font-bold text-white tracking-wide">SaaSify Pro</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile / Footer */}
      <div className="border-t border-slate-800 pt-4 px-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold border border-indigo-500/30">
            AD
          </div>
          <div>
            <p className="text-xs font-medium text-white">Admin User</p>
            <p className="text-[10px] text-slate-400">admin@saasify.com</p>
          </div>
        </div>
        <button className="text-slate-400 hover:text-rose-400 transition-colors">
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}