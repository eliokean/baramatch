import { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';

export default function AuthForm({ onBack }) {
  const [userType, setUserType] = useState('client');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button 
          onClick={onBack}
          className="mb-4 text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
        >
          ← Retour à l'accueil
        </button>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              BaaraMatch
            </span>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border-0">
          <div className="grid grid-cols-2 bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`py-3 px-4 text-sm font-medium rounded-md transition-all ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-gray-600'
              }`}
            >
              Connexion
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`py-3 px-4 text-sm font-medium rounded-md transition-all ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-gray-600'
              }`}
            >
              Inscription
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-base font-semibold mb-4 text-gray-900">
              Je suis un :
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => setUserType('client')}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all text-center hover:border-green-500 hover:bg-green-50 ${
                  userType === 'client' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <User className="w-8 h-8 mb-2 text-gray-600" />
                <span className="text-sm font-medium mb-1 text-gray-900">Client</span>
                <span className="text-xs text-gray-600">Je cherche un artisan</span>
              </div>
              <div
                onClick={() => setUserType('provider')}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all text-center hover:border-green-500 hover:bg-green-50 ${
                  userType === 'provider' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                }`}
              >
                <User className="w-8 h-8 mb-2 text-gray-600" />
                <span className="text-sm font-medium mb-1 text-gray-900">Prestataire</span>
                <span className="text-xs text-gray-600">J'offre mes services</span>
              </div>
            </div>
          </div>

          {isLogin ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <button className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:shadow-lg transition-all">
                Se connecter
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Nom complet</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+225 XX XX XX XX XX"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-3 text-sm bg-gray-100 border-0 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <button className="w-full py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:shadow-lg transition-all">
                Créer un compte
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              En continuant, vous acceptez nos{' '}
              <a href="#" className="text-blue-500 hover:underline">
                conditions d'utilisation
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}