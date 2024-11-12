import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Mic2, Headphones, Radio, PlayCircle, Music2, Music3, Music4 } from 'lucide-react';

const MusicNote: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

const PricingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const floatingNotes = Array(8).fill(null).map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      initial={{ opacity: 0.3, scale: 0.5 }}
      animate={{ 
        y: [-20, 20],
        opacity: [0.3, 0.6, 0.3],
        scale: [0.5, 0.7, 0.5]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: i * 0.3
      }}
    >
      <MusicNote className="w-6 h-6 text-purple-300" />
    </motion.div>
  ));

  const plans = [
    {
      type: 'Standard',
      price: '2.000',
      icon: <Music className="w-8 h-8" />,
      image: "/src/assets/12.jpeg", // Replace with your actual image path
      features: [
        { text: 'All website content features', icon: <PlayCircle className="w-5 h-5" /> },
        { text: '10 tracks, 10 videos and 50 photos', icon: <Music2 className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Headphones className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Radio className="w-5 h-5" /> }
      ]
    },
    {
      type: 'Premium',
      price: '3.000',
      icon: <Headphones className="w-8 h-8" />,
      image: "/src/assets/12.jpeg", // Replace with your actual image path
      features: [
        { text: 'All website content features', icon: <PlayCircle className="w-5 h-5" /> },
        { text: '10 tracks, 10 videos and 50 photos', icon: <Music3 className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Headphones className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Radio className="w-5 h-5" /> }
      ],
      isPopular: true
    },
    {
      type: 'Advanced',
      price: '4.000',
      icon: <Mic2 className="w-8 h-8" />,
      image: "/src/assets/12.jpeg", // Replace with your actual image path
      features: [
        { text: 'All website content features', icon: <PlayCircle className="w-5 h-5" /> },
        { text: '10 tracks, 10 videos and 50 photos', icon: <Music4 className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Headphones className="w-5 h-5" /> },
        { text: 'All website content features', icon: <Radio className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8 relative overflow-hidden">
      {floatingNotes}

      {/* Decorative Images Outside Pricing Plans */}
      <motion.div 
        className="fixed top-0 right-0 w-72 h-72 overflow-hidden"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/src/assets/11.jpeg" // Replace with your actual image
          alt="Decorative musician"
          className="w-full h-full object-cover rounded-bl-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-purple-500/60 rounded-bl-full" />
      </motion.div>

      <motion.div 
        className="fixed bottom-0 left-0 w-72 h-72 overflow-hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src="/src/assets/11.jpeg" // Replace with your actual image
          alt="Decorative listener"
          className="w-full h-full object-cover rounded-tr-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-purple-500/60 rounded-tr-full" />
      </motion.div>

      {/* Floating Images */}
      <motion.div
        className="absolute top-20 right-1/4"
        animate={{ 
          y: [-10, 10],
          rotate: [-5, 5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >

      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4"
        animate={{ 
          y: [-10, 10],
          rotate: [5, -5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      >
        <motion.img 
          src="/src/assets/11.jpeg" // Replace with your actual image
          alt="Floating listener"
          className="w-32 h-32 rounded-full object-cover shadow-lg"
          whileHover={{ scale: 1.1, rotate: -5 }}
        />
      </motion.div>

      {/* Header */}
      <motion.div 
        className="mb-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center space-x-2">
          <Music2 className="w-8 h-8 text-purple-500" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-3 gap-8 px-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.type}
              className={`relative ${
                plan.isPopular ? 'bg-purple-500 text-white' : 'bg-white'
              } rounded-2xl p-8 shadow-xl border-2 ${
                plan.isPopular ? 'border-purple-400' : 'border-gray-200'
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredPlan(plan.type)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Plan Image */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={plan.image}
                  alt={`${plan.type} plan`}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </motion.div>

              {/* Plan Icon */}
              <motion.div
                className="absolute top-4 right-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {plan.icon}
              </motion.div>

              <motion.div
                className={`rounded-full ${
                  plan.isPopular ? 'bg-purple-400' : 'border-2 border-gray-200'
                } inline-block px-6 py-2 mb-6 text-lg font-medium`}
                whileHover={{ scale: 1.1 }}
              >
                {plan.type}
              </motion.div>

              <motion.div 
                className="text-4xl font-bold mb-8 relative"
                animate={{ 
                  scale: hoveredPlan === plan.type ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                {plan.price}
                <motion.div
                  className="absolute -right-4 -top-4"
                  animate={{ 
                    y: [-5, 5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <MusicNote className="w-4 h-4" />
                </motion.div>
              </motion.div>

              <ul className="space-y-6 mb-10">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center text-lg"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                  >
                    <motion.div
                      className="mr-3"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.icon}
                    </motion.div>
                    {feature.text}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 px-6 rounded-full text-lg font-medium ${
                  plan.isPopular
                    ? 'bg-purple-400 text-white hover:bg-purple-300'
                    : 'border-2 border-gray-200 text-gray-600 hover:bg-gray-50'
                } transition-all duration-300 flex items-center justify-center space-x-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Choose plan</span>
                <Music2 className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;