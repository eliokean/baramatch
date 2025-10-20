import { useState } from 'react';
import { Clock, CheckCircle, XCircle, MessageSquare, Phone, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function CommandeArtisan() {
  const [activeTab, setActiveTab] = useState('Toutes');

  const tabs = ['Toutes', 'En attente', 'Acceptées', 'Terminées', 'Annulées'];

  const commandes = [
    {
      id: 1,
      titre: 'Construction extension 30m²',
      client: 'Aminata Keita',
      description: 'Extension de maison avec dalle béton et murs en parpaing',
      date: '15 Oct 2025',
      heure: '09:00',
      lieu: 'Bamako, Kalaban-Coura',
      montant: '450000 FCFA',
      statut: 'En attente',
      badge: 'Nouveau',
      delai: '2 semaines'
    },
    {
      id: 2,
      titre: 'Rénovation salle de bain',
      client: 'Oumar Diarra',
      description: 'Rénovation complète : carrelage, plomberie et peinture',
      date: '20 Oct 2025',
      heure: '10:30',
      lieu: 'Bamako, Magnambougou',
      montant: '380000 FCFA',
      statut: 'Acceptée',
      badge: 'Confirmé',
      delai: '1 semaine'
    },
    {
      id: 3,
      titre: 'Construction garage',
      client: 'Youssouf Diallo',
      description: 'Construction garage simple avec portes sectionnelles',
      date: '25 Oct 2025',
      heure: '08:00',
      lieu: 'Bamako, Badalabougou',
      montant: '520000 FCFA',
      statut: 'Terminée',
      badge: 'Livré',
      delai: '3 semaines'
    },
    {
      id: 4,
      titre: 'Réparation toiture',
      client: 'Fatoumata Koné',
      description: 'Réparation fuite toiture et remplacement tuiles',
      date: '12 Oct 2025',
      heure: '14:00',
      lieu: 'Bamako, Sébénikoro',
      montant: '275000 FCFA',
      statut: 'Annulée',
      badge: 'Annulé',
      delai: '3 jours'
    }
  ];

  const getStatusStyle = (statut) => {
    const styles = {
      'En attente': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Acceptée': 'bg-blue-100 text-blue-700 border-blue-200',
      'Terminée': 'bg-green-100 text-green-700 border-green-200',
      'Annulée': 'bg-red-100 text-red-700 border-red-200'
    };
    return styles[statut] || 'bg-gray-100 text-gray-700';
  };

  const getBadgeStyle = (badge) => {
    const styles = {
      'Nouveau': 'bg-orange-100 text-orange-600',
      'Confirmé': 'bg-blue-100 text-blue-600',
      'Livré': 'bg-green-100 text-green-600',
      'Annulé': 'bg-red-100 text-red-600'
    };
    return styles[badge] || 'bg-gray-100 text-gray-600';
  };

  const filteredCommandes = activeTab === 'Toutes' 
    ? commandes 
    : commandes.filter(cmd => cmd.statut === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Mes Commandes</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {[
            { icon: Clock, color: 'yellow', label: 'En attente', count: 1 },
            { icon: CheckCircle, color: 'blue', label: 'Acceptées', count: 2 },
            { icon: CheckCircle, color: 'green', label: 'Terminées', count: 1 },
            { icon: XCircle, color: 'red', label: 'Annulées', count: 1 }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100">
              <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center mb-2`}>
                <stat.icon className={`text-${stat.color}-600 w-5 h-5`} />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">{stat.count}</p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Onglets */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium rounded-full whitespace-nowrap transition ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liste des commandes */}
        <div className="space-y-4">
          {filteredCommandes.map((commande) => (
            <div key={commande.id} className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                {/* Avatar client */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:w-24">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {commande.client.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="lg:text-center">
                    <p className="text-sm font-semibold text-gray-900">{commande.client}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeStyle(commande.badge)}`}>
                      {commande.badge}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {commande.titre}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {commande.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyle(commande.statut)}`}>
                      {commande.statut}
                    </span>
                  </div>
                  
                  {/* Informations détaillées */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{commande.date} à {commande.heure}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Délai: {commande.delai}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{commande.lieu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                      <span>{commande.montant}</span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                      {commande.statut === 'En attente' && (
                        <>
                          <button className="px-4 py-2 border border-red-300 text-red-600 font-medium rounded-full hover:bg-red-50 transition text-sm flex items-center gap-2">
                            <XCircle className="w-4 h-4" />
                            Refuser
                          </button>
                          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium rounded-full hover:opacity-90 transition text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Accepter
                          </button>
                        </>
                      )}
                      {commande.statut === 'Acceptée' && (
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium rounded-full hover:opacity-90 transition text-sm">
                          Marquer comme terminé
                        </button>
                      )}
                      {commande.statut === 'Terminée' && (
                        <button className="px-4 py-2 border border-gray-300 text-gray-600 font-medium rounded-full hover:bg-gray-50 transition text-sm">
                          Voir les détails
                        </button>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="p-2 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-full hover:opacity-90 transition">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Message si aucune commande */}
          {filteredCommandes.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <CheckCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Aucune commande {activeTab !== 'Toutes' ? activeTab.toLowerCase() : ''}
              </h3>
              <p className="text-gray-500">
                {activeTab === 'Toutes' 
                  ? "Vous n'avez pas encore de commandes" 
                  : `Aucune commande ${activeTab.toLowerCase()} pour le moment`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}