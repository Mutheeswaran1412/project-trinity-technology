import React from 'react';
import Section from '../ui/Section';

const TechStack = () => {
  const technologies = [
    {
      name: 'Azure',
      logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg',
      description: 'Cloud computing services for scalable, enterprise-grade solutions'
    },
    {
      name: 'AWS',
      logo: 'https://assets-web-varjo.s3.eu-north-1.amazonaws.com/wp-content/uploads/2019/12/aws-logo.png',
      description: 'Comprehensive cloud platform offering compute, storage, and AI services'
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
      logo: 'https://cdn.prod.website-files.com/624da42b5f2beca5145266dc/62563684303eae7093e52548_fivetran.svg',
      description: 'Automated data integration for seamless data pipelines'
    }
  ];

  return (
    <Section 
      id="tech-stack" 
      title="Our Technology Stack"
      subtitle="Cutting-edge technologies powering our data solutions"
      dark
    >
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
  {technologies.map((tech, index) => (
    <div 
      key={index} 
      className="bg-gray-800 rounded-lg p-6 text-center transition-transform hover:-translate-y-2 duration-300"
    >
      <div className="h-10 flex items-center justify-center mb-4">
        <img 
          src={tech.logo} 
          alt={`${tech.name} logo`} 
          className="h-10 w-16 object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
      <p className="text-gray-400">{tech.description}</p>
    </div>
  ))}
</div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Proud Databricks Partner</h3>
        <div className="bg-gray-800 p-8 rounded-lg max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src="https://www.databricks.com/wp-content/uploads/2021/10/db-nav-logo.svg" 
              alt="Databricks logo" 
              className="h-12"
            />
          </div>
          <p className="text-gray-300 mb-4">
            Our official partnership with Databricks allows us to deliver best-in-class data and AI solutions on a unified, scalable platform.
          </p>
          <p className="text-gray-300">
            Together, we help organizations accelerate innovation and unlock the true value of their data through simplified analytics and machine learning.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;