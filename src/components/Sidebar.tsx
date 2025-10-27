'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from './SidebarContext';

const navigationItems = [
  { name: 'ילדים', href: '/children', icon: '👶' },
  { name: 'הורים', href: '/guardians', icon: '👨‍👩‍👧‍👦' },
  { name: 'מלווים', href: '/escorts', icon: '🚌' },
  { name: 'מוסדות', href: '/institutions', icon: '🏫' },
  { name: 'מפקחים', href: '/supervisors', icon: '👨‍💼' },
  { name: 'שיבוצים', href: '/assignments', icon: '📅' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-200 shadow-lg z-40
        transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">SMT</h1>
              <p className="text-sm text-gray-600">מערכת ניהול תחבורה</p>
            </div>
            
            {/* Close button for mobile */}
            <button
              onClick={close}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    // סגירת תפריט במובייל אחרי לחיצה
                    if (window.innerWidth < 1024) {
                      close();
                    }
                  }}
                  className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="text-lg ml-3">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              גרסה 1.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}