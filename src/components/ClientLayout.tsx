'use client';

import { useSidebar } from './SidebarContext';
import Sidebar from './Sidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="flex h-screen">
      {/* Toggle button - fixed position */}
      <button
        onClick={toggle}
        className="fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
        title={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        </svg>
      </button>

      {/* Main content area */}
      <div className={`
        flex-1 overflow-auto transition-all duration-300 ease-in-out
        ${isOpen ? 'lg:mr-64' : 'lg:mr-0'}
      `}>
        {children}
      </div>
      
      {/* Sidebar */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-0 lg:w-0'}
      `}>
        <Sidebar />
      </div>
    </div>
  );
}