import { useState } from 'react';
import { Clock, CheckCircle, XCircle, MessageSquare } from 'lucide-react';
import { PageHeader } from './PageHeader';

export default function Commande() {
  const [activeTab, setActiveTab] = useState('Toutes');

  const tabs = ['Toutes', 'En attente', 'Acceptées', 'Terminées', 'Annulées'];

  const commandes = [
    {
      id: 1,
      titre: 'Construction extension 30m²',
      artisan: 'Mamadou Diarra',
      profession: 'Maçon',
      description: 'Extension de maison avec dalle béton et murs en parpaing',
      date: '15 Oct 2025',
      montant: '450000 FCFA',
      statut: 'En attente',
      image: 'https://images.unsplash.com/photo-1621905252507-6f70796cc09f?w=400'
    }
  ];

  const getStatusStyle = (statut) => {
    const styles = {
      'En attente': 'bg-yellow-100 text-yellow-700',
      'Acceptée': 'bg-blue-100 text-blue-700',
      'Terminée': 'bg-green-100 text-green-700',
      'Annulée': 'bg-red-100 text-red-700'
    };
    return styles[statut] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Mes commandes" 
        icon={CheckCircle}
        showBackButton={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {[
            { icon: Clock, color: 'yellow', label: 'En attente', count: 1 },
            { icon: CheckCircle, color: 'blue', label: 'Acceptées', count: 2 },
            { icon: CheckCircle, color: 'green', label: 'Terminées', count: 2 },
            { icon: XCircle, color: 'red', label: 'Annulée', count: 1 }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm">
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
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liste des commandes */}
        <div className="space-y-4">
          {commandes.map((commande) => (
            <div key={commande.id} className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <img
                  src={commande.image}
                  alt={commande.titre}
                  className="w-full sm:w-20 h-32 sm:h-20 rounded-lg object-cover flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {commande.titre}
                    </h3>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusStyle(commande.statut)}`}>
                      {commande.statut}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">
                    {commande.artisan} • {commande.profession}
                  </p>
                  
                  <p className="text-sm text-gray-500 mb-3">
                    {commande.description}
                  </p>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    <span className="font-medium">Date:</span> {commande.date}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-lg font-bold text-blue-600">
                      {commande.montant}
                    </p>
                    
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none px-4 py-2 border border-red-300 text-red-600 font-medium rounded-full hover:bg-red-50 transition text-sm">
                        Annuler
                      </button>
                      <button className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-full hover:opacity-90 transition flex items-center justify-center gap-2 text-sm">
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden sm:inline">Contacter</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
