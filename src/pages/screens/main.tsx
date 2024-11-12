import { ArrowRight, Monitor, Smartphone, Rocket, Mail } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">CamTune</div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#stories" className="hover:text-purple-600">Stories</a>
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#services" className="hover:text-purple-600">Services</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-purple-600">Login</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md">Apply</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/a1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-white">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Music Career with Professional EPKs</h1>
          <p className="text-xl mb-8">Créez des EPKs impressionnants en quelques minutes. Profitez de nos modèles personnalisables pour créer des EPKs qui vous démarquent.</p>
          <button className="bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </section>

      {/* Digital Stage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Create a Digital Stage That Shines as Bright as Your Talent.</h2>
            <p className="text-gray-600 mb-8">Créez le site web de vos rêves en toute simplicité. Nos outils gratuits vous permettront de personnaliser des modèles époustouflants, de choisir parmi une large gamme de polices de caractères et de couleurs, et de créer une présence en ligne unique qui reflète votre marque.</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
              Learn About Design Tools
            </button>
          </div>
          <div>
            <img src="/src/assets/a1.jpg" alt="Artist" className="rounded-lg w-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Features</h2>
          <p className="text-gray-600 mb-12">Create a stunning website with free templates and custom design tools to make it yours</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg">
              <Mail className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant EPK Customization</h3>
              <p className="text-gray-600">Changez l'apparence de votre EPK instantanément, sans perdre votre contenu. Enregistrez vos designs pour les utiliser à tout moment.</p>
            </div>
            
            <div className="p-6 bg-white rounded-lg">
              <Monitor className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Stunning Visuals</h3>
              <p className="text-gray-600">Recadrez, filtrez et améliorez vos images pour créer un look professionnel.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <Smartphone className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Streamlined Design Process</h3>
              <p className="text-gray-600">Démarrez rapidement avec nos modèles prédéfinis. Ajoutez la touche unique de votre marque avec des polices de caractères personnalisées.</p>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <Rocket className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call to Action, Amplified</h3>
              <p className="text-gray-600">Stimulez l'engagement avec des boutons d'appel à l'action personnalisables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Responsive design for all screen sizes</h2>
              <p className="mb-6">Look professional on any device or browser. CamTune websites are optimized for mobile screens. Design your site once and let our responsive layouts do the rest.</p>
            </div>
            <div>
              <img src="/src/assets/a1.jpg" alt="Responsive Design" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Artist Discovery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Streamline Your Search, Discover Your Next Favorite Artist</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover Rising Stars and Established Legends. Search our extensive database of EPKs to find the perfect artist for your next project.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
            Get Started <ArrowRight className="inline-block ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;