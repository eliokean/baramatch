import { useState } from 'react';
import { Calendar, MapPin, Clock, Eye, MessageSquare, Phone, CheckCircle } from 'lucide-react';

export default function Commande() {
  const [activeTab, setActiveTab] = useState('Toutes');
  
  const tabs = ['Toutes', 'En attente', 'Acceptées', 'En cours', 'Terminées'];
  
  const commandes = [
    {
      id: 1,
      artisan: {
        nom: 'Amadou Traoré',
        profession: 'Maçon',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amadou'
      },
      titre: 'Construction mur de clôture',
      description: "Construction d'un mur de clôture en parpaings de 20 mètres de long et 2 mètres de haut",
      prix: '450 000 FCFA',
      date: '25 mars 2024',
      duree: '3 jours',
      lieu: 'Bamako, Mali',
      statut: 'Acceptée'
    },
    {
      id: 2,
      artisan: {
        nom: 'Fatoumata Keita',
        profession: 'Coiffeuse',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatoumata'
      },
      titre: 'Coiffure mariage',
      description: 'Prestation coiffure pour mariage traditionnel',
      prix: '75 000 FCFA',
      date: '15 avril 2024',
      duree: '4 heures',
      lieu: 'Bamako, Mali',
      statut: 'Terminée'
    }
  ];

  const getStatusColor = (statut) => {
    switch(statut) {
      case 'Acceptée':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Terminée':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'En cours':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Mes commandes</h1>
          <p className="text-gray-600">Suivez l'état de vos demandes de services</p>
        </div>

        {/* Filtres de statut */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 bg-gray-800 p-3 rounded-full w-fit min-w-min">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'bg-gray-600 text-white hover:bg-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des commandes */}
        <div className="space-y-6">
          {commandes.map((commande) => (
            <div
              key={commande.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              {/* Header de la carte */}
              <div className="p-4 sm:p-6 pb-4">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={commande.artisan.avatar}
                      alt={commande.artisan.nom}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-blue-200"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {commande.artisan.nom}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-500">{commande.artisan.profession}</p>
                    </div>
                  </div>
                  <span className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border flex items-center gap-2 self-start ${getStatusColor(commande.statut)}`}>
                    {commande.statut === 'Acceptée' && <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {commande.statut === 'Terminée' && <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />}
                    {commande.statut}
                  </span>
                </div>

                {/* Détails de la commande */}
                <div className="mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {commande.titre}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {commande.description}
                  </p>
                </div>

                {/* Informations supplémentaires */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 font-bold text-sm sm:text-base">€</span>
                    <span className="font-semibold text-xs sm:text-base">{commande.prix}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{commande.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{commande.lieu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{commande.duree}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  Détails
                </button>
                <button className="flex-1 sm:flex-initial bg-white hover:bg-gray-100 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-300 text-sm sm:text-base">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  Message
                </button>
                <button className="flex-1 sm:flex-initial bg-white hover:bg-gray-100 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 border border-gray-300 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Appel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune commande */}
        {commandes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MessageSquare className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Aucune commande
            </h3>
            <p className="text-gray-500">
              Vous n'avez pas encore de commandes dans cette catégorie
            </p>
          </div>
        )}
      </div>
    </div>
  );
}