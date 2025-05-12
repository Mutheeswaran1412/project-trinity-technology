import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const opacity = 1 - Math.min(1, scrollPos / 700);
      const translateY = scrollPos * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className=" "
          style={{ mixBlendMode: 'multiply' }}
        />
        <img 
          src="https://media.istockphoto.com/id/1135075538/vector/smart-city.jpg?s=612x612&w=0&k=20&c=SiaDcq5hzb-4OjNfCTpc71nwq3v9tUIFVhDwelSJaCE=" 
          alt=" "
          className="w-full h-full object-cover"
        />
      </div>

      <div 
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full flex items-center space-x-3">
              <img 
                src="https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" 
                alt="Databricks Logo" 
                className="h-6"
              />
              <div className="w-px h-6 bg-white/20"></div>
              <span className="text-white font-medium">Official Consulting Partner</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-8 leading-tight">
            The Elite Databricks Partner to Turn Your Data into AI-insights
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Get the power of Databricks's data intelligence platform & get ready to start your AI-Driven transformation today
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              variant="primary" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold"
            >
              Contact Databricks Experts
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              See Success Stories
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-sm text-gray-300">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-sm text-gray-300">Data Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">9+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;