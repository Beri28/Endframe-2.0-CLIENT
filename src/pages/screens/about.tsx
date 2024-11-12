import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Animation variants for reuse
const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const FeaturesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-20">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-4xl font-serif mb-12"
      >
        Features
      </motion.h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {[
          { title: "Branding", description: "CamTune provides powerful tools to help artists build their brand and connect with their audience." },
          { title: "Marketing", description: "Reach new audiences and promote your music with CamTune's comprehensive marketing tools." },
          { title: "Networking", description: "Connect with industry professionals and build valuable relationships through CamTune's networking platform." }
        ].map((feature, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 space-y-4"
            >
              <h3 className="text-2xl font-serif">{feature.title}</h3>
              <p className="text-gray-800">{feature.description}</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Learn More
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Navbar: React.FC = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
  >
    <a href="/">
      <div className="text-xl font-normal">CamTune</div>
    </a>
    
    <div className="flex items-center space-x-8">
      {["Stories", "About", "Services", "Contact"].map((item, index) => (
        <motion.a
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          href={`/${item.toLowerCase()}`}
          className="text-sm text-gray-800 hover:text-gray-600"
        >
          {item}
        </motion.a>
      ))}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="text-sm text-indigo-600 px-4 py-2 rounded-lg border border-indigo-600"
      >
        Log In
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="text-sm text-white bg-indigo-600 px-4 py-2 rounded-lg"
      >
        Pricing
      </motion.button>
    </div>
  </motion.nav>
);

const AboutSection: React.FC = () => (
  <div className="max-w-7xl mx-auto px-6 mt-12">
    <div className="grid grid-cols-2 gap-16 items-center">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInLeft}
        className="relative"
      >
        <motion.div 
          className="absolute -left-4 -top-4 z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16">
            <div className="absolute bg-indigo-600/20 w-full h-full rounded-full"></div>
            <div className="absolute bg-indigo-600 w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 clip-path-star"></div>
          </div>
        </motion.div>
        <img 
          src="/src/assets/image 12.png" 
          alt="Traditional drummer"
          className="w-full h-[450px] object-cover rounded-lg"
        />
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
        className="space-y-6"
      >
        <h1 className="text-[80px] font-serif leading-tight">
          ABOUT US
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          CamTune is a platform dedicated to empowering artists by providing the tools 
          they need to market, brand, and elevate their music. Designed with an 
          interactive and user-friendly interface, CamTune offers a seamless experience 
          for artists and fans alike, making it easier than ever to discover and 
          celebrate Cameroonian music.
        </p>
      </motion.div>
    </div>
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 my-20">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-4xl font-serif mb-12"
      >
        What Our Users Say
      </motion.h2>
      <div className="grid grid-cols-2 gap-8">
        {[
          {
            name: "John Doe",
            role: "Music Producer",
            image: "/src/assets/image 12.png",
            quote: "CamTune has been a game-changer for my music career. The platform's tools and features have helped me reach new audiences and grow my brand."
          },
          {
            name: "Jane Smith",
            role: "Music Enthusiast",
            image: "/src/assets/image 14.png",
            quote: "I've discovered so many amazing Cameroonian artists through CamTune. The platform is a treasure trove of unique and inspiring music."
          }
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.5, delay: index * 0.2 }
              }
            }}
            className="bg-white rounded-lg shadow-lg p-8 space-y-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt="User Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-medium">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-800">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="w-1/2"
        >
          <h1 className="text-5xl font-serif font-bold mb-6">
            Empowering Artists, Elevating Music
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Notre mission est de créer un espace en ligne dynamique où l'héritage musical diversifié du Cameroun peut être présenté, apprécié et exploré. Des rythmes vibrants du Makossa aux sons soul du Njang, aux rythmes énergiques du Mbikossi et à la fusion des genres afro, CamTune est la destination pour tous les passionnés de musique camerounaise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded"
          >
            <a href="/search">Explore Now</a>
          </motion.button>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
          className="w-1/2"
        >
          <img
            src="/src/assets/image.png"
            alt="Musician playing an instrument"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

const CustomStyle = () => (
  <style>{`
    .clip-path-star {
      clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
  `}</style>
);

const LandingPage: React.FC = () => (
  <div className="min-h-screen bg-white">
    <CustomStyle />
    <Navbar />
    <AboutSection />
    <FeaturesSection />
    <HeroSection />
    <TestimonialsSection />
  </div>
);

export default LandingPage;