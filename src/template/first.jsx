import { useState } from 'react';
import { Users, Star, Clock, Hammer, Wrench, Zap, Paintbrush, Droplets, Scissors, Sprout } from 'lucide-react';

export default function Intro({ onNavigateToForm }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { icon: Hammer, name: 'Maçonnerie', color: 'text-orange-500' },
    { icon: Scissors, name: 'Coiffure', color: 'text-pink-500' },
    { icon: Droplets, name: 'Plomberie', color: 'text-blue-500' },
    { icon: Zap, name: 'Électricité', color: 'text-yellow-500' },
    { icon: Paintbrush, name: 'Peinture', color: 'text-purple-500' },
    { icon: Wrench, name: 'Mécanique', color: 'text-gray-600' },
    { icon: Sprout, name: 'Jardinage', color: 'text-emerald-600' }
  ];

  const stats = [
    { icon: Users, value: '2,500+', label: 'Artisans connectés' },
    { icon: Star, value: '15,000+', label: 'Projets réalisés' },
    { icon: Clock, value: '< 30min', label: 'Temps de réponse moyen' }
  ];

  const steps = [
    { 
      number: '1', 
      title: 'Décrivez votre besoin', 
      description: 'Précisez le type de service, votre localisation et vos préférences' 
    },
    { 
      number: '2', 
      title: 'Choisissez votre artisan', 
      description: 'Consultez les profils, avis et tarifs pour faire votre choix' 
    },
    { 
      number: '3', 
      title: 'Réservez et payez', 
      description: 'Planifiez votre intervention et suivez l\'avancement en temps réel' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1 space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
              <span className="text-xl">✨</span> Nouveau sur BaaraMatch
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connectez-vous aux{' '}
              <span className="text-blue-600 relative">
                meilleurs artisans
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M1 5.5C50 2.5 250 2.5 299 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Trouvez rapidement des professionnels qualifiés près de chez vous. 
              Maçons, coiffeurs, plombiers, électriciens... tous vos besoins en un clic.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onNavigateToForm}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Trouver un artisan →
              </button>
              <button 
                onClick={onNavigateToForm}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                Devenir prestataire
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 lg:flex-shrink-0 w-full lg:w-auto lg:max-w-lg xl:max-w-xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=600&fit=crop" 
                  alt="Artisan au travail" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  {/* <span className="font-semibold text-sm">Disponible maintenant</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tous les services dont vous avez besoin
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez notre large gamme de services proposés par des artisans expérimentés
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {categories.map((category, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCategory(i)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`p-4 rounded-full bg-gray-50 ${hoveredCategory === i ? 'bg-blue-50' : ''} transition-colors`}>
                  <category.icon className={`w-8 h-8 ${hoveredCategory === i ? category.color : 'text-gray-600'} transition-colors`} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple en 3 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="text-4xl text-blue-300">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'utilisateurs qui font confiance à BaaraMatch
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={onNavigateToForm}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all shadow-lg"
            >
              Trouver un artisan →
            </button>
            <button 
              onClick={onNavigateToForm}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all"
            >
              Devenir prestataire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}