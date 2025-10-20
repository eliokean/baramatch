import { useState } from 'react';
import { ArrowLeft, Check, Users, UserCheck, Star, Calendar, Briefcase } from 'lucide-react';

export default function Onboarding() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const accountTypes = [
    {
      id: 'client',
      title: 'Je suis un client',
      description: 'Je cherche des artisans pour mes projets de construction, rénovation, couture, coiffure, etc.',
      icon: Users,
      features: [
        'Trouver des artisans qualifiés',
        'Consulter les avis et portfolios',
        'Gérer mes commandes'
      ],
      color: 'blue'
    },
    {
      id: 'prestataire',
      title: 'Je suis un prestataire',
      description: 'Je propose mes services en tant qu\'artisan (maçon, coiffeur, tailleur, plombier, électricien, etc.)',
      icon: UserCheck,
      features: [
        'Trouver de nouveaux clients',
        'Gérer mon agenda',
        'Développer mon activité'
      ],
      color: 'green'
    }
  ];

  const getAccountColor = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition p-2 rounded-lg hover:bg-white">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">BaaraMatch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez votre type de compte pour commencer votre expérience
          </p>
        </div>

        {/* Cartes de sélection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {accountTypes.map((account) => (
            <div
              key={account.id}
              onClick={() => setSelectedAccount(account.id)}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedAccount === account.id
                  ? `border-transparent bg-gradient-to-br ${getAccountColor(account.color)} text-white shadow-xl`
                  : 'border-gray-200 hover:border-gray-300 text-gray-900'
              }`}
            >
              {/* Badge de sélection */}
              <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                selectedAccount === account.id
                  ? 'border-white bg-white text-green-500'
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedAccount === account.id && <Check className="w-4 h-4" />}
              </div>

              <div className="p-6 sm:p-8">
                {/* Icône */}
                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  selectedAccount === account.id
                    ? 'bg-white/20 text-white'
                    : `bg-gradient-to-br ${getAccountColor(account.color)} text-white`
                }`}>
                  <account.icon className="w-8 h-8" />
                </div>

                {/* Titre et description */}
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
                  selectedAccount === account.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {account.title}
                </h3>
                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                  selectedAccount === account.id ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {account.description}
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-3">
                  {account.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedAccount === account.id
                          ? 'bg-white/20 text-white'
                          : 'bg-green-100 text-green-500'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-sm ${
                        selectedAccount === account.id ? 'text-white' : 'text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton de continuation */}
        <div className="text-center">
          <button
            disabled={!selectedAccount}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ${
              selectedAccount
                ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continuer
          </button>
          
          {!selectedAccount && (
            <p className="text-gray-500 mt-4 text-sm">
              Veuillez sélectionner un type de compte pour continuer
            </p>
          )}
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Artisans Vérifiés</h4>
            <p className="text-sm text-gray-600">
              Tous nos prestataires sont soigneusement sélectionnés et vérifiés
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Réservation Facile</h4>
            <p className="text-sm text-gray-600">
              Réservez vos prestations en quelques clics seulement
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Support 7j/7</h4>
            <p className="text-sm text-gray-600">
              Notre équipe est là pour vous accompagner à tout moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}