import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./template/navbar.jsx";
import Intro from "./template/first.jsx";
import AuthForm from "./template/form.jsx";
import Explorer from "./template/explorer.jsx";
import Message from "./template/message.jsx";
import Commande from "./template/commande.jsx";
import Profil from "./template/profil.jsx";
import ArtisanProfil from "./template/artisan_profil.jsx";
import BaaraMath from "./template/one.jsx";

import DashboardArtisan from "./template/one_artisan.jsx"
import ProfileArtisan from "./template/artisan_profil.jsx";
import MessageArtisan from "./template/message_artisan.jsx"; 
import CommandeArtisan from "./template/commande_artisan.jsx";

// Composant pour gérer l'affichage conditionnel de la navbar
function AppContent() {
  const location = useLocation();
  
  // Pages où la navbar doit s'afficher
  const pagesAvecNavbar = ['/'];
  const afficherNavbar = pagesAvecNavbar.includes(location.pathname);
  
  return (
    <>
      {/* Navbar conditionnelle */}
      {afficherNavbar && <Navbar />}
      
      
      {/* Espacement uniquement si navbar présente */}
      {afficherNavbar && <div className="h-16" />}

      {/* Container principal */}
      <div className={afficherNavbar ? "pt-0" : ""}>
        <Routes>
          <Route path="/" element={<BaaraMath />} />
          {/* <Route path="/" element={<DashboardArtisan />}/> */}
          {/* <Route path="/" element={<ProfileArtisan />}/> */}
          {/* <Route path="/" element={<MessageArtisan />}/> */}
          {/* <Route path="/" element={<CommandeArtisan />}/> */}
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/message" element={<Message />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/artisan/:id" element={<ArtisanProfil />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;