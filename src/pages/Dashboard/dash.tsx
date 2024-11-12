import React, { useEffect, useState } from 'react';
import { Menu, Bell, Settings, Search, ChevronDown, Music2, Users, Mic2, Radio, PlayCircle, Share2, Database, Calendar, BarChart3, FileText, RefreshCcw, PenSquare, Eye, ChevronRight } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { artistData } from '../screens/Search';

interface DashboardStats {
  label: string;
  value: string;
  percentage: string;
  icon: React.ReactNode;
}


const DashboardPage = () => {
  const { state } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [epkLink, setEpkLink] = useState<string | null>(null);
  const [artist,setArtist]=useState<artistData>([])
  const generateEPKLink = () => {
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const newLink = `https://yourmusic.com/epk/${uniqueId}`;
    setEpkLink(newLink);
    toast.success('EPK Link generated successfully!');
  };
  const getArtist=async()=>{
    try {
      const artist=await axios.get<artistData>('http://localhost:8080/api/artist')
    console.log(artist.data)
    setArtist(artist.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleEPKAction = (action) => {
    switch (action) {
      case 'view':
        // Handle viewing current EPK
        window.location.href = '/epk/view';
        break;
      case 'reset':
        // Reset EPK link
        setEpkLink(null);
        break;
      case 'edit':
        // Handle editing EPK
        window.location.href = '/epk/edit';
        break;
    }
  };

  const resetEPKLink = () => {
    setEpkLink(null);
    toast.success('EPK Link reset successfully!');
  };

  const stats: DashboardStats[] = [
    { label: 'Total Streams', value: `${artist.rawData? artist.rawData.audiomackData?.stats?.plays_raw+artist.rawData.spotifyData?.monthlyListeners:""}`, percentage: '0.43%', icon: <PlayCircle className="h-6 w-6 text-purple-500" /> },
    { label: 'Monthly Listeners', value: '45,234', percentage: '4.35%', icon: <Users className="h-6 w-6 text-blue-500" /> },
    { label: 'Track Count', value: '125', percentage: '2.59%', icon: <Music2 className="h-6 w-6 text-green-500" /> },
    { label: 'Revenue', value: '$3,427', percentage: '0.95%', icon: <Database className="h-6 w-6 text-yellow-500" /> },
  ];

  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: <BarChart3 />, 
      link: '#',
      onClick: () => setActiveSubmenu('dashboard')
    },
    { 
      label: 'My Music', 
      icon: <Music2 />, 
      link: '#',
      onClick: () => setActiveSubmenu('music')
    },
    { 
      label: 'Live Shows', 
      icon: <Mic2 />, 
      link: '#',
      onClick: () => setActiveSubmenu('shows')
    },
    { 
      label: 'Radio Plays', 
      icon: <Radio />, 
      link: '#',
      onClick: () => setActiveSubmenu('radio')
    },
    { 
      label: 'Playlists', 
      icon: <PlayCircle />, 
      link: '#',
      onClick: () => setActiveSubmenu('playlists')
    },
    { 
      label: 'Analytics', 
      icon: <BarChart3 />, 
      link: '#',
      onClick: () => setActiveSubmenu('analytics')
    },
    { 
      label: 'Calendar', 
      icon: <Calendar />, 
      link: '#',
      onClick: () => setActiveSubmenu('calendar')
    },
    { 
      label: 'EPK', 
      icon: <FileText />, 
      hasSubmenu: true,
      submenuItems: [
        { 
          label: 'View Current EPK', 
          icon: <Eye className="h-4 w-4" />,
          onClick: () => handleEPKAction('view')
        },
        { 
          label: 'Reset EPK Link', 
          icon: <RefreshCcw className="h-4 w-4" />,
          onClick: () => handleEPKAction('reset')
        },
        { 
          label: 'Edit Current', 
          icon: <PenSquare className="h-4 w-4" />,
          onClick: () => handleEPKAction('edit')
        }
      ]
    }
  ];


  const renderMenuItem = (item, index) => (
    <div key={index} className="relative">
      <a
        href={item.link}
        onClick={(e) => {
          e.preventDefault();
          if (item.hasSubmenu) {
            setActiveSubmenu(activeSubmenu === index ? null : index);
          } else {
            item.onClick?.();
          }
        }}
        className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          {item.icon}
          <span>{item.label}</span>
        </div>
        {item.hasSubmenu && (
          <ChevronRight className={`h-4 w-4 transition-transform ${activeSubmenu === index ? 'rotate-90' : ''}`} />
        )}
      </a>
      
      {/* Submenu */}
      {item.hasSubmenu && activeSubmenu === index && (
        <div className="ml-4 mt-1 space-y-1">
          {item.submenuItems.map((subItem, subIndex) => (
            <button
              key={subIndex}
              onClick={subItem.onClick}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {subItem.icon}
              <span>{subItem.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  useEffect(()=>{
    getArtist()
  },[state.id])
  // Chart options with proper typing
  const lineChartOptions: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      background: 'transparent',
    },
    colors: ['#8b5cf6', '#60a5fa'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    xaxis: {
      categories: ['Sep', 'Oct', 'Nov'],
      labels: {
        style: {
          colors: '#6b7280',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6b7280',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
    },
    grid: {
      borderColor: '#f3f4f6',
      strokeDashArray: 4,
    },
  };

  const lineChartSeries = [
    {
      name: 'Monthly Streams',
      data: [15000, 25000, 28000],
    },
    {
      name: 'Monthly Revenue',
      data: [25000, 35000, 32000],
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="fixed inset-y-0 left-0 w-64 bg-gray-800 shadow-lg z-50"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-8">
                <Music2 className="h-8 w-8 text-purple-500" />
                <h2 className="text-xl font-bold">{state.username}</h2>
              </div>
              <nav className="space-y-2">
                {menuItems.map((item, index) => renderMenuItem(item, index))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
            <h1 className="text-xl font-bold font-[cursive]">CAMTUNE</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tracks..."
                className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <Bell className="h-6 w-6 text-gray-300" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                <Settings className="h-6 w-6 text-gray-300" />
              </button>
              <div className="flex items-center gap-2">
                <img
                  src={artist.photos?artist.photos[0]:""}
                  alt="Profile"
                  className="h-10 w-10 rounded-full ring-2 ring-purple-500"
                />
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{state.usertName || ""}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8" onClick={()=>isMenuOpen?setIsMenuOpen(false):setIsMenuOpen(isMenuOpen)}>
        {/* EPK Generator */}
        <div className="mb-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-1">Electronic Press Kit</h2>
              <p className="text-gray-400 text-sm">Generate a shareable link to your EPK</p>
            </div>
            <div className="flex items-center gap-4">
              {epkLink ? (
                <>
                  <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg">
                    <input
                      type="text"
                      value={epkLink}
                      readOnly
                      className="bg-transparent text-sm text-gray-300 w-64"
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(epkLink);
                        toast.success('Link copied to clipboard!');
                      }}
                      className="p-1 hover:bg-gray-600 rounded"
                    >
                      <Share2 className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <button
                    onClick={resetEPKLink}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                  >
                    <RefreshCcw className="h-4 w-4" />
                    Reset Link
                  </button>
                </>
              ) : (
                <button
                  onClick={generateEPKLink}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                >
                  Generate EPK Link
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between">
                {stat.icon}
                <span className="text-sm text-green-400">+{stat.percentage}</span>
              </div>
              <p className="text-gray-400 text-sm mt-4">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Performance Overview</h2>
                <p className="text-gray-400 text-sm">Monthly streams and revenue</p>
              </div>
              <select className="p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300">
                <option>This Quarter</option>
                <option>Last Quarter</option>
                <option>This Year</option>
              </select>
            </div>
            <ReactApexChart
              options={lineChartOptions}
              series={lineChartSeries}
              type="line"
              height={350}
            />
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Top Platforms</h2>
              <select className="p-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300">
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Daily</option>
              </select>
            </div>
            <div className="space-y-4">
              {['Spotify', 'Apple Music', 'YouTube Music', 'SoundCloud'].map((platform, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-sm">{platform[0]}</span>
                    </div>
                    <span className="font-medium">{platform}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{Math.floor(Math.random() * 100000)} plays</p>
                    <p className="text-sm text-gray-400">+{Math.floor(Math.random() * 10)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;