import { useState } from 'react';
import { Star, MapPin, Clock, CheckCircle, Settings, CreditCard, Calendar, Camera, User, Mail, Phone, Bell, Navigation } from 'lucide-react';

export default function ProfilArtisan() {
  const [notifications, setNotifications] = useState(true);
  const [localisation, setLocalisation] = useState(true);
  const [onlinePayment, setOnlinePayment] = useState(false);
  const [acceptAppPayments, setAcceptAppPayments] = useState(false);

  // Données du profil
  const profileData = {
    name: "Koffi Menuisier",
    rating: 4.9,
    missions: 47,
    specialties: 4,
    hourlyRate: "5000 FCFA",
    availability: "Actuellement disponible",
    email: "koffi.menuisier@email.com",
    phone: "+225 05 06 07 08 09",
    location: "Abidjan, Yopougon",
    description: "Menuisier qualifié avec 10 ans d'expérience. Spécialisé dans les meubles sur mesure et les installations résidentielles et commerciales.",
    certification: "Certifié par la Chambre des Métiers",
    memberSince: "Membre depuis 2014"
  };

  // Compétences
  const skills = [
    "Meubles sur mesure",
    "Portes et fenêtres", 
    "Étagères",
    "Rénovation"
  ];

  // Réalisations récentes
  const recentWorks = [
    {
      title: "Meuble TV en acajou",
      description: "Réalisation sur mesure pour client à Cocody",
      rating: 5.0,
      duration: "2 jours"
    },
    {
      title: "Porte d'entrée",
      description: "Fabrication et installation pour résidence à Marcory",
      rating: 4.5,
      duration: "7 jours"
    }
  ];

  // Avis clients
  const reviews = [
    {
      client: "Amani K.",
      time: "5 jours",
      rating: 5.0,
      comment: "Excellent travail, très professionnel!",
      avatar: "A"
    },
    {
      client: "Fatou D.", 
      time: "12 jours",
      rating: 4.0,
      comment: "Bon artisan mais un peu en retard sur le délai",
      avatar: "F"
    }
  ];

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
              <h1 className="text-xl font-bold text-gray-900">Mon Profil</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Colonne gauche */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {/* Card profil */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8 text-white">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white">
                      <span className="text-4xl sm:text-5xl font-bold">KM</span>
                    </div>
                    <button className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </button>
                    <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold">Koffi Menuisier</h2>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-bold">4.9</span>
                    <span className="text-white text-opacity-75">(47 missions)</span>
                    <span className="text-white text-opacity-75">4 spécialités</span>
                  </div>
                  <p className="text-sm text-white text-opacity-75">
                    {profileData.memberSince}
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{profileData.missions}</div>
                  <div className="text-gray-600">Missions</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span className="text-3xl font-bold text-gray-900">{profileData.rating}</span>
                  </div>
                  <div className="text-gray-600">Note moyenne</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{profileData.hourlyRate}</div>
                  <div className="text-gray-600">Taux horaire</div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{profileData.availability}</div>
                  <div className="text-gray-600">Disponibilité</div>
                </div>
              </div>
            </div>

            {/* Informations professionnelles */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Informations professionnelles
              </h3>
              
              <div className="space-y-4 sm:space-y-5">
                {[
                  { icon: User, label: 'Nom complet', value: profileData.name },
                  { icon: Mail, label: 'Email professionnel', value: profileData.email },
                  { icon: Phone, label: 'Téléphone', value: profileData.phone },
                  { icon: MapPin, label: 'Zone d\'intervention', value: profileData.location }
                ].map((info, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">{info.label}</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Description</p>
                <p className="text-sm sm:text-base text-gray-900">
                  {profileData.description}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Certification</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {profileData.certification}
                </p>
              </div>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Compétences et Réalisations */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Compétences
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Réalisations récentes</h4>
              <div className="space-y-4">
                {recentWorks.map((work, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900">{work.title}</h5>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{work.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{work.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {work.duration}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Galerie de travaux</h4>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Image {item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Avis clients */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Avis clients
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5.0</span>
                    <span className="text-gray-500">(32 avis)</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 font-medium ml-4">
                    Voir tout
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {review.avatar}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{review.client}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600">{review.rating}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-500">{review.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Paramètres */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Paramètres
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Bell,
                    title: 'Notifications push',
                    desc: 'Recevoir les notifications',
                    state: notifications,
                    setState: setNotifications
                  },
                  {
                    icon: Navigation,
                    title: 'Localisation',
                    desc: 'Permettre la géolocalisation',
                    state: localisation,
                    setState: setLocalisation
                  },
                  {
                    icon: CreditCard,
                    title: 'Paiement en ligne',
                    desc: 'Activer/désactiver les paiements en ligne',
                    state: onlinePayment,
                    setState: setOnlinePayment
                  },
                  {
                    icon: CreditCard,
                    title: 'Accepter les paiements via l\'application',
                    desc: 'Permettre aux clients de payer via l\'app',
                    state: acceptAppPayments,
                    setState: setAcceptAppPayments
                  },
                  {
                    icon: Calendar,
                    title: 'Gérer mes disponibilités',
                    desc: 'Définir vos créneaux disponibles',
                    state: false,
                    action: true
                  },
                  {
                    icon: CreditCard,
                    title: 'Moyens de paiement',
                    desc: 'Configurer vos options de paiement',
                    state: false,
                    action: true
                  }
                ].map((pref, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <pref.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-base">
                          {pref.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {pref.desc}
                        </p>
                      </div>
                    </div>
                    
                    {pref.action ? (
                      <button className="px-4 py-2 text-blue-500 hover:text-blue-600 font-medium flex-shrink-0 ml-3">
                        {pref.title.includes('disponibilités') ? 'Gérer' : 'Configurer'}
                      </button>
                    ) : (
                      <button
                        onClick={() => pref.setState(!pref.state)}
                        className={`relative w-14 h-8 rounded-full transition-colors flex-shrink-0 ml-3 ${
                          pref.state ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                            pref.state ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}