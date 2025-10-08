import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

import Intro from './template/first.jsx';
import AuthForm from './template/form.jsx';
import Explorer from './template/explorer.jsx';
import Message from './template/message.jsx';
import Commande from './template/commande.jsx';
import Profil from './template/profil.jsx';
import Navbar from './template/navbar.jsx';
import ArtisanProfil from './template/artisan_profil.jsx';

function App() {
  return (
    <Router>
      {/* Navbar toujours visible sauf sur certaines pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/message" element={<Message />} />
        <Route path="/commande" element={<Commande />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/artisan/:id" element={<ArtisanProfil />} />
      </Routes>

      <div className="h-16" />
    </Router>
  );
}

export default App;
