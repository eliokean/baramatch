import { Search, Send, Phone, Video, MoreVertical, Paperclip, Mic } from 'lucide-react';
import { useState } from 'react';

export default function Message() {
    const [selectedContact, setSelectedContact] = useState(null);

    const contacts = [
        {
            id: 1,
            name: "Amadou Traoré",
            job: "Maçon",
            message: "Je peux commencer lundi matin si ça vous convient",
            avatar: "https://ui-avatars.com/api/?name=Amadou+Traore&background=4F46E5&color=fff",
            online: true,
            time: "14:23",
            messages: [
                { id: 1, text: "Bonjour, j'aimerais discuter d'un projet de construction", sent: true, time: "14:15" },
                { id: 2, text: "Bonjour ! Je suis disponible pour discuter de votre projet. Pouvez-vous me donner plus de détails ?", sent: false, time: "14:18" },
                { id: 3, text: "Il s'agit de la construction d'un mur de clôture d'environ 20 mètres", sent: true, time: "14:20" },
                { id: 4, text: "Parfait ! Je peux commencer lundi matin si ça vous convient", sent: false, time: "14:23" }
            ]
        },
        {
            id: 2,
            name: "Fatoumata Keita",
            job: "Coiffeuse",
            message: "Merci pour votre confiance !",
            avatar: "https://ui-avatars.com/api/?name=Fatoumata+Keita&background=EC4899&color=fff",
            online: false,
            time: "Hier",
            messages: [
                { id: 1, text: "Bonjour, êtes-vous disponible samedi prochain ?", sent: true, time: "10:30" },
                { id: 2, text: "Oui, j'ai des créneaux disponibles. Quelle heure vous arrange ?", sent: false, time: "10:45" },
                { id: 3, text: "14h ce serait parfait", sent: true, time: "10:50" },
                { id: 4, text: "Merci pour votre confiance !", sent: false, time: "10:52" }
            ]
        },
        {
            id: 3,
            name: "Ibrahim Coulibaly",
            job: "Plombier",
            message: "Je peux passer demain après-midi pour le devis",
            avatar: "https://ui-avatars.com/api/?name=Ibrahim+Coulibaly&background=10B981&color=fff",
            online: true,
            time: "2 jours",
            messages: [
                { id: 1, text: "Bonjour, j'ai une fuite d'eau à réparer", sent: true, time: "09:15" },
                { id: 2, text: "D'accord, où se situe la fuite exactement ?", sent: false, time: "09:20" },
                { id: 3, text: "Dans la salle de bain, sous le lavabo", sent: true, time: "09:22" },
                { id: 4, text: "Je peux passer demain après-midi pour le devis", sent: false, time: "09:25" }
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar gauche - Liste des messages */}
            <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-2xl font-semibold text-blue-600 mb-4">Messages</h1>
                    
                    {/* Barre de recherche */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Rechercher une conversation..." 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>

                {/* Liste des conversations */}
                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                        <div 
                            key={contact.id}
                            onClick={() => setSelectedContact(contact)}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                                selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                {/* Avatar avec indicateur de statut */}
                                <div className="relative flex-shrink-0">
                                    <img 
                                        src={contact.avatar} 
                                        alt={contact.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    {contact.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                    )}
                                </div>

                                {/* Contenu du message */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline justify-between mb-1">
                                        <h3 className="font-semibold text-gray-900 text-sm">
                                            {contact.name}
                                        </h3>
                                        <span className="text-xs text-gray-500">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-1">{contact.job}</p>
                                    <p className="text-sm text-gray-500 truncate">
                                        {contact.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Zone de conversation principale */}
            <div className="flex-1 flex flex-col bg-white">
                {selectedContact ? (
                    <>
                        {/* Header de la conversation */}
                        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img 
                                        src={selectedContact.avatar} 
                                        alt={selectedContact.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    {selectedContact.online && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                    )}
                                </div>
                                <div>
                                    <h2 className="font-semibold text-blue-600 text-lg">{selectedContact.name}</h2>
                                    <p className="text-sm text-gray-600">
                                        {selectedContact.online ? 'En ligne' : 'Hors ligne'} • {selectedContact.job}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <Phone className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <Video className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <MoreVertical className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        {/* Zone des messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                            {selectedContact.messages.map((message) => (
                                <div 
                                    key={message.id}
                                    className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-md ${message.sent ? 'order-2' : 'order-1'}`}>
                                        <div 
                                            className={`px-4 py-3 rounded-2xl ${
                                                message.sent 
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-br-sm' 
                                                    : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                                            }`}
                                        >
                                            <p className="text-sm">{message.text}</p>
                                        </div>
                                        <div className={`flex items-center gap-1 mt-1 ${message.sent ? 'justify-end' : 'justify-start'}`}>
                                            <span className="text-xs text-gray-500">{message.time}</span>
                                            {message.sent && (
                                                <span className="text-xs text-blue-600">✓✓</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Zone de saisie */}
                        <div className="p-4 border-t border-gray-200 bg-white">
                            <div className="flex items-center gap-3">
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <Paperclip className="w-5 h-5 text-gray-600" />
                                </button>
                                <input 
                                    type="text" 
                                    placeholder="Tapez votre message..."
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <Mic className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-4">
                                <Send className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Messagerie</h2>
                            <p className="text-gray-500">
                                Sélectionnez une conversation pour commencer à discuter
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}