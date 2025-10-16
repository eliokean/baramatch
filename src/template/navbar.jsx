// template/navbar.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MessageSquare, ShoppingBag, User, Menu, X, Home, Search } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "/message", label: "Messages", icon: MessageSquare },
    { id: "/commande", label: "Commandes", icon: ShoppingBag },
    { id: "/profil", label: "Profil", icon: User },
  ];

  // Masquer la navbar sur certaines pages
  const hideNavbar = ["/auth"].includes(location.pathname);
  if (hideNavbar) return null;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - à gauche */}
          <NavLink to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-cyan-600 hidden sm:block">BaaraMath</span>
          </NavLink>

          {/* Menu desktop - centré avec texte et icônes */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.id}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Menu mobile - uniquement icônes */}
          <nav className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.id}
                  to={item.id}
                  className={({ isActive }) =>
                    `p-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon size={20} />
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}