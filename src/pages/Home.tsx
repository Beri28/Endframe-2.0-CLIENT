import { Link, useNavigate } from "react-router-dom";
import React, { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import landing from "../assets/landing.png";
import r from "../assets/R.jpeg";
import { Laptop, Image, Smartphone, Rocket, Twitter, Instagram } from 'lucide-react';
import { Search, Music, Star } from 'lucide-react';
import pic1 from "../assets/pic1.png";
import { SocialIcon } from "react-social-icons";
import axios from 'axios'

interface SearchCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  hasLink?: boolean;
}
const twitter = <SocialIcon url="https://x.com/NevilleAjim" />
const instagram = <SocialIcon url="https://instagram.com/NevilleAjim" />

export const CustomButton: React.FC<CustomButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`transition duration-200 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, hasLink = true }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <div className="flex items-start gap-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {hasLink && (
          <a href="#" className="mt-1">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
              <span className="text-xs text-gray-400">→</span>
            </div>
          </a>
        )}
      </div>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const searchArtist=async (name:string)=>{
  console.log(name)
  const searchData=await axios.get('http://localhost:8080/api/search?artistName='+name)
  console.log(searchData)
}

const Home: React.FC = () => { 
  const navigate = useNavigate();
  const [name,setName]=useState<string>('')
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
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

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={landing} 
            className="w-full h-full object-cover"
            alt="Landing background"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-jump-in">
            Elevate Your Music Career<br />
            with Professional EPKs
          </h1>
          <p className="text-base md:text-lg-[2] mb-8 max-w-2xl font-sans-serif">
            Créez des EPKs impressionnants en quelques minutes. Profitez de nos modèles
            Personnalisables pour créer des EPKs qui vous démarquent.
          </p>
          <div className="flex space-x-4">
            <CustomButton className="bg-purple-600 hover:bg-purple-700 text-white px-6 md:px-8 py-2 md:py-3 rounded text-sm md:text-base"
                  onClick={() => navigate("/register")}>
              Get Started
            </CustomButton>
          </div>
          
          <button className="mt-8 text-white flex items-center hover:text-purple-400 text-sm md:text-base"
                  onClick={() => navigate("/aboutUs")}>
            Learn More
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Digital Stage Section */}
      <div className="relative bg-purple-50">
        <div className="px-4 md:px-6 py-8 md:py-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Create a Digital Stage<br />
                That Shines as Bright as<br />
                Your Talent.
              </h2>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                Créez le site web de vos rêves en toute simplicité. Nos outils intuitifs vous permettent de personnaliser des modèles époustouflants, de choisir parmi une large gamme de polices de caractères et de couleurs, et de créer une présence en ligne unique qui reflète votre marque.
              </p>
              <CustomButton className="bg-purple-600 hover:bg-purple-700 text-white px-4 md:px-6 py-2 rounded text-sm md:text-base"
                        onClick={() => navigate("/features")}>
                Learn About Design Tools
              </CustomButton>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <img 
                  src={r} 
                  alt="Digital Stage" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className=" py-12 md:py-16 bg-gray-50">
          <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2" onClick={() => navigate("/features")}>Features</h2>
              <p className="text-gray-600 text-sm md:text-base">
                Create a stunning EPK with free templates and<br className="hidden md:block" />
                custom design tools to make it yours.
              </p>
            </div>
            <CustomButton className="mt-4 md:mt-0 px-4 py-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-300 text-sm md:text-base"
                  onClick={() => navigate("/templates")}>
              Get Started
            </CustomButton>
          </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 container mx-auto">
            <FeatureCard
              icon={<Laptop className="w-5 h-5 md:w-6 md:h-6" />}
              title="Instant EPK Customization"
              description="Changez l'apparence de votre EPK instantanément, sans perdre votre contenu. Enregistrez vos designs pour les utiliser à tout moment."
            />

            <FeatureCard
              icon={<Image className="w-5 h-5 md:w-6 md:h-6" />}
              title="Stunning Visuals"
              description="Recadrez, filtrez et améliorez vos images pour créer un look professionnel."
            />

            <FeatureCard
              icon={<Smartphone className="w-5 h-5 md:w-6 md:h-6" />}
              title="Streamlined Design Process"
              description="Démarrez rapidement avec nos modèles prédéfinis. Ajoutez la touche unique de votre marque avec des polices de caractères personnalisées."
            />

            <FeatureCard
              icon={<Rocket className="w-5 h-5 md:w-6 md:h-6" />}
              title="Call to Action, Amplified"
              description="Stimulez l'engagement avec des boutons d'appel à l'action personnalisables."
            />
          </div>
      </div>
        {/* SearchSection: React.FC = () => {
            const navigate = useNavigate(); */}
      <div className="relative min-h-screen">
              <img 
                src={pic1} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50"
              />
      
      <div className="relative z-10 px-4 md:px-6 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Search Section */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Streamline Your Search, Discover Your
              <br className="hidden sm:block" />
              Next Favorite Artist
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Discover Rising Stars and Established Legends. Search our extensive database of 
              EPKs to find the perfect artist for your next project.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl md:max-w-2xl mx-auto px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search artists, genres, or locations..."
                  name={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full px-4md:px-6 py-3 md:py-4 bg-white rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-12 text-zinc-950"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <button
                  onClick={() => searchArtist(name)}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 text-sm md:text-base"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Search Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4">
            <SearchCard
              icon={<Star className="w-5 h-5 md:w-6 md:h-6" />}
              title="Discover New Talent"
              description="Find emerging artists and fresh voices in your preferred genres. Filter by style, location, and availability."
            />
            <SearchCard
              icon={<Music className="w-5 h-5 md:w-6 md:h-6" />}
              title="Professional EPKs"
              description="Browse comprehensive electronic press kits with high-quality media, bio, and performance history."
            />
            <SearchCard
              icon={<Search className="w-5 h-5 md:w-6 md:h-6" />}
              title="Advanced Search"
              description="Use our powerful search tools to filter by genre, location, availability, and more to find your perfect match."
            />
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => navigate('/artists')}
              className="bg-purple-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md text-sm md:text-base"
            >
              Start Discovering
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-neutral-200 mt-8 pt-8 rounded-lg" id="footer">
        {/* Top Section */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:gap-2 md:p-5 font-sans-serif">
        <div className="flex pb-5 justify-center">
            <ul className="space-y-1 text-start">
              <li className="font-bold">Links</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex pb-5 justify-center"> 
            <ul className="space-y-1  text-start">
              <li className="font-bold">Information</li>
              <li>Pricing</li>
              <li>Services</li>
              <li>About</li>
              <li>Search</li>
              <li>Templates</li>
            </ul>
          </div>
          <div className="flex pb-5 justify-center">
            <ul className="space-y-1 text-start">
              <li className="font-bold">Legal</li>
              <li>Terms of Use</li>
              <li>Copywrite Info</li>
              <li>Legal Policy</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 w-full my-2" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-16 lg:gap-[10rem] p-4 md:p-5 font-roboto font-bold">
          {/* <div>CamTune</div> */}
          <div>©2024 CamTune</div>
          <div className="flex gap-4">
            <span className="h-10 w-10"> <Twitter /> </span>
            <span className="h-10 w-10"> <Instagram /></span>
          </div>
        </div>
      </footer>
      </div>
    </div>
 );
};
// md:gap-8 lg:gap-10 
export default Home;