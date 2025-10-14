// src/template/navbar.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  CalendarDays,
  MessageSquare,
  ClipboardList,
  User,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // ✅ Icônes Lucide cohérentes avec chaque section
  const navItems = [
    { id: "/accueil_artisan", label: "Accueil", icon: Home },
    { id: "/agenda", label: "Agenda", icon: CalendarDays },
    { id: "/message_artisan", label: "Messages", icon: MessageSquare },
    { id: "/gestion", label: "Gestion", icon: ClipboardList },
    { id: "/profil_artisan", label: "Profil", icon: User },
  ];

  // Masquer la navbar sur certaines pages (ex: /auth)
  const hideNavbar = ["/auth"].includes(location.pathname);
  if (hideNavbar) return null;

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-semibold text-blue-700">
              BaaraMatch
            </span>
          </div>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.id}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.id}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-blue-700 text-white hover:bg-blue-800"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
