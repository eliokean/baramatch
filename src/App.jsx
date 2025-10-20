// App.jsx
import { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

// =================== IMPORT PAGES PUBLIQUES ===================
import Intro from "./template/first.jsx";
import AuthForm from "./template/form.jsx";
import Onboarding from "./template/onboarding.jsx";

// =================== IMPORT CLIENT ===================
import Navbar from "./template/navbar.jsx";
import BaaraMath from "./template/one.jsx";
import Message from "./template/message.jsx";
import Commande from "./template/commande.jsx";
import Profil from "./template/profil.jsx";
import ArtisanProfil from "./template/artisan_profil.jsx";

// =================== IMPORT ARTISAN ===================
import DashboardArtisan from "./template/one_artisan.jsx";
import ProfileArtisan from "./template/artisan_profil.jsx";
import MessageArtisan from "./template/message_artisan.jsx";
import CommandeArtisan from "./template/commande_artisan.jsx";
import NavbarArtisan from "./template/navbar_artisan.jsx";
import HeaderArtisan from "./template/PageHeader_artisan.jsx";

// =================== CONTEXTE AUTH ===================
const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
  return context;
};

// =================== PROVIDER AUTH ===================
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateUserType = (type) => {
    const updatedUser = { ...user, type };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserType, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// =================== ROUTE PROTÉGÉE ===================
function ProtectedRoute({ children, requiredType }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" state={{ from: location }} replace />;
  if (!user.type) return <Navigate to="/onboarding" replace />;
  if (requiredType && user.type !== requiredType) {
    return <Navigate to={user.type === "client" ? "/" : "/artisan/dashboard"} replace />;
  }

  return children;
}

// =================== CONTENU PRINCIPAL ===================
function AppContent() {
  const location = useLocation();
  const { user } = useAuth();

  // Pages spécifiques
  const pagesClient = ["/home", "/message", "/commande", "/profil"];
const pagesArtisan = [
  "/artisan/dashboard",
  "/artisan/messages",
  "/artisan/commandes",
  "/artisan/profil",
];


  // Gestion de l’affichage des barres
  const afficherNavbarClient =
    user?.type === "client" && pagesClient.includes(location.pathname);
  const afficherNavbarArtisan =
    user?.type === "prestataire" && pagesArtisan.includes(location.pathname);

  // 🔹 Cacher navbar et header sur la page d’accueil Intro
  const isIntroPage = location.pathname === "/";

  return (
    <>
      {/* Header + Navbar Artisan */}
      {!isIntroPage && afficherNavbarArtisan && (
        <>
          <HeaderArtisan />
          <NavbarArtisan />
        </>
      )}

      {/* Navbar Client */}
      {!isIntroPage && afficherNavbarClient && <Navbar />}

      {/* Routes */}
      <Routes>
        {/* 🔹 PAGE D’INTRODUCTION (page d’entrée sans nav ni header) */}
        <Route path="/" element={<Intro />} />

        {/* ROUTES PUBLIQUES */}
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/onboarding" element={<OnboardingRoute />} />

        {/* CLIENT */}
        <Route
          path="/home"
          element={
            <ProtectedRoute requiredType="client">
              <BaaraMath />
            </ProtectedRoute>
          }
        />
        <Route
          path="/message"
          element={
            <ProtectedRoute requiredType="client">
              <Message />
            </ProtectedRoute>
          }
        />
        <Route
          path="/commande"
          element={
            <ProtectedRoute requiredType="client">
              <Commande />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profil"
          element={
            <ProtectedRoute requiredType="client">
              <Profil />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artisan/:id"
          element={
            <ProtectedRoute requiredType="client">
              <ArtisanProfil />
            </ProtectedRoute>
          }
        />

        {/* ARTISAN */}
        <Route
          path="/artisan/dashboard"
          element={
            <ProtectedRoute requiredType="prestataire">
              <DashboardArtisan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artisan/profil"
          element={
            <ProtectedRoute requiredType="prestataire">
              <ProfileArtisan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artisan/messages"
          element={
            <ProtectedRoute requiredType="prestataire">
              <MessageArtisan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artisan/commandes"
          element={
            <ProtectedRoute requiredType="prestataire">
              <CommandeArtisan />
            </ProtectedRoute>
          }
        />

        {/* REDIRECTION PAR DÉFAUT */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

// =================== ROUTE ONBOARDING ===================
function OnboardingRoute() {
  const { user, updateUserType } = useAuth();
  const [selectedAccount, setSelectedAccount] = useState(null);

  if (!user) return <Navigate to="/home" replace />;
  if (user.type)
    return <Navigate to={user.type === "client" ? "/home" : "/artisan/dashboard"} replace />;

  const handleContinue = () => {
    if (selectedAccount) updateUserType(selectedAccount);
  };

  return (
    <Onboarding
      selectedAccount={selectedAccount}
      setSelectedAccount={setSelectedAccount}
      onContinue={handleContinue}
    />
  );
}

// =================== APP PRINCIPAL ===================
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;
