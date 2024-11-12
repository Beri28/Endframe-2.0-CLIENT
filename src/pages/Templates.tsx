import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Template {
  id: number;
  imageUrl: string;
  title: string;
}

const EPKTemplatesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Sample template data
  const templates: Template[] = [
    {
      id: 1,
      imageUrl: '/path-to-template1.jpg',
      title: 'DJ Biography Template',
    },
    {
      id: 2,
      imageUrl: '/path-to-template2.jpg',
      title: 'Electronic Press Kit',
    },
    // Add more templates as needed
  ];

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Templates', path: '/templates' },
    { label: 'My Projects', path: '/projects' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-50">
        <div className="relative">
          <button 
            className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                >
                  {/* Menu Icons */}
                  {item.label === 'Home' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {item.label === 'Templates' && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  )}
                  <span>{item.label}</span>
                </button>
              ))}

              {/* User Section in Dropdown */}
              <div className="border-t border-gray-200 mt-2 pt-2 px-4">
                <div className="text-sm text-gray-600">Quick Actions</div>
                <button className="w-full text-left px-4 py-2 mt-2 text-purple-600 hover:bg-purple-50 rounded flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span>Create New EPK</span>
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
          Log in
        </button>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8 z-30">
        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for Templates"
            className="w-full py-2 px-3 outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">EPK Templates</h1>
        <p className="text-gray-600">
          Inspirational designs, illustrations, and graphic elements from the world's best designers.
        </p>
        <p className="text-gray-600">
          Want more inspiration? Browse and search results...
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/5]">
              <img
                src={`https://via.placeholder.com/400x500?text=Template+${index + 1}`}
                alt={`Template ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex justify-between items-center">
                  <button className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-600 transition-colors">
                    Use
                  </button>
                  <button className="bg-white text-gray-800 px-4 py-1 rounded-md hover:bg-gray-100 transition-colors">
                    Similar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EPKTemplatesPage;