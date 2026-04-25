import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, BarChart3, Settings } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/curriculum', label: 'Curriculum', icon: BookOpen },
  { to: '/practice', label: 'Practice', icon: Trophy },
  { to: '/stats', label: 'Statistics', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface border-r border-surface-lighter z-50 flex flex-col">
      <div className="p-6 border-b border-surface-lighter">
        <h1 className="text-xl font-bold text-text-bright tracking-tight">
          <span className="text-primary">∫</span> Calculus Mastery
        </h1>
        <p className="text-xs text-text-muted mt-1">90 Days to Pro</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary/20 text-primary-light'
                  : 'text-text-muted hover:bg-surface-light hover:text-text'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-surface-lighter">
        <p className="text-xs text-text-muted text-center">Built for mastery</p>
      </div>
    </aside>
  );
}
