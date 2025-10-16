import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

export default function Commande() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Toutes");

  const tabs = ["Toutes", "En attente", "Acceptées", "Terminées", "Annulées"];

  const commandes = [
    {
      id: 1,
      titre: "Construction extension 30m²",
      artisan: "Mamadou Diarra",
      profession: "Maçon",
      description: "Extension de maison avec dalle béton et murs en parpaing",
      date: "15 Oct 2025",
      montant: "450000 FCFA",
      statut: "En attente",
      image:
        "https://images.unsplash.com/photo-1621905252507-6f70796cc09f?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const getStatusStyle = (statut) => {
    switch (statut) {
      case "En attente":
        return "bg-yellow-100 text-yellow-700";
      case "Acceptée":
        return "bg-blue-100 text-blue-700";
      case "Terminée":
        return "bg-green-100 text-green-700";
      case "Annulée":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] p-6 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 space-y-8">
        {/* Bouton retour */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Retour</span>
        </button>

        {/* En-tête */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg">
            <CheckCircle className="text-blue-600 w-5 h-5" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Mes commandes
          </h1>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mb-2">
              <Clock className="text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-sm text-gray-500">En attente</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
              <CheckCircle className="text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">2</p>
            <p className="text-sm text-gray-500">Acceptées</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-2">
              <CheckCircle className="text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">2</p>
            <p className="text-sm text-gray-500">Terminées</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-2">
              <XCircle className="text-red-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-sm text-gray-500">Annulée</p>
          </div>
        </div>

        {/* Onglets */}
        <div className="flex justify-between bg-white rounded-full shadow-sm overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium rounded-full transition ${
                activeTab === tab
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liste des commandes */}
        {commandes.map((commande) => (
          <div
            key={commande.id}
            className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 space-y-4 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <img
                  src={commande.image}
                  alt={commande.titre}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {commande.titre}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {commande.artisan} • {commande.profession}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {commande.description}
                  </p>
                  <p className="text-gray-700 text-sm mt-3">
                    <span className="font-medium">Date prévue :</span>{" "}
                    {commande.date}
                  </p>
                </div>
              </div>

              <div
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(
                  commande.statut
                )}`}
              >
                <Clock className="inline w-3 h-3 mr-1" />
                {commande.statut}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-sm font-medium">
                Montant{" "}
                <span className="text-blue-600 font-semibold">
                  {commande.montant}
                </span>
              </p>
            </div>

            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <button className="flex-1 py-2 border border-red-300 text-red-600 font-medium rounded-full hover:bg-red-50 transition">
                Annuler
              </button>
              <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-full hover:opacity-90 transition flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contacter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
