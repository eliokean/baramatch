import { Search, Send, Phone, Video, MoreVertical, Paperclip, Smile, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Message() {
    const [selectedContact, setSelectedContact] = useState(null);
    const navigate = useNavigate();

    const contacts = [
        {
            id: 1,
            name: "Mamadou Diarra",
            job: "Maçon",
            message: "Je serai disponible demain matin",
            avatar: "https://ui-avatars.com/api/?name=Mamadou+Diarra&background=0D9488&color=fff&bold=true&size=128",
            initials: "MD",
            online: true,
            time: "10:30",
            unread: 2,
            messages: [
                { id: 1, text: "Bonjour ! Merci pour votre demande.", sent: false, time: "09:15" },
                { id: 2, text: "Bonjour, je voudrais un devis pour une construction.", sent: true, time: "09:20" },
                { id: 3, text: "Pas de problème. Pouvez-vous me donner plus de détails sur le projet ?", sent: false, time: "09:22" },
                { id: 4, text: "C'est pour une extension de 30m². Construction en dur avec dalle béton.", sent: true, time: "09:25" },
                { id: 5, text: "D'accord. Pour ce type de travaux, je peux vous proposer un devis. Quand êtes-vous disponible pour une visite ?", sent: false, time: "09:28" }
            ]
        },
        {
            id: 2,
            name: "Aïcha Touré",
            job: "Coiffeuse",
            message: "Merci pour votre confiance !",
            avatar: "https://ui-avatars.com/api/?name=Aicha+Toure&background=0D9488&color=fff&bold=true&size=128",
            initials: "AT",
            online: false,
            time: "Hier",
            unread: 0,
            messages: [
                { id: 1, text: "Bonjour, j'aimerais prendre rendez-vous", sent: true, time: "14:30" },
                { id: 2, text: "Bonjour ! Bien sûr, quand souhaitez-vous venir ?", sent: false, time: "14:35" },
                { id: 3, text: "Merci pour votre confiance !", sent: false, time: "14:40" }
            ]
        },
        {
            id: 3,
            name: "Ibrahim Koné",
            job: "Plombier",
            message: "Le devis est prêt",
            avatar: "https://ui-avatars.com/api/?name=Ibrahim+Kone&background=0D9488&color=fff&bold=true&size=128",
            initials: "IK",
            online: true,
            time: "Hier",
            unread: 1,
            messages: [
                { id: 1, text: "Bonjour, j'ai un problème de fuite", sent: true, time: "11:00" },
                { id: 2, text: "Je peux passer cet après-midi", sent: false, time: "11:15" },
                { id: 3, text: "Le devis est prêt", sent: false, time: "16:30" }
            ]
        },
        {
            id: 4,
            name: "Fatoumata Camara",
            job: "Couturière",
            message: "Quand voulez-vous récupérer ?",
            avatar: "https://ui-avatars.com/api/?name=Fatoumata+Camara&background=0D9488&color=fff&bold=true&size=128",
            initials: "FC",
            online: false,
            time: "14 Oct",
            unread: 0,
            messages: [
                { id: 1, text: "Bonjour, ma robe est-elle prête ?", sent: true, time: "10:00" },
                { id: 2, text: "Oui ! Quand voulez-vous récupérer ?", sent: false, time: "10:30" }
            ]
        }
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* LISTE DES CONTACTS */}
            <div className={`bg-white border-r border-gray-200 flex flex-col w-full md:w-96 
                ${selectedContact ? 'hidden md:flex' : 'flex'}`}>
                
                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-3 mb-4">
                        <button onClick={() => navigate('/')}>
                            <ArrowLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Rechercher une conversation..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white border border-transparent focus:border-cyan-500 text-sm transition-all"
                        />
                    </div>
                </div>

                {/* Liste des contacts */}
                <div className="flex-1 overflow-y-auto">
                    {contacts.map(contact => (
                        <div 
                            key={contact.id} 
                            onClick={() => setSelectedContact(contact)}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                                selectedContact?.id === contact.id ? 'bg-blue-50' : ''
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="relative flex-shrink-0">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                                        {contact.initials}
                                    </div>
                                    {contact.online && (
                                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-gray-900 text-base truncate">{contact.name}</h3>
                                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                                            <span className="text-xs text-gray-500">{contact.time}</span>
                                            {contact.unread > 0 && (
                                                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                                                    <span className="text-xs text-white font-bold">{contact.unread}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">{contact.job}</p>
                                    <p className="text-sm text-gray-500 truncate">{contact.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ZONE DE CONVERSATION */}
            {selectedContact ? (
                <div className="flex-1 flex flex-col bg-white">
                    {/* Header de conversation */}
                    <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button className="md:hidden" onClick={() => setSelectedContact(null)}>
                                <ArrowLeft className="w-6 h-6 text-gray-700" />
                            </button>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                {selectedContact.initials}
                            </div>
                            <div>
                                <h2 className="font-semibold text-gray-900 text-lg">{selectedContact.name}</h2>
                                <p className="text-sm text-gray-600">{selectedContact.job}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <Phone className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <Video className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                <MoreVertical className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Zone des messages avec scroll */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50" style={{ paddingBottom: '100px' }}>
                        {/* Date separator */}
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1 bg-white rounded-full text-xs text-gray-600 shadow-sm">
                                Aujourd'hui
                            </span>
                        </div>

                        {selectedContact.messages.map(message => (
                            <div key={message.id} className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}>
                                <div className="max-w-md md:max-w-lg">
                                    <div className={`px-5 py-3 rounded-2xl ${
                                        message.sent 
                                            ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-br-md' 
                                            : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                                    }`}>
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                    </div>
                                    <div className={`flex items-center gap-1 mt-1 px-2 ${message.sent ? 'justify-end' : 'justify-start'}`}>
                                        <span className="text-xs text-gray-500">{message.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Barre de saisie FIXE en bas */}
                    <div className="absolute bottom-0 left-0 right-0 md:relative p-4 border-t border-gray-200 bg-white">
                        <div className="flex items-center gap-3 max-w-full">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition flex-shrink-0">
                                <Paperclip className="w-5 h-5 text-gray-600" />
                            </button>
                            <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    placeholder="Tapez votre message..."
                                    className="w-full px-4 py-3 pr-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm border border-transparent focus:border-cyan-500 transition-all"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-gray-200 rounded-full p-1 transition">
                                    <Smile className="w-5 h-5 text-gray-600" />
                                </button>
                            </div>
                            <button className="p-3 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 rounded-full transition-all shadow-md hover:shadow-lg flex-shrink-0">
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Vue vide quand aucun contact n'est sélectionné (desktop)
                <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vos messages</h3>
                        <p className="text-gray-600">Sélectionnez une conversation pour commencer</p>
                    </div>
                </div>
            )}
        </div>
    );
}