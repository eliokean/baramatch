import { useState } from 'react';
import { Hammer, Scissors, Wrench, Zap, PaintBucket, Car, Shirt, Home } from 'lucide-react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Explorer() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [showMap, setShowMap] = useState(false);
    const [selectedArtisan, setSelectedArtisan] = useState(null);
    const [viewState, setViewState] = useState({
        longitude: -4.0083,
        latitude: 5.3600,
        zoom: 12
    });

    // REMPLACEZ CETTE CLÉ PAR VOTRE CLÉ MAPBOX
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxpb3R0MDUiLCJhIjoiY21nZjBhejAzMDNmMjJpc2Fub2wwYjg0ZiJ9.hrK5wsVmy6RSj_0Eok-SjA';

    // Données des artisans avec leurs positions
    const artisans = [
        {
            id: 1,
            name: "Amadou Traoré",
            profession: "Maçon Expert",
            rating: 4.9,
            reviews: 127,
            price: "15,000 FCFA/jour",
            distance: "2.3 km",
            time: "< 15 min",
            status: "Disponible",
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            position: [-4.0100, 5.3650] // [longitude, latitude]
        },
        {
            id: 2,
            name: "Fatoumata Keita",
            profession: "Coiffeuse Professionnelle",
            rating: 4.8,
            reviews: 89,
            price: "8,000 FCFA/service",
            distance: "1.1 km",
            time: "< 30 min",
            status: "Disponible",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            position: [-4.0050, 5.3580]
        },
        {
            id: 3,
            name: "Ibrahim Coulibaly",
            profession: "Plombier Certifié",
            rating: 4.7,
            reviews: 156,
            price: "12,000 FCFA/intervention",
            distance: "3.8 km",
            time: "< 45 min",
            status: "Occupé",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            position: [-4.0150, 5.3700]
        },
        {
            id: 4,
            name: "Aïcha Sanogo",
            profession: "Couturière Experte",
            rating: 4.9,
            reviews: 203,
            price: "5,000 FCFA/pièce",
            distance: "1.7 km",
            time: "< 20 min",
            status: "Disponible",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            position: [-4.0030, 5.3620]
        }
    ];

    // Catégories avec icônes Lucide React
    const categories = [
        { name: "Maçonnerie", icon: Hammer, color: "text-orange-500" },
        { name: "Coiffure", icon: Scissors, color: "text-pink-500" },
        { name: "Plomberie", icon: Wrench, color: "text-blue-500" },
        { name: "Électricité", icon: Zap, color: "text-yellow-500" },
        { name: "Peinture", icon: PaintBucket, color: "text-purple-500" },
        { name: "Mécanique", icon: Car, color: "text-green-500" },
        { name: "Couture", icon: Shirt, color: "text-indigo-500" },
        { name: "Ménage", icon: Home, color: "text-teal-500" }
    ];

    return (
        <div className="p-5 bg-gray-50 min-h-screen">
            {/* En-tête */}
            <div className="flex flex-col items-start justify-start p-5 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-700 mb-2">Explorer les services</h1>
                <p className="text-gray-600 mb-4">Trouvez l'artisan parfait pour vos besoins</p>
                <input 
                    type="text" 
                    placeholder="Rechercher un service, un artisan..."
                    className="w-full max-w-md border border-gray-300 rounded-full px-5 py-3 text-base mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Catégories */}
            <div className="mt-8 px-5 max-w-7xl mx-auto">
                <h2 className="text-xl font-semibold text-blue-700 mb-6">Catégories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
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

            {/* Filtres et Options */}
            <div className="flex flex-wrap gap-5 mb-8 mt-8 px-5 max-w-7xl mx-auto">
                <div className="flex gap-5">
                    <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .39.812l-4.25 5.5a.5.5 0 0 0-.14.312v3.379l-3 1.5V7.625a.5.5 0 0 0-.14-.312l-4.25-5.5A.5.5 0 0 1 1.5 1.5zm1 .688L6.75 7.25a1.5 1.5 0 0 1 .42 1.094v2.761l2-1v-2.761a1.5 1.5 0 0 1 .42-1.094L13.5 2.188V2H2v.188z"/>
                        </svg>
                        <span>Filtres</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94z"/>
                        </svg>
                        <span>Près de moi</span>
                    </button>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <button
                        onClick={() => setShowMap(false)}
                        className={`px-5 py-2 rounded-full cursor-pointer text-xs font-bold transition ${
                            !showMap
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                        }`}
                    >
                        Liste
                    </button>
                    <button
                        onClick={() => setShowMap(true)}
                        className={`px-5 py-2 rounded-full cursor-pointer text-xs font-bold transition ${
                            showMap
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                        }`}
                    >
                        Carte
                    </button>
                </div>
            </div>

            {/* Cartes Artisans ou Map */}
            {!showMap ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-5 max-w-7xl mx-auto">
                    {artisans.map((artisan) => (
                        <div key={artisan.id} className="border border-gray-300 rounded-xl p-4 text-center transition-shadow hover:shadow-lg bg-white">
                            <div className="mb-4">
                                <img 
                                    src={artisan.image} 
                                    alt={artisan.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                                />
                                <h3 className="font-bold text-blue-700 text-lg">{artisan.name}</h3>
                                <p className="text-sm text-gray-600">{artisan.profession}</p>
                                <div className="flex items-center justify-center gap-1 mt-1">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm font-semibold">{artisan.rating}</span>
                                    <span className="text-xs text-gray-500">({artisan.reviews} avis)</span>
                                </div>
                                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mt-2">
                                    Vérifié
                                </span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-semibold">{artisan.price}</p>
                                    <p className="text-sm text-gray-600">{artisan.distance}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600">{artisan.time}</p>
                                    <span className={`text-white text-xs px-3 py-1 rounded-full ${
                                        artisan.status === 'Disponible' ? 'bg-cyan-400' : 'bg-yellow-400'
                                    }`}>
                                        {artisan.status}
                                    </span>
                                </div>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 rounded-full font-semibold hover:opacity-90 transition">
                                    Voir le profil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Vue Map avec Mapbox GL
                <div className="px-5 max-w-7xl mx-auto">
                    <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden shadow-lg mb-6">
                        <div className="relative" style={{ height: '600px' }}>
                            <Map
                                {...viewState}
                                onMove={evt => setViewState(evt.viewState)}
                                style={{ width: '100%', height: '100%' }}
                                mapStyle="mapbox://styles/mapbox/streets-v11"
                                mapboxAccessToken={MAPBOX_TOKEN}
                            >
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
                                            <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                                                artisan.status === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'
                                            }`}>
                                                <span className="text-white text-xs font-bold">
                                                    {artisan.name.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
                                    </Marker>
                                ))}

                                {selectedArtisan && (
                                    <Popup
                                        longitude={selectedArtisan.position[0]}
                                        latitude={selectedArtisan.position[1]}
                                        anchor="top"
                                        onClose={() => setSelectedArtisan(null)}
                                        className="custom-popup"
                                    >
                                        <div className="p-3 min-w-64">
                                            <div className="flex items-center gap-3 mb-3">
                                                <img 
                                                    src={selectedArtisan.image} 
                                                    alt={selectedArtisan.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-blue-700">{selectedArtisan.name}</h3>
                                                    <p className="text-sm text-gray-600">{selectedArtisan.profession}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="flex items-center gap-1 text-sm">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="font-semibold">{selectedArtisan.rating}</span>
                                                    <span className="text-gray-500">({selectedArtisan.reviews} avis)</span>
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-semibold text-blue-600">{selectedArtisan.price}</span>
                                                <span className={`text-white text-xs px-2 py-1 rounded-full ${
                                                    selectedArtisan.status === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'
                                                }`}>
                                                    {selectedArtisan.status}
                                                </span>
                                            </div>
                                            <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 rounded-full font-semibold hover:opacity-90 transition text-sm">
                                                Contacter
                                            </button>
                                        </div>
                                    </Popup>
                                )}
                            </Map>
                        </div>
                    </div>
                    
                    {/* Liste des artisans sur la carte */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {artisans.map((artisan) => (
                            <div key={artisan.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                                <div className="relative">
                                    <img 
                                        src={artisan.image} 
                                        alt={artisan.name}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-blue-200"
                                    />
                                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                                        artisan.status === 'Disponible' ? 'bg-green-500' : 'bg-yellow-500'
                                    }`}></div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-blue-700 text-lg">{artisan.name}</h3>
                                    <p className="text-sm text-gray-600">{artisan.profession}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="flex items-center gap-1 text-sm">
                                            <span className="text-yellow-500">★</span>
                                            <span className="font-semibold">{artisan.rating}</span>
                                        </span>
                                        <span className="text-sm text-gray-500">• {artisan.distance}</span>
                                        <span className="text-sm text-gray-500">• {artisan.time}</span>
                                    </div>
                                    <p className="text-sm font-semibold text-blue-600 mt-1">{artisan.price}</p>
                                </div>
                                <button className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition shadow-md">
                                    Contacter
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Explorer;