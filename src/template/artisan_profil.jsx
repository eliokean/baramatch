import React, { useState } from 'react';
import { Heart, Share2, ArrowLeft, Star, MapPin, CheckCircle, Clock, Briefcase, Award, Image, MessageSquare, Phone, Mail, MapPinned } from 'lucide-react';

export default function ArtisanProfil() {
  const [activeTab, setActiveTab] = useState('about');
  const [isFavorite, setIsFavorite] = useState(false);

  const services = [
    { id: 1, name: 'Construction de maisons', icon: <Briefcase className="text-green-500" size={20} /> },
    { id: 2, name: 'Fondations', icon: <CheckCircle className="text-green-500" size={20} /> },
    { id: 3, name: 'Enduits et finitions', icon: <CheckCircle className="text-green-500" size={20} /> },
    { id: 4, name: 'Réparation de murs', icon: <CheckCircle className="text-green-500" size={20} /> },
    { id: 5, name: 'Carrelage', icon: <CheckCircle className="text-green-500" size={20} /> }
  ];

  const certifications = [
    { id: 1, name: 'Certification BTP Mali', icon: <Award className="text-blue-600" size={32} /> },
    { id: 2, name: 'Formation sécurité chantier', icon: <Award className="text-blue-600" size={32} /> },
    { id: 3, name: 'Maçonnerie traditionnelle', icon: <Award className="text-blue-600" size={32} /> }
  ];

  const stats = [
    { number: '340', label: 'Projets terminés', icon: <Briefcase size={24} /> },
    { number: '8 ans', label: "d'expérience", icon: <Clock size={24} /> },
    { number: '< 15min', label: 'Temps de réponse', icon: <MessageSquare size={24} /> }
  ];

  const portfolioItems = [
    { id: 1, title: 'Construction Villa Moderne', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop', description: 'Villa 4 chambres - Bamako' },
    { id: 2, title: 'Rénovation Immeuble', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop', description: 'Rénovation complète - Centre ville' },
    { id: 3, title: 'Fondations Complexe', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop', description: 'Fondations commerciales' },
    { id: 4, title: 'Maison Traditionnelle', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=300&fit=crop', description: 'Construction traditionnelle' },
    { id: 5, title: 'Murs de Clôture', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop', description: 'Clôture résidentielle' },
    { id: 6, title: 'Extension Maison', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop', description: 'Extension 2 pièces' }
  ];

  const reviews = [
    { id: 1, name: 'Moussa Diarra', rating: 5, date: '15 Sept 2025', comment: 'Excellent travail ! Très professionnel et respecte les délais. Je recommande vivement.' },
    { id: 2, name: 'Fatima Koné', rating: 5, date: '03 Sept 2025', comment: 'Travail soigné et de qualité. Amadou est très compétent et à l\'écoute.' },
    { id: 3, name: 'Ibrahim Touré', rating: 4, date: '28 Août 2025', comment: 'Bon maçon, travail sérieux. Quelques retards mais résultat satisfaisant.' },
    { id: 4, name: 'Aminata Sidibé', rating: 5, date: '10 Août 2025', comment: 'Je suis très satisfaite de la construction de ma maison. Travail impeccable !' },
    { id: 5, name: 'Oumar Camara', rating: 5, date: '25 Juil 2025', comment: 'Professionnel sérieux et honnête. Prix raisonnable pour la qualité du travail.' }
  ];

  const { id } = useParams();
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            className="text-blue-600 flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Retour</span>
          </button>
          <div className="flex gap-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'} />
            </button>
            <button className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-all hover:scale-105">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start flex-1">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
                      alt="Amadou Traoré" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                  <CheckCircle size={20} />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Amadou Traoré</h1>
                <p className="text-gray-600 text-lg mb-4">Maçon Expert</p>
                
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-lg">4.9</span>
                    <span className="text-gray-500">(127 avis)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>Bamako, Mali</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-2">
                    <CheckCircle size={16} />
                    Disponible
                  </span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2">
                    <Clock size={16} />
                    Réponse &lt; 15min
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-2">
                    <Briefcase size={16} />
                    8 ans d'expérience
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Price & Actions */}
            <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
              <div className="text-center lg:text-right">
                <div className="text-4xl font-bold text-blue-900">15,000 FCFA</div>
                <div className="text-gray-500">par jour</div>
              </div>
              <div className="flex flex-col gap-3 w-full lg:w-auto">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <MessageSquare size={20} />
                  Contacter
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  <Briefcase size={20} />
                  Réserver
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
          <div className="flex border-b overflow-x-auto">
            {[
              { id: 'about', label: 'À propos', icon: <Briefcase size={18} /> },
              { id: 'portfolio', label: 'Portfolio', icon: <Image size={18} /> },
              { id: 'reviews', label: 'Avis', icon: <Star size={18} /> },
              { id: 'contact', label: 'Contact', icon: <Phone size={18} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {activeTab === 'about' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="text-blue-600" />
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Maçon professionnel avec plus de 8 ans d'expérience dans la construction résidentielle et commerciale. 
                    Spécialisé dans les fondations, murs porteurs, et finitions. Travail soigné et respect des délais garantis.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="text-blue-600" />
                    Services proposés
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map(service => (
                      <div key={service.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-200">
                        {service.icon}
                        <span className="text-gray-700 font-medium">{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-blue-600" />
                    Certifications
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {certifications.map(cert => (
                      <div key={cert.id} className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                        <div className="mb-3 flex justify-center">{cert.icon}</div>
                        <div className="text-gray-800 font-medium text-center">{cert.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Briefcase className="text-blue-600" />
                    Statistiques
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <div className="flex justify-center mb-3">{stat.icon}</div>
                        <div className="text-4xl font-bold mb-2">{stat.number}</div>
                        <div className="text-blue-100">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Image className="text-blue-600" />
                  Mes réalisations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map(item => (
                    <div key={item.id} className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-white">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="text-blue-600" />
                  Avis clients (127)
                </h2>
                <div className="space-y-4">
                  {reviews.map(review => (
                    <div key={review.id} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Phone className="text-blue-600" />
                  Informations de contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Téléphone</h3>
                        <p className="text-blue-600 font-medium">+223 76 54 32 10</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">WhatsApp</h3>
                        <p className="text-green-600 font-medium">+223 76 54 32 10</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Email</h3>
                        <p className="text-purple-600 font-medium">amadou.traore@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <MapPinned className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Adresse</h3>
                        <p className="text-red-600 font-medium">Bamako, Mali</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
                  <p className="mb-6 text-blue-100">Contactez-moi dès maintenant pour discuter de votre projet de construction</p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 mx-auto">
                    <MessageSquare size={20} />
                    Envoyer un message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}