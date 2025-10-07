import { useState } from 'react';
import { Camera, MapPin, Star, ShoppingBag, CheckCircle, Heart, User, Mail, Phone, Clock, History, CreditCard, Headphones, Bell, Navigation, Info, HelpCircle, Shield, FileText, LogOut, Settings, Edit, Home, Compass, MessageSquare, ChevronRight } from 'lucide-react';


export default function Profil() {
  const [notifications, setNotifications] = useState(true);
  const [localisation, setLocalisation] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Mon Profil</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Edit className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche - Profil principal */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card profil */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-lg overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center border-4 border-white">
                      <span className="text-5xl font-bold">JK</span>
                    </div>
                    <button className="absolute top-0 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
                      <Camera className="w-5 h-5 text-blue-600" />
                    </button>
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-white">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold">Jean Kouassi</h2>
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      PREMIUM
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white text-opacity-90 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Abengourou, Côte d'Ivoire</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 ml-2" />
                    <span className="font-semibold">4.7</span>
                  </div>
                  <p className="text-white text-opacity-75 text-sm">
                    Membre depuis Janvier 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-3 divide-x divide-gray-200">
                <div className="text-center px-4">
                  <ShoppingBag className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-500 mt-1">Commandes</div>
                </div>
                <div className="text-center px-4">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">9</div>
                  <div className="text-sm text-gray-500 mt-1">Terminées</div>
                </div>
                <div className="text-center px-4">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-900">5</div>
                  <div className="text-sm text-gray-500 mt-1">Favoris</div>
                </div>
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informations personnelles</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Nom complet</p>
                    <p className="text-base font-semibold text-gray-900">Jean Kouassi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-base font-semibold text-gray-900">jean.kouassi@email.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                    <p className="text-base font-semibold text-gray-900">+225 07 08 09 10 11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Activités et paramètres */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activité récente */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Activité récente</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Commande terminée</h4>
                    <p className="text-sm text-gray-600">Fabrication meuble TV par Jean Menuisier</p>
                  </div>
                  <span className="text-sm text-gray-400">1j</span>
                </div>

                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Avis laissé</h4>
                    <p className="text-sm text-gray-600">Note 5/5 pour Pierre Électricien</p>
                  </div>
                  <span className="text-sm text-gray-400">3j</span>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Nouvelle commande</h4>
                    <p className="text-sm text-gray-600">Réparation fuite d'eau</p>
                  </div>
                  <span className="text-sm text-gray-400">5j</span>
                </div>
              </div>
            </div>

            {/* Actions rapides */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Actions rapides</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group">
                  <History className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-gray-900">Historique</p>
                </button>
                
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-gray-900">Favoris</p>
                </button>
                
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group">
                  <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-gray-900">Paiements</p>
                </button>
                
                <button className="p-6 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors group">
                  <Headphones className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-gray-900">Support</p>
                </button>
              </div>
            </div>

            {/* Préférences */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Préférences</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bell className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Notifications push</p>
                      <p className="text-sm text-gray-500">Recevoir les notifications de l'app</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      notifications ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        notifications ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Localisation</p>
                      <p className="text-sm text-gray-500">Permettre la géolocalisation</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setLocalisation(!localisation)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      localisation ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        localisation ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Notifications email</p>
                      <p className="text-sm text-gray-500">Recevoir les mises à jour par email</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setEmailNotif(!emailNotif)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      emailNotif ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        emailNotif ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Notifications SMS</p>
                      <p className="text-sm text-gray-500">Recevoir les alertes par SMS</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSmsNotif(!smsNotif)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      smsNotif ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                        smsNotif ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* À propos */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">À propos</h3>
              
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Info className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-900">À propos de BaaraMatch</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-900">Aide et FAQ</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-900">Politique de confidentialité</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="font-semibold text-gray-900">Conditions d'utilisation</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <LogOut className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="font-semibold text-red-600">Se déconnecter</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-center text-sm text-gray-400 mt-6">Version 1.2.0</p>
            </div>
          </div>
        </div>
      </div>

    
      
      
    </div>
  );
}

