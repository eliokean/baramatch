import React from 'react';
import { Home, Search, MessageSquare, ShoppingBag, User } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'intro', label: 'Accueil', icon: Home },
    { id: 'explorer', label: 'Explorer', icon: Search },
    { id: 'message', label: 'Messages', icon: MessageSquare },
    { id: 'commande', label: 'Commandes', icon: ShoppingBag },
    { id: 'profil', label: 'Profil', icon: User }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-semibold text-blue-700">BaaraMatch</span>
          </div>

          {/* Navigation Items */}
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm
                      transition-all duration-200
                      ${isActive 
                        ? 'bg-blue-700 text-white hover:bg-blue-800' 
                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
                      }
                    `}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}