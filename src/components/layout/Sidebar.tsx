import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Trophy, BarChart3, Settings } from 'lucide-react';

const links = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/curriculum', label: 'Curriculum', icon: BookOpen },
  { to: '/practice', label: 'Practice', icon: Trophy },
  { to: '/stats', label: 'Stats', icon: BarChart3 },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-surface border-r border-surface-lighter z-50 flex-col">
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

      {/* Mobile top header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-surface border-b border-surface-lighter z-50 px-4 py-3 flex items-center">
        <h1 className="text-lg font-bold text-text-bright tracking-tight">
          <span className="text-primary">∫</span> Calculus Mastery
        </h1>
      </header>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-surface-lighter z-50 flex justify-around px-2 py-1 safe-bottom">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-2 py-2 rounded-lg text-[10px] font-medium transition-colors min-w-[48px] ${
                isActive
                  ? 'text-primary-light'
                  : 'text-text-muted'
              }`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
