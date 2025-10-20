import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Users, UserCheck, Star, Calendar, Briefcase } from 'lucide-react';

export default function Onboarding({ selectedAccount, setSelectedAccount, onContinue }) {
  const navigate = useNavigate();

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
      color: 'cyan'
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
      color: 'teal'
    }
  ];

  const getAccountColor = (color) => {
    const colors = {
      cyan: 'from-cyan-500 to-cyan-600',
      teal: 'from-teal-500 to-teal-600'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  const handleContinue = () => {
    if (selectedAccount && onContinue) {
      onContinue();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button 
              onClick={() => navigate('/auth')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition p-2 rounded-lg hover:bg-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium hidden sm:inline">Retour</span>
            </button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BM</span>
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline">BaaraMath</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* En-tête */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500">BaaraMath</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez votre type de compte pour commencer votre expérience
          </p>
        </div>

        {/* Cartes de sélection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {accountTypes.map((account) => (
            <div
              key={account.id}
              onClick={() => setSelectedAccount(account.id)}
              className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                selectedAccount === account.id
                  ? `border-transparent bg-gradient-to-br ${getAccountColor(account.color)} text-white shadow-xl`
                  : 'border-gray-200 hover:border-gray-300 text-gray-900'
              }`}
            >
              {/* Badge de sélection */}
              <div className={`absolute top-4 right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition ${
                selectedAccount === account.id
                  ? 'border-white bg-white text-teal-500'
                  : 'border-gray-300 bg-white'
              }`}>
                {selectedAccount === account.id && <Check className="w-4 h-4 sm:w-5 sm:h-5" />}
              </div>

              <div className="p-5 sm:p-6 lg:p-8">
                {/* Icône */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center ${
                  selectedAccount === account.id
                    ? 'bg-white/20 text-white'
                    : `bg-gradient-to-br ${getAccountColor(account.color)} text-white`
                }`}>
                  <account.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>

                {/* Titre et description */}
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 ${
                  selectedAccount === account.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {account.title}
                </h3>
                <p className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${
                  selectedAccount === account.id ? 'text-cyan-100' : 'text-gray-600'
                }`}>
                  {account.description}
                </p>

                {/* Liste des fonctionnalités */}
                <ul className="space-y-2 sm:space-y-3">
                  {account.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedAccount === account.id
                          ? 'bg-white/20 text-white'
                          : 'bg-teal-100 text-teal-600'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={`text-xs sm:text-sm ${
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
            onClick={handleContinue}
            disabled={!selectedAccount}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform ${
              selectedAccount
                ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continuer
          </button>
          
          {!selectedAccount && (
            <p className="text-gray-500 mt-4 text-xs sm:text-sm">
              Veuillez sélectionner un type de compte pour continuer
            </p>
          )}
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
              <Star className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Artisans Vérifiés</h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Tous nos prestataires sont soigneusement sélectionnés
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Réservation Facile</h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Réservez vos prestations en quelques clics
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200/50">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Support 7j/7</h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Notre équipe vous accompagne à tout moment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}