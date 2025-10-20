import { ArrowLeft, Settings, Edit, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeaderArtisan({ 
  title, 
  icon: Icon, 
  showBackButton = true, 
  showSettings = false,
  showEdit = false,
  showSearch = false,
  onSearch
}) {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Section gauche */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            {showBackButton && (
              <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            )}
            
            {Icon && (
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-blue-50 rounded-lg flex-shrink-0">
                <Icon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            )}
            
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
              {title}
            </h1>
          </div>

          {/* Section droite */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {showSearch && (
              <button 
                onClick={onSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            )}
            
            {showEdit && (
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Edit className="w-5 h-5 text-gray-600" />
              </button>
            )}
            
            {showSettings && (
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}