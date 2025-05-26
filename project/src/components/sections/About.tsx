import React from 'react';
import Section from '../ui/Section';
import { Database, Trophy, Globe, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Database size={24} />, value: '500+', label: 'Projects Delivered' },
    { icon: <Trophy size={24} />, value: '9+', label: 'Years of Experience' },
    { icon: <Globe size={24} />, value: '10+', label: 'Countries Served' },
    { icon: <Users size={24} />, value: '100+', label: 'Data Experts' },
  ];

  return (
    <Section 
      id="about" 
      title={
        <span className="flex flex-col items-center text-black">
          <img
            src="https://trinitetech.com/wp-content/uploads/2024/02/Trinity-Logo-1.svg"
            alt="Trinity Logo"
            className="h-14 mb-2"
            style={{ maxWidth: 120, filter: 'brightness(0) saturate(100%)' }} // Black logo
          />
          <span className="text-[#22396b]">About Trinity Technology Solution</span>
        </span>
      }
      subtitle={<span className="text-gray-700">Your Trusted Partner in Digital Transformation</span>}
      className="bg-white text-black"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="mb-6">
            Founded in 2020, Trinity Technology Solution LLC has been at the forefront of digital transformation, helping enterprises harness the power of data analytics and cloud solutions. Our commitment to excellence and innovation has made us a trusted partner for businesses worldwide.
          </p>
          <p className="mb-6">
            As a certified Databricks partner, we specialize in data engineering, analytics, and AI solutions that drive business growth and operational efficiency. Our expertise spans across cloud migration, data governance, and enterprise-scale digital transformation initiatives.
          </p>
          <div className="bg-blue-100 border-l-4 border-blue-300 text-blue-900 p-4 mb-6">
            <h4 className="font-semibold mb-2">Official Databricks Partner</h4>
            <p>
              Our strategic partnership with Databricks enables us to deliver cutting-edge lakehouse architecture and advanced analytics solutions that transform how organizations leverage their data assets.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200 text-center text-black transition-colors duration-200 hover:border-black"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;