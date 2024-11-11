import { useState, useEffect } from 'react';


interface Template {
  id: string;
  image: string;
  title: string;
  description: string;
}


const TemplatePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [templates, setTemplates] = useState<Template[]>([]);
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const TEMPLATES_PER_PAGE = 3;
  const TEMPLATES_PER_ROW = 3;



  // Simulated API call - replace with your actual API
  const fetchTemplates = async () => {
    // Same templates as before
    return [
      { id: '1', image: "/src/assets/a.png", title: "Artist Bio Black", description: "Professional black theme with detailed sections" },
      { id: '2', image: "/src/assets/a1.jpg", title: "DJ Push Electronic", description: "Modern electronic press kit" },
      { id: '3', image: "/src/assets/a2.jpg", title: "DJ Enigma", description: "Neon-themed DJ profile" },
      { id: '4', image: "/src/assets/a3.jpg", title: "Band Portfolio", description: "Multi-page band showcase" },
      { id: '5', image: "/api/placeholder/400/500", title: "Artist Modern", description: "Contemporary artist layout" },
      { id: '6', image: "/api/placeholder/400/500", title: "Photo Gallery", description: "Dynamic photo collection" },
      { id: '7', image: "/api/placeholder/400/500", title: "DJ John", description: "Professional DJ biography" },
      { id: '8', image: "/api/placeholder/400/500", title: "Big 40", description: "Featured artist template" },
      { id: '9', image: "/api/placeholder/400/500", title: "Classic Band", description: "Vintage-style band template" },
    ];
  };

  useEffect(() => {
    const loadInitialTemplates = async () => {
      setLoading(true);
      const allTemplates = await fetchTemplates();
      setTemplates(allTemplates);
      setDisplayedTemplates(allTemplates.slice(0, TEMPLATES_PER_PAGE));
      setLoading(false);
    };

    loadInitialTemplates();
  }, []);

  const loadMoreTemplates = () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    const startIndex = (currentPage) * TEMPLATES_PER_PAGE;
    const endIndex = startIndex + TEMPLATES_PER_PAGE;
    
    setDisplayedTemplates([...displayedTemplates, ...templates.slice(startIndex, endIndex)]);
    setCurrentPage(nextPage);
    setLoading(false);
  };




  // Group templates into rows
  const templateRows = [];
  for (let i = 0; i < displayedTemplates.length; i += TEMPLATES_PER_ROW) {
    templateRows.push(displayedTemplates.slice(i, i + TEMPLATES_PER_ROW));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full overflow-y-auto">
        <div className="p-6">
          
          {/* Filter Options */}
          <div className="space-y-2">

            
            {/* Custom Filter Option */}

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Search Bar */}
        <div className="sticky top-0 bg-white shadow-sm z-10 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Temlates used by Top 237 Musicians"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Best Templates for you</h1>
            <p className="text-gray-600 mb-2">
              You can search by your favorite Template here 
            </p>
            <p className="text-blue-600 hover:text-blue-700 cursor-pointer">
              Trusted by over +200 237 musicians 
            </p>
          </div>

          {/* Template Rows */}
          {templateRows.map((row, rowIndex) => (
            <div key={rowIndex} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {row.map((template) => (
                  <div key={template.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative aspect-[4/5]">
                      <img
                        src={template.image}
                        alt={template.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <h3 className="text-white text-xl font-bold">{template.title}</h3>
                        <p className="text-white/80 text-sm mt-2">{template.description}</p>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <button className="px-8 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm font-medium">
                        View Template
                      </button>
                      <button className="px-8 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium">
                        Use Template
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {displayedTemplates.length < templates.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreTemplates}
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50"
              >
                {loading ? 'Loading...' : 'See More'}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TemplatePage;