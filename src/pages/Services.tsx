import { useNavigate } from "react-router-dom";
import { CustomButton } from "./Home";
import { SocialIcon } from "react-social-icons";
import servicePic from "../assets/image 15.png";

const twitter = <SocialIcon url="https://x.com/NevilleAjim" />;
const instagram = <SocialIcon url="https://instagram.com/NevilleAjim" />;

const Services = () => {
  const navigate = useNavigate();
  
  return ( 
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 md:px-6 py-4">
        <button 
          className="text-xl font-serif font-bold" 
          onClick={() => navigate("/")}
        >
          CAMTUNE
        </button>
        
        <div className="hidden md:flex space-x-8 font-sans-serif text-[1.2rem]">
          <a href="#" className="text-gray-600 hover:text-gray-900">Stories</a>
          <a href="/aboutUs" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <CustomButton 
            className="border border-purple-500 text-purple-700 hover:bg-gray-100 px-2 md:px-4 py-2 rounded shadow text-sm md:text-base"
            onClick={() => navigate("/login")}
          >
            Login
          </CustomButton>
          <CustomButton 
            className="border border-purple-500 text-purple-700 hover:bg-gray-100 px-2 md:px-4 py-2 rounded shadow text-sm md:text-base"
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </CustomButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12">
        <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold font-sans-serif text-center md:text-left text-purple-500">
          Our Services
        </h1>
        <img 
          src={servicePic} 
          alt="Services" 
          className="max-w-full md:max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold font-mono mb-3 text-purple-500">
              Instant EPK Generation & Customization
            </h3>
            <p className="font-sans-serif">
              Our platform offers visually appealing templates that make artist profiles, album artwork, and promotional materials stand out, ensuring that your music and brand look great on any device.
            </p>
          </div>
          
          <div className="border border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold font-mono mb-3 text-purple-500">
              Stunning Visuals
            </h3>
            <p className="font-sans-serif">
              CamTune lets artists quickly create a professional EPK with easy-to-use tools and customization options, allowing them to build a profile that reflects their unique brand and appeals to fans, media, and industry contacts.
            </p>
          </div>
          
          <div className="border border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold font-mono mb-3 text-purple-500">
              Search & Streamline
            </h3>
            <p className="font-sans-serif">
              CamTune's search tools make it simple for fans, promoters, and collaborators to discover artists by genre, location, and popularity, helping everyone connect seamlessly within the Cameroonian music community.
            </p>
          </div>
          
          <div className="border border-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold font-mono mb-3 text-purple-500">
              Analytics & Insights
            </h3>
            <p className="font-sans-serif">
              Our Analytics tools provide valuable audience data, engagement metrics, and listener demographics, empowering artists to make informed decisions and grow their fanbase effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-200 mt-auto rounded-lg">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6">
            <div className="font-bold">CamTune</div>
            <div className="font-bold">©2024 CamTune</div>
            <div className="flex gap-4">
              <span>{twitter}</span>
              <span>{instagram}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 w-full" />

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-8 py-6">
            <div className="flex justify-center">
              <ul className="space-y-2 text-center">
                <li className="font-bold mb-3">Information</li>
                <li>Pricing</li>
                <li>Services</li>
                <li>About</li>
                <li>Search</li>
                <li>Templates</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <ul className="space-y-2 text-center">
                <li className="font-bold mb-3">Legal</li>
                <li>Terms of Use</li>
                <li>Copywrite Info</li>
                <li>Legal Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
 
export default Services;