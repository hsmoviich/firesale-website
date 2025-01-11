import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Users, FileText, Settings, LogOut } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Clients', href: '/clients' },
  { icon: FileText, label: 'Properties', href: '/properties' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white h-full flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Fire Sale</h1>
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100",
              pathname === item.href && "bg-gray-100 text-blue-600"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <button className="flex items-center text-gray-700 hover:text-gray-900">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  )
}

