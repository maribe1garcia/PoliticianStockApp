import { NavLink } from 'react-router-dom'
import { Home, Users, TrendingUp, BarChart3, Info } from 'lucide-react'

function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/politicians', icon: Users, label: 'Politicians' },
    { to: '/trades', icon: TrendingUp, label: 'Trades' },
    { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/about', icon: Info, label: 'About' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:relative md:border-t-0 md:border-b md:mb-4">
      <div className="container mx-auto">
        <ul className="flex justify-around md:justify-center md:gap-8 py-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 px-4 py-2 transition-colors ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-500'
                  }`
                }
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
