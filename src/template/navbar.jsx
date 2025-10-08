import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, MessageSquare, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { id: "/", label: "Accueil", icon: Home },
    { id: "/explorer", label: "Explorer", icon: Search },
    { id: "/message", label: "Messages", icon: MessageSquare },
    { id: "/commande", label: "Commandes", icon: ShoppingBag },
    { id: "/profil", label: "Profil", icon: User },
  ];

  // Masquer la navbar sur certaines pages (ex: /auth)
  const hideNavbar = ["/auth"].includes(location.pathname);
  if (hideNavbar) return null;

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full px-6">
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

          {/* Navigation Items */}
          <ul className="flex items-center gap-2">
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
                          : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
