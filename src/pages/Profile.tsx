import { useState } from 'react';
import { Plus, Minus, User, MapPin, Music, Video, Camera, X } from 'lucide-react';
import { CustomButton, instagram, twitter } from './Home';
import { useNavigate } from 'react-router-dom';

interface FormItem {
  id: string;
  value: string;
}

interface SectionData {
  [key: string]: FormItem[];
}

interface PersonalInfo {
  profilePic: string | null;
  name: string;
  bio: string;
  city: string;
  recordLabels: string[];
  awards: string[];
  nominations: string[];
  mediaCoverage: string[];
  skills: string[];
  socialMedia: string[];
  collaborations: string[];
  performances: string[];
}

const EPKForm = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    profilePic: null,
    name: '',
    bio: '',
    city: '',
    recordLabels: [],
    awards: [],
    nominations: [],
    mediaCoverage: [],
    skills: [],
    socialMedia: [],
    collaborations: [],
    performances: []
  });

  const [sectionData, setSectionData] = useState<SectionData>({
    'Record Labels': [],
    'Awards': [],
    'Nominations': [],
    'Media Coverage': [],
    'Skills': [],
    'Social Media Link': [],
    'Collaborations': [],
    'Touring and Performances': [],
  });

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const handleGenerateEPK = () => {
    console.log('Generating EPK');
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const addItem = (section: string, value: string) => {
    if (value.trim()) {
      setSectionData(prev => ({
        ...prev,
        [section]: [...prev[section], { id: crypto.randomUUID(), value: value.trim() }]
      }));
      setInputValues(prev => ({ ...prev, [section]: '' }));
    }
  };

  const removeItem = (section: string, id: string) => {
    setSectionData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const handleInputChange = (section: string, value: string) => {
    setInputValues(prev => ({ ...prev, [section]: value }));
  };

  return (
    <div className="min-h-screen bg-purple-100">
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 md:px-6 py-4">
          <button className="text-xl font-serif font-bold" onClick={() => navigate("/")}>CAMTUNE</button>
          
          <div className="hidden md:flex space-x-8 font-sans-serif text-[1.2rem]">
            <a href="#" className="text-gray-600 hover:text-gray-900">Stories</a>
            <a href="/aboutUs" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <CustomButton 
              className="border border-purple-500 text-purple-700 hover:bg-gray-100 px-2 md:px-4 py-2 rounded shadow text-sm md:text-base"
              onClick={() => navigate("/pricing")}
            >
              Pricing
            </CustomButton>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
              
              {/* Profile Picture Upload */}
              <div className="bg-gray-200 w-48 h-48 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
                <input type="file" className="hidden" id="profile-pic" />
                <label htmlFor="profile-pic" className="flex flex-col items-center">
                  <Plus className="w-8 h-8 text-gray-500" />
                  <span className="mt-2 text-sm text-gray-600">Upload Profile Pic</span>
                </label>
              </div>

              {/* Personal Details Form */}
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Brand Name/Artist Name"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about yourself (bio)"
                    className="w-full p-4 border rounded-lg h-32 focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City/town"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-300 outline-none"
                  />
                </div>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-4">
                {['Record Labels', 'Awards', 'Nominations', 'Media Coverage'].map((section) => (
                  <div key={section} className="space-y-2">
                    <button
                      onClick={() => toggleSection(section)}
                      className="w-full bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg flex items-center justify-between transition-colors"
                    >
                      <span>{section}</span>
                      {openSections[section] ? (
                        <Minus className="w-5 h-5 text-purple-700" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-700" />
                      )}
                    </button>
                    
                    {openSections[section] && (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder={`Enter ${section}...`}
                            className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-300 focus:outline-none"
                            value={inputValues[section] || ''}
                            onChange={(e) => handleInputChange(section, e.target.value)}
                          />
                          <button
                            onClick={() => addItem(section, inputValues[section] || '')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Add
                          </button>
                        </div>
                        
                        {sectionData[section].length > 0 && (
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <ul className="space-y-2">
                              {sectionData[section].map((item) => (
                                <li key={item.id} className="flex items-center justify-between">
                                  <span>{item.value}</span>
                                  <button
                                    onClick={() => removeItem(section, item.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Sections */}
              <div className="space-y-4">
                {['Skills', 'Social Media Link', 'Collaborations', 'Touring and Performances'].map((section) => (
                  <div key={section} className="space-y-2">
                    <button
                      onClick={() => toggleSection(section)}
                      className="w-full bg-purple-200 hover:bg-purple-300 py-2 px-4 rounded-lg flex items-center justify-between transition-colors"
                    >
                      <span>{section}</span>
                      {openSections[section] ? (
                        <Minus className="w-5 h-5 text-purple-700" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-700" />
                      )}
                    </button>
                    
                    {openSections[section] && (
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder={`Enter ${section}...`}
                            className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-300 focus:outline-none"
                            value={inputValues[section] || ''}
                            onChange={(e) => handleInputChange(section, e.target.value)}
                          />
                          <button
                            onClick={() => addItem(section, inputValues[section] || '')}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Add
                          </button>
                        </div>
                        
                        {sectionData[section].length > 0 && (
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <ul className="space-y-2">
                              {sectionData[section].map((item) => (
                                <li key={item.id} className="flex items-center justify-between">
                                  <span>{item.value}</span>
                                  <button
                                    onClick={() => removeItem(section, item.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Artistic Works Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Artistic Works</h2>
              
              {/* Upload Sections */}
              <div className="space-y-4">
                {[
                  { title: 'Upload Photos', icon: Camera, desc: '(upload photos that best showcase you)' },
                  { title: 'Upload Videos', icon: Video, desc: '(upload videos your best vids)' },
                  { title: 'Upload Musics', icon: Music, desc: '(upload audios that best showcase you)' }
                ].map((section) => (
                  <div
                    key={section.title}
                    className="bg-gray-200 p-6 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <section.icon className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">{section.title}</h3>
                        <p className="text-sm text-gray-600">{section.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Generate EPK Button */}
              <button
                onClick={handleGenerateEPK}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg mt-8 transition-colors"
              >
                Generate EPK
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 bg-neutral-200 mt-8 rounded-lg">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-[10rem] p-4 md:p-5 font-roboto font-bold">
            <div>CamTune</div>
            <div>©2024 CamTune</div>
            <div className="flex gap-4">
              <span>{twitter}</span>
              <span>{instagram}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-300 w-full my-2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2p-4 md:gap-8 lg:gap-2 md:p-5 font-sans-serif">
            <div className="flex pb-5 justify-center"> 
              <ul className="space-y-1  text-center">
                <li className="font-bold">Information</li>
                <li>Pricing</li>
                <li>Services</li>
                <li>About</li>
                <li>Search</li>
                <li>Templates</li>
              </ul>
            </div>
            <div className="flex pb-5 justify-center">
              <ul className="space-y-1 text-center">
                <li className="font-bold">Legal</li>
                <li>Terms of Use</li>
                <li>Copywrite Info</li>
                <li>Legal Policy</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EPKForm;