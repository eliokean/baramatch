import { useState } from 'react';
import { Search, ShoppingBag, MessageCircle, User, MapPin, Star, Wrench, Scissors, Shirt, Droplet, Zap, Filter } from 'lucide-react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function BaaraMath() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [viewState, setViewState] = useState({
    longitude: -4.0083,
    latitude: 5.3600,
    zoom: 12
  });

  const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxpb3R0MDUiLCJhIjoiY21nZjBhejAzMDNmMjJpc2Fub2wwYjg0ZiJ9.hrK5wsVmy6RSj_0Eok-SjA';

  const categories = [
    { id: 'Tous', label: 'Tous', icon: User },
    { id: 'Maçonnerie', label: 'Maçonnerie', icon: Wrench },
    { id: 'Couture', label: 'Couture', icon: Scissors },
    { id: 'Coiffure', label: 'Coiffure', icon: Shirt },
    { id: 'Plomberie', label: 'Plomberie', icon: Droplet },
    { id: 'Électricité', label: 'Électricité', icon: Zap },
  ];

  const artisans = [
    {
      id: 1,
      name: 'Mamadou Diarra',
      service: 'Construction & Rénovation',
      rating: 4.9,
      reviews: 127,
      distance: 2.5,
      price: '15 000 FCFA',
      disponible: true,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      position: [-4.0100, 5.3650]
    },
    {
      id: 2,
      name: 'Aïcha Touré',
      service: 'Coiffure Afro & Tresses',
      rating: 4.8,
      reviews: 89,
      distance: 1.2,
      price: '8 000 FCFA',
      disponible: true,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
      position: [-4.0050, 5.3580]
    },
    {
      id: 3,
      name: 'Ibrahim Koné',
      service: 'Plomberie & Sanitaire',
      rating: 4.7,
      reviews: 64,
      distance: 3.8,
      price: '12 000 FCFA',
      disponible: false,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop',
      position: [-4.0150, 5.3700]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un artisan ou un service..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtres</span>
            </button>
            <button 
              onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition ${
                viewMode === 'map' 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Carte</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">6 artisans trouvés</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artisans.map((artisan) => (
                <div key={artisan.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        artisan.disponible
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-600 text-white'
                      }`}>
                        {artisan.disponible ? 'Disponible' : 'Occupé'}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {artisan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{artisan.service}</p>

                    <div className="flex items-center gap-4 mb-5 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{artisan.rating}</span>
                        <span className="text-gray-500">({artisan.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{artisan.distance} km</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 mb-0.5">À partir de</div>
                        <div className="text-lg font-bold text-cyan-600">{artisan.price}</div>
                      </div>
                      <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg font-medium hover:shadow-lg transition">
                        Voir profil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Map View */}
        {viewMode === 'map' && (
          <div className="flex gap-6">
            {/* Map Container */}
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg" style={{ height: '600px' }}>
              <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
              >
                {/* Markers for artisans */}
                {artisans.map((artisan) => (
                  <Marker
                    key={artisan.id}
                    longitude={artisan.position[0]}
                    latitude={artisan.position[1]}
                    anchor="bottom"
                  >
                    <div 
                      className="cursor-pointer transform hover:scale-110 transition-transform"
                      onClick={() => setSelectedArtisan(artisan)}
                    >
                      <div className={`w-10 h-10 rounded-full border-3 border-white shadow-lg flex items-center justify-center ${
                        artisan.disponible ? 'bg-green-500' : 'bg-gray-500'
                      }`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </Marker>
                ))}

                {/* Popup for selected artisan */}
                {selectedArtisan && (
                  <Popup
                    longitude={selectedArtisan.position[0]}
                    latitude={selectedArtisan.position[1]}
                    anchor="top"
                    onClose={() => setSelectedArtisan(null)}
                    closeButton={true}
                    closeOnClick={false}
                  >
                    <div className="p-3 min-w-64">
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={selectedArtisan.image} 
                          alt={selectedArtisan.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900">{selectedArtisan.name}</h3>
                          <p className="text-sm text-gray-600">{selectedArtisan.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{selectedArtisan.rating}</span>
                        <span className="text-sm text-gray-500">({selectedArtisan.reviews} avis)</span>
                      </div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-semibold text-cyan-600">{selectedArtisan.price}</span>
                        <span className={`text-white text-xs px-2 py-1 rounded-full ${
                          selectedArtisan.disponible ? 'bg-green-500' : 'bg-gray-500'
                        }`}>
                          {selectedArtisan.disponible ? 'Disponible' : 'Occupé'}
                        </span>
                      </div>
                      <button 
                        className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
                      >
                        Voir le profil
                      </button>
                    </div>
                  </Popup>
                )}
              </Map>
            </div>

            {/* Artisans List Sidebar */}
            <div className="w-96 bg-white rounded-2xl shadow-sm p-6 overflow-y-auto" style={{ height: '600px' }}>
              <h3 className="text-lg font-semibold mb-4">Artisans à proximité</h3>
              <div className="space-y-4">
                {artisans.map((artisan) => (
                  <div 
                    key={artisan.id} 
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition cursor-pointer border border-gray-100"
                    onClick={() => {
                      setSelectedArtisan(artisan);
                      setViewState({
                        ...viewState,
                        longitude: artisan.position[0],
                        latitude: artisan.position[1],
                        zoom: 14
                      });
                    }}
                  >
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{artisan.name}</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="font-medium">{artisan.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{artisan.distance} km</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}