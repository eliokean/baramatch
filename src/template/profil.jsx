import { useState } from 'react';
import { Camera, CheckCircle, Heart, User, Mail, Phone, ShoppingBag, Bell, Navigation } from 'lucide-react';
import { PageHeader } from './PageHeader';

export default function Profil() {
  const [notifications, setNotifications] = useState(true);
  const [localisation, setLocalisation] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Mon Profil" 
        icon={User}
        showBackButton={true}
        showSettings={true}
        showEdit={true}
      />

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
                      <span className="text-4xl sm:text-5xl font-bold">JK</span>
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
                    <h2 className="text-xl sm:text-2xl font-bold">Jean Kouassi</h2>
                    <span className="px-2 sm:px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      PREMIUM
                    </span>
                  </div>
                  <p className="text-sm text-white text-opacity-75">
                    Membre depuis Janvier 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                {[
                  { icon: ShoppingBag, count: 12, label: 'Commandes' },
                  { icon: CheckCircle, count: 9, label: 'Terminées' },
                  { icon: Heart, count: 5, label: 'Favoris' }
                ].map((stat, index) => (
                  <div key={index} className="text-center px-2 sm:px-4">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.count}</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Informations personnelles
              </h3>
              
              <div className="space-y-4 sm:space-y-5">
                {[
                  { icon: User, label: 'Nom complet', value: 'Jean Kouassi' },
                  { icon: Mail, label: 'Email', value: 'jean.kouassi@email.com' },
                  { icon: Phone, label: 'Téléphone', value: '+225 07 08 09 10 11' }
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
            </div>
          </div>

          {/* Colonne droite */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Activité récente */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Activité récente
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    color: 'green',
                    title: 'Commande terminée',
                    desc: 'Fabrication meuble TV',
                    time: '1j'
                  },
                  {
                    icon: Heart,
                    color: 'yellow',
                    title: 'Avis laissé',
                    desc: 'Note 5/5 pour Pierre Électricien',
                    time: '3j'
                  },
                  {
                    icon: ShoppingBag,
                    color: 'blue',
                    title: 'Nouvelle commande',
                    desc: 'Réparation fuite d\'eau',
                    time: '5j'
                  }
                ].map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-${activity.color}-50 rounded-xl hover:bg-${activity.color}-100 transition-colors cursor-pointer`}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${activity.color}-500 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                        {activity.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">
                        {activity.desc}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 flex-shrink-0">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Préférences */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                Préférences
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
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
                  }
                ].map((pref, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <pref.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">
                          {pref.title}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">
                          {pref.desc}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => pref.setState(!pref.state)}
                      className={`relative w-12 h-7 sm:w-14 sm:h-8 rounded-full transition-colors flex-shrink-0 ml-3 ${
                        pref.state ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full transition-transform ${
                          pref.state ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
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