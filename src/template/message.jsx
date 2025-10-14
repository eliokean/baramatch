import { Search, Send, Phone, Video, MoreVertical, Paperclip, Mic, ArrowLeft } from 'lucide-react';
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
        // ... autres contacts
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* LISTE DES CONTACTS */}
            <div className={`bg-white border-r border-gray-200 flex flex-col w-full md:w-80 
                ${selectedContact ? 'hidden md:flex' : 'flex'}`}>
                
                <div className="p-4 border-b border-gray-200">
                    <h1 className="text-2xl font-semibold text-blue-600 mb-4">Messages</h1>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Rechercher..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {contacts.map(contact => (
                        <div 
                            key={contact.id} 
                            onClick={() => setSelectedContact(contact)}
                            className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-semibold text-gray-900 text-sm">{contact.name}</h3>
                                        <span className="text-xs text-gray-500">{contact.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-1">{contact.job}</p>
                                    <p className="text-sm text-gray-500 truncate">{contact.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONVERSATION */}
            {selectedContact && (
                <div className="flex-1 flex flex-col bg-white">
                    {/* Header avec bouton retour pour mobile */}
                    <div className="p-4 border-b border-gray-200 flex items-center gap-3 md:justify-between">
                        <button className="md:hidden p-2" onClick={() => setSelectedContact(null)}>
                            <ArrowLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <div className="flex items-center gap-3">
                            <img src={selectedContact.avatar} alt={selectedContact.name} className="w-12 h-12 rounded-full" />
                            <div>
                                <h2 className="font-semibold text-blue-600 text-lg">{selectedContact.name}</h2>
                                <p className="text-sm text-gray-600">{selectedContact.online ? 'En ligne' : 'Hors ligne'} • {selectedContact.job}</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <Phone className="w-5 h-5 text-gray-600" />
                            <Video className="w-5 h-5 text-gray-600" />
                            <MoreVertical className="w-5 h-5 text-gray-600" />
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                        {selectedContact.messages.map(message => (
                            <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-md ${message.sent ? 'order-2' : 'order-1'}`}>
                                    <div className={`px-4 py-3 rounded-2xl ${message.sent ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-br-sm' : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'}`}>
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                    <div className={`flex items-center gap-1 mt-1 ${message.sent ? 'justify-end' : 'justify-start'}`}>
                                        <span className="text-xs text-gray-500">{message.time}</span>
                                        {message.sent && <span className="text-xs text-blue-600">✓✓</span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Saisie */}
                    <div className="p-4 border-t border-gray-200 bg-white">
                        <div className="flex items-center gap-3">
                            <Paperclip className="w-5 h-5 text-gray-600 p-2 hover:bg-gray-100 rounded-full cursor-pointer" />
                            <input 
                                type="text" 
                                placeholder="Tapez votre message..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <Mic className="w-5 h-5 text-gray-600 p-2 hover:bg-gray-100 rounded-full cursor-pointer" />
                            <button className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors">
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
