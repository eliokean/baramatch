import { useState } from 'react';
import { Search, MessageCircle, Send, Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react';

export default function MessageArtisan() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Aminata Keita',
      project: 'Construction extension - 450,000 FCFA',
      lastMessage: 'Je vous envoie les plans détaillés cet après-midi',
      time: '10:30',
      unread: 2,
      online: true,
      avatar: 'AK',
      status: 'Devis envoyé'
    },
    {
      id: 2,
      name: 'Oumar Diarra',
      project: 'Rénovation salle de bain - 380,000 FCFA',
      lastMessage: 'Les matériaux arrivent demain matin',
      time: 'Hier',
      unread: 0,
      online: false,
      avatar: 'OD',
      status: 'En cours'
    },
    {
      id: 3,
      name: 'Youssouf Diallo',
      project: 'Construction garage - 520,000 FCFA',
      lastMessage: 'Paiement reçu, merci !',
      time: 'Lundi',
      unread: 0,
      online: true,
      avatar: 'YD',
      status: 'Terminé'
    },
    {
      id: 4,
      name: 'Fatoumata Koné',
      project: 'Réparation toiture - 275,000 FCFA',
      lastMessage: 'Disponible pour visite mercredi ?',
      time: 'Dimanche',
      unread: 1,
      online: false,
      avatar: 'FK',
      status: 'En attente'
    }
  ];

  const messages = {
    1: [
      { id: 1, text: 'Bonjour, je suis intéressée par une extension de maison. Êtes-vous disponible ?', time: '09:15', isMe: false },
      { id: 2, text: 'Bonjour Madame Keita, oui je suis disponible. Je peux passer faire un devis gratuit.', time: '09:20', isMe: true },
      { id: 3, text: 'Parfait ! Demain 9h à Kalaban-Coura ça vous convient ?', time: '09:22', isMe: false },
      { id: 4, text: 'Oui, c\'est noté. J\'apporterai mes catalogues et références.', time: '09:25', isMe: true },
      { id: 5, text: 'Je vous envoie les plans détaillés cet après-midi', time: '10:30', isMe: true }
    ],
    2: [
      { id: 1, text: 'Bonjour, les carreaux pour la salle de bain sont en rupture. Je propose une alternative ?', time: '15:45', isMe: true },
      { id: 2, text: 'Oui, envoyez-moi les photos des alternatives disponibles.', time: '16:20', isMe: false },
      { id: 3, text: 'Les matériaux arrivent demain matin, on commence lundi comme prévu.', time: '16:35', isMe: true }
    ],
    4: [
      { id: 1, text: 'Bonjour, j\'ai une fuite sur ma toiture. Urgent !', time: '14:20', isMe: false },
      { id: 2, text: 'Je peux passer demain pour diagnostiquer. Ça vous convient ?', time: '14:30', isMe: true },
      { id: 3, text: 'Disponible pour visite mercredi ? J\'ai un créneau à 14h.', time: '16:00', isMe: true }
    ]
  };

  const sendMessage = () => {
    if (message.trim()) {
      // Ici on ajouterait le message à la conversation
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-gray-900">Messages</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 140px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
            
            {/* Liste des conversations */}
            <div className={`border-r border-gray-200 flex flex-col ${selectedChat ? 'hidden lg:flex' : 'flex'}`}>
              {/* Barre de recherche */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher une conversation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  />
                </div>
              </div>

              {/* Liste scrollable */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                      selectedChat === conv.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
                          {conv.avatar}
                        </div>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conv.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {conv.time}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            conv.status === 'En attente' ? 'bg-orange-100 text-orange-600' :
                            conv.status === 'Devis envoyé' ? 'bg-purple-100 text-purple-600' :
                            conv.status === 'En cours' ? 'bg-blue-100 text-blue-600' :
                            'bg-green-100 text-green-600'
                          }`}>
                            {conv.status}
                          </span>
                          <span className="text-xs text-gray-500 truncate flex-1">
                            {conv.project}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate">
                            {conv.lastMessage}
                          </p>
                          {conv.unread > 0 && (
                            <span className="ml-2 flex-shrink-0 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                              {conv.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zone de chat */}
            <div className={`lg:col-span-2 flex flex-col ${selectedChat ? 'flex' : 'hidden lg:flex'}`}>
              {selectedChat ? (
                <>
                  {/* Header du chat - Fixe en haut */}
                  <div className="p-4 border-b border-gray-200 bg-white flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedChat(null)}
                          className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold">
                          {conversations.find(c => c.id === selectedChat)?.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {conversations.find(c => c.id === selectedChat)?.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-500">
                              {conversations.find(c => c.id === selectedChat)?.project}
                            </p>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              conversations.find(c => c.id === selectedChat)?.status === 'En attente' ? 'bg-orange-100 text-orange-600' :
                              conversations.find(c => c.id === selectedChat)?.status === 'Devis envoyé' ? 'bg-purple-100 text-purple-600' :
                              conversations.find(c => c.id === selectedChat)?.status === 'En cours' ? 'bg-blue-100 text-blue-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {conversations.find(c => c.id === selectedChat)?.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full transition">
                          <Phone className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition hidden sm:block">
                          <Video className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages - Scrollable */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages[selectedChat]?.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs sm:max-w-md rounded-2xl p-4 shadow-sm ${
                          msg.isMe 
                            ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-br-none' 
                            : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
                        }`}>
                          <p className="text-sm">{msg.text}</p>
                          <span className={`text-xs mt-2 block ${
                            msg.isMe ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {/* Message vide si pas de messages */}
                    {(!messages[selectedChat] || messages[selectedChat].length === 0) && (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center">
                          <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                          <p>Aucun message dans cette conversation</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input - Fixe en bas */}
                  <div className="p-4 bg-white border-t border-gray-200 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Écrivez votre message..."
                        className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            sendMessage();
                          }
                        }}
                      />
                      <button 
                        onClick={sendMessage}
                        className={`p-3 rounded-full transition flex-shrink-0 shadow-md ${
                          message.trim() 
                            ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!message.trim()}
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center p-6">
                    <MessageCircle className="w-20 h-20 mx-auto mb-4 text-gray-300" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucune conversation sélectionnée</h3>
                    <p className="text-gray-600">Choisissez une conversation dans la liste pour commencer à discuter</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}