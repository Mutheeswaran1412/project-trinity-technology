import React, { useState } from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardTitle, CardDescription, CardImage } from '../ui/Card';

const Industries = () => {
  const [activeTab, setActiveTab] = useState('healthcare');

  const industries = [
    {
      id: 'healthcare',
      name: 'Healthcare',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      description: 'Helping healthcare providers improve patient outcomes through data-driven insights and predictive analytics.',
      caseStudy: 'Reduced hospital readmission rates by 25% through predictive analytics and patient risk profiling.'
    },
    {
      id: 'finance',
      name: 'Finance',
      image: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg',
      description: 'Enabling financial institutions to make informed decisions, detect fraud, and enhance customer experiences.',
      caseStudy: 'Implemented real-time fraud detection system that reduced fraudulent transactions by 60% for a leading banking institution.'
    },
    {
      id: 'retail',
      name: 'Retail',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg',
      description: 'Optimizing inventory management, personalizing customer experiences, and forecasting trends for retailers.',
      caseStudy: 'Developed demand forecasting model that improved inventory efficiency by 30% and reduced stockouts by 45%.'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg',
      description: 'Enhancing operational efficiency, quality control, and predictive maintenance in manufacturing processes.',
      caseStudy: 'Implemented IoT analytics platform resulting in 40% reduction in equipment downtime and 15% increase in production efficiency.'
    },
    {
      id: 'telecom',
      name: 'Telecommunications',
      image: 'https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg',
      description: 'Optimizing network performance, customer segmentation, and service quality for telecom providers.',
      caseStudy: 'Reduced customer churn by 18% through predictive analytics and personalized retention strategies.'
    },
    {
      id: 'it',
      name: 'Information Technology',
      image: 'https://images.pexels.com/photos/3861974/pexels-photo-3861974.jpeg',
      description: 'Providing innovative solutions for software development, cybersecurity, and IT infrastructure management.',
      caseStudy: 'Implemented AI-driven automation reducing IT support ticket volume by 50%.'
    },
    {
      id: 'bfsi',
      name: 'BFSI',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg',
      description: 'Supporting banking, financial services, and insurance firms with advanced risk management and analytics.',
      caseStudy: 'Enhanced customer experience through personalized AI-driven financial recommendations.'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      image: 'https://images.pexels.com/photos/1769344/pexels-photo-1769344.jpeg',
      description: 'Driving innovation and efficiency in engineering sectors through smart design and data-driven processes.',
      caseStudy: 'Developed AI-powered design tools reducing prototyping time by 30%.'
    },
    {
      id: 'renewable',
      name: 'Renewable Energy',
      image: 'https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg',
      description: 'Leveraging data-driven insights to optimize sustainable energy solutions and reduce carbon footprints.',
      caseStudy: 'Developed predictive maintenance models reducing wind turbine downtime by 35%.'
    },
    {
      id: 'oilgas',
      name: 'Oil & Gas',
      image: 'https://images.pexels.com/photos/3855961/pexels-photo-3855961.jpeg',
      description: 'Enhancing operational efficiency, risk management, and safety in oil and gas industries.',
      caseStudy: 'Implemented IoT-driven safety monitoring reducing hazardous incidents by 40%.'
    }
  ];

  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <Section 
      id="industries" 
      title="Industries We Serve"
      subtitle="Transforming businesses across diverse sectors with data-driven solutions"
    >
      {/* Industry Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {industries.map((industry) => (
          <button
            key={industry.id}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === industry.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(industry.id)}
          >
            {industry.name}
          </button>
        ))}
      </div>

      {/* Industry Details */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={activeIndustry.image} 
            alt={activeIndustry.name} 
            className="w-full h-80 object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeIndustry.name}</h3>
          <p className="text-gray-600 mb-6">{activeIndustry.description}</p>
          
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Success Story</h4>
            <p className="text-gray-700">{activeIndustry.caseStudy}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Industries;
