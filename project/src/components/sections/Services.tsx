import React from 'react';
import Section from '../ui/Section';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const TechStack = () => {
  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions'
    },
    {
      name: 'Databricks',
      logo: 'https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg',
      description: 'Unified data analytics platform for big data and AI'
    },
    {
      name: 'DBT',
      logo: 'https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png',
      description: 'Data transformation tool enabling analytics engineering'
    },
    {
      name: 'FiveTran',
      logo: 'https://images.icon-icons.com/2699/PNG/512/fivetran_logo_icon_170149.png',
      description: 'Automated data integration for seamless data pipelines'
    },
    {
      name: 'Next.js',
      logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
      description: 'React framework for production-grade, fast, and scalable web applications.'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      description: 'Comprehensive cloud platform offering computing power, storage, and content delivery.'
    }
  ];

  return (
    <Section 
      id="tech-stack" 
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-black transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-64"
          >
            <div className="h-16 flex items-center justify-center mb-4">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
            <p className="text-gray-700">{tech.description}</p>
          </div>
        ))}
      </div>

      {/* Databricks Partner Section with Animation */}
      <div className="mt-16 flex justify-center">
        <div className="bg-white p-10 rounded-2xl max-w-6xl w-full flex flex-col md:flex-row items-center shadow-lg border border-gray-200 hover:border-black transition-all duration-300">
          {/* Animation Left */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-14 flex justify-center">
            <DotLottieReact
              src="https://lottie.host/6cbb0931-bb49-4480-a63f-119086917dc1/cgKGuBxPfU.lottie"
              loop
              autoplay
              style={{ width: 420, height: 420 }}
            />
          </div>
          {/* Text Right */}
          <div className="flex-1 px-2 md:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-left">Proud Databricks Partner</h3>
            <p className="text-gray-700 mb-4 text-left text-lg leading-relaxed">
              As a certified Databricks partner, we deliver secure, scalable, and innovative data solutions using the Databricks Lakehouse Platform. Our expertise helps organizations unlock insights, modernize infrastructure, and accelerate digital transformation.
            </p>
            <p className="text-black mb-4 text-left text-lg leading-relaxed">
              With Databricks, we empower businesses to unify their data and drive better decision-making across the enterprise.
            </p>
            <p className="text-gray-700 mb-4 text-left text-lg leading-relaxed">
              Our team specializes in advanced analytics, AI, and data engineering, ensuring seamless integration and high performance for your most critical workloads. We help you migrate, optimize, and innovate faster with Databricks.
            </p>
            <p className="text-black text-left text-lg leading-relaxed">
              Partner with us to unlock the full potential of your data and accelerate your journey to becoming a truly data-driven organization.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
