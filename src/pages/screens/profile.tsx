import { useState, useEffect, useContext } from "react";
import { Instagram, Twitter, Youtube, Globe, Calendar, Play, Pause, SkipForward, SkipBack, Volume2, Home, Music, Users, Award, MessageSquare, Settings, Menu } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CustomButton } from "../Home";
import landing from "../../assets/Cameroon-music-lovers.jpg";

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
    const navigate = useNavigate();
    const { state } = useLocation();
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
      <div className="space-y-6 h-fit">
        <p className="text-lg">Social Media</p>
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
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col ">
          {/* Top Bar */}
          {/* Navigation */}
          <nav className="flex items-center justify-between px-4 md:px-20 py-4 ">
            <button className="text-xl font-[cursive] font-bold" onClick={() => navigate("/")}>CAMTUNE</button>
            
            <div className="hidden md:flex space-x-8 font-sans-serif text-[1.2rem]">
              <Link to='about' className="text-gray-600 hover:text-gray-900" >About</Link>
              {/* <a href="/aboutUs" className="text-gray-600 hover:text-gray-900">About</a> */}
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#footer" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <CustomButton 
                className="border border-purple-500 text-purple-700 hover:bg-gray-100 px-2 md:px-4 py-2 rounded shadow text-sm md:text-base"
                onClick={() => navigate("/login")}
              >
                Login
              </CustomButton>
              <CustomButton className="hidden sm:flex border border-purple-500 text-purple-700 hover:bg-gray-100 px-2 md:px-4 py-2 rounded shadow text-sm md:text-base"
                onClick={() => navigate("/pricing")}>
                Pricing
              </CustomButton>
            </div>
          </nav>
          <div className=" px-4 md:px-20">
            {/* Hero Section */}
            <div className="relative py-16">
              <div className="absolute inset-0">
                <img 
                  src={state.image} 
                  className="w-full h-full object-cover"
                  alt="Landing background"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-jump-in font-[cursive]">
                  {state.name}
                </h1>
                <p className="text-base md:text-lg-[2] mb-8 max-w-2xl font-sans-serif">
                  {state.bio}
                </p>
                {/* <div className="flex space-x-4">
                  <CustomButton className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-2 md:py-3 rounded text-sm md:text-base"
                        onClick={() => navigate("/register")}>
                    Get Started
                  </CustomButton>
                </div> */}
              </div>
            </div>
            {/* Dynamic Content Area */}
            <div className="">
              <div className="p-6 flex flex-col gap-y-8 overflow-auto">
                {/* {renderContent()} */}
                <DashboardContent />
                <MusicContent />
                <EventsContent />
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
      </div>
    );
};

export default ProfilePage;