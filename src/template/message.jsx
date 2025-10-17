import { useState } from 'react';
import { Search, MessageCircle, Send, Phone, Video, MoreVertical } from 'lucide-react';
import { PageHeader } from './PageHeader';

export default function Message() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Mamadou Diarra',
      profession: 'Maçon',
      lastMessage: 'Oui, je peux venir demain matin',
      time: '10:30',
      unread: 2,
      online: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 2,
      name: 'Aïcha Touré',
      profession: 'Coiffeuse',
      lastMessage: 'Merci pour votre confiance !',
      time: 'Hier',
      unread: 0,
      online: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Messages" 
        icon={MessageCircle}
        showBackButton={true}
        showSearch={false}
      />

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
                    className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Liste scrollable */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                      selectedChat?.id === conv.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                        />
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                            {conv.name}
                          </h3>
                          <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                            {conv.time}
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
                  {/* Header du chat */}
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setSelectedChat(null)}
                          className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <img
                          src={selectedChat.avatar}
                          alt={selectedChat.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {selectedChat.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {selectedChat.profession}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Phone className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full hidden sm:block">
                          <Video className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    <div className="flex justify-start">
                      <div className="max-w-xs sm:max-w-md bg-white rounded-2xl rounded-tl-none p-3 shadow-sm">
                        <p className="text-sm text-gray-900">Bonjour, je suis disponible pour votre projet</p>
                        <span className="text-xs text-gray-500 mt-1 block">09:15</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-xs sm:max-w-md bg-blue-600 text-white rounded-2xl rounded-tr-none p-3 shadow-sm">
                        <p className="text-sm">Parfait ! Pouvez-vous venir demain ?</p>
                        <span className="text-xs text-blue-100 mt-1 block">09:20</span>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="p-4 bg-white border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Écrivez votre message..."
                        className="flex-1 px-4 py-2 sm:py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                      <button className="p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition flex-shrink-0">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center p-6">
                    <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 text-gray-300" />
                    <p className="text-base sm:text-lg">Sélectionnez une conversation</p>
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
