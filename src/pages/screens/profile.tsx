import { useState, useEffect, useContext } from "react";
import { Instagram, Twitter, Youtube, Globe, Calendar, Play, Pause, SkipForward, SkipBack, Volume2, Home, Music, Users, Award, MessageSquare, Settings, Menu } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";

const CustomCard = ({ children, className = "" }:{children:any,className:string}) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CustomCardHeader = ({ children, className = "" }:{children:any,className:string}) => (
  <div className={`p-6 border-b ${className}`}>
    {children}
  </div>
);

const CustomCardContent = ({ children, className = "" }:{children:any,className:string}) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CustomSlider = ({ value, onChange, max = 100, step = 1 }:{value:any,onChange:any,max:number,step:number}) => {
  const handleChange = (e:any) => {
    onChange([parseInt(e.target.value)]);
  };

  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full">
      <input
        type="range"
        min="0"
        max={max}
        step={step}
        value={value[0]}
        onChange={handleChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div 
        className="absolute h-full bg-indigo-600 rounded-full"
        style={{ width: `${value[0]}%` }}
      />
      <div 
        className="absolute w-4 h-4 bg-white border-2 border-indigo-600 rounded-full -mt-1 transform -translate-y-1/4"
        style={{ left: `calc(${value[0]}% - 8px)` }}
      />
    </div>
  );
};

const ProfilePage = () => {
    const {state:{username}}=useContext(AuthContext)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState([75]);
    const [progress, setProgress] = useState([0]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("Dashboard");

    const navigationItems = [
      { icon: Home, label: "Dashboard", active: true },
      { icon: Music, label: "Music" },
      { icon: Calendar, label: "Events" },
      { icon: Users, label: "Fans" },
      { icon: Award, label: "Achievements" },
      { icon: MessageSquare, label: "Messages" },
      { icon: Settings, label: "Settings" }
    ];

    const topTracks = [
      { title: "Latest Release", duration: "3:45", streams: "1.2M" },
      { title: "Track 2", duration: "4:20", streams: "980K" },
      { title: "Track 3", duration: "3:15", streams: "875K" }
    ];

    const upcomingEvents = [
      { date: "Dec 15, 2024", name: "Live at Canal Olympia", location: "Douala", tickets: "Available" },
      { date: "Dec 22, 2024", name: "End of Year Concert", location: "Yaoundé", tickets: "Selling Fast" },
      { date: "Jan 5, 2025", name: "New Year Festival", location: "Bamenda", tickets: "Limited" }
    ];

    const socialLinks = [
      { icon: Instagram, href: "#", label: "Instagram", followers: "850K" },
      { icon: Twitter, href: "#", label: "Twitter", followers: "500K" },
      { icon: Youtube, href: "#", label: "YouTube", followers: "1.2M" },
      { icon: Globe, href: "#", label: "Website", followers: null }
    ];

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev[0] >= 100) {
              setCurrentTrackIndex(i => (i + 1) % topTracks.length);
              return [0];
            }
            return [prev[0] + 1];
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [isPlaying, topTracks.length]);

    const DashboardContent = () => (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            social.followers && (
              <CustomCard key={index} className="hover:shadow-lg transition-shadow">
                <CustomCardContent className="">
                  <div className="flex items-center space-x-4">
                    <social.icon className="w-8 h-8 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">{social.label}</p>
                      <p className="text-2xl font-bold">{social.followers}</p>
                    </div>
                  </div>
                </CustomCardContent>
              </CustomCard>
            )
          ))}
        </div>
      </div>
    );

    const MusicContent = () => (
      <div className="space-y-6">
        <CustomCard className="">
          <CustomCardHeader className="">
            <h3 className="text-lg font-semibold">My Tracks</h3>
          </CustomCardHeader>
          <CustomCardContent className="">
            <div className="space-y-4">
              {topTracks.map((track, index) => (
                <div key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setCurrentTrackIndex(index);
                    setIsPlaying(true);
                  }}
                >
                  <Play className="w-5 h-5 text-indigo-600" />
                  <div className="flex-1">
                    <p className="font-medium">{track.title}</p>
                    <p className="text-sm text-gray-600">{track.duration}</p>
                  </div>
                  <span className="text-sm text-gray-600">{track.streams} streams</span>
                </div>
              ))}
            </div>
          </CustomCardContent>
        </CustomCard>
      </div>
    );

    const EventsContent = () => (
      <div className="space-y-6">
        <CustomCard className="">
          <CustomCardHeader className="">
            <h3 className="text-lg font-semibold">All Events</h3>
          </CustomCardHeader>
          <CustomCardContent className="">
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <div className="flex-1">
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-gray-600">{event.date} • {event.location}</p>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Book Tickets
                  </button>
                </div>
              ))}
            </div>
          </CustomCardContent>
        </CustomCard>
      </div>
    );

    const renderContent = () => {
      switch (activeSection) {
        case "Dashboard":
          return <DashboardContent />;
        case "Music":
          return <MusicContent />;
        case "Events":
          return <EventsContent />;
        default:
          return <div className="p-6">Content coming soon...</div>;
      }
    };

    return (
      <div className="h-screen flex overflow-hidden bg-gray-100">
        {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
          <div className="h-full flex flex-col">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="/src//assets/aa.jpeg"
                  alt="Profile"
                  className={`${isSidebarOpen ? 'w-16 h-16' : 'w-10 h-10'} rounded-full object-cover transition-all duration-300`}
                />
                {isSidebarOpen && <h1 className="font-bold text-xl">{username}</h1>}
              </div>
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex-1 pt-4">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(item.label)}
                  className={`w-full flex items-center px-4 py-3 space-x-3
                    ${activeSection === item.label ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'}
                    transition-colors duration-200`}
                >
                  <item.icon className="w-5 h-5" />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              ))}
            </nav>

            {/* Mini Player */}
            <div className="p-4 border-t">
              <div className={`flex items-center space-x-3 ${!isSidebarOpen && 'justify-center'}`}>
                <img
                  src="/api/placeholder/48/48"
                  alt="Current Track"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                {isSidebarOpen && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{topTracks[currentTrackIndex].title}</p>
                    <p className="text-xs text-gray-500">{topTracks[currentTrackIndex].duration}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="bg-white shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{activeSection}</h2>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  New Release
                </button>
              </div>
            </div>
          </header>

          {/* Dynamic Content Area */}
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              {renderContent()}
            </div>
          </div>

          {/* Player */}
          <div className="bg-white border-t px-6 py-4">
            <div className="flex items-center space-x-6">
              <div className="flex-1">
                <CustomSlider value={progress} onChange={setProgress} />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center space-x-4">
                    <button onClick={() => setCurrentTrackIndex(i => (i - 1 + topTracks.length) % topTracks.length)}>
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button onClick={() => setCurrentTrackIndex(i => (i + 1) % topTracks.length)}>
                      <SkipForward className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-5 h-5" />
                    <div className="w-32">
                      <CustomSlider value={volume} onChange={setVolume} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePage;