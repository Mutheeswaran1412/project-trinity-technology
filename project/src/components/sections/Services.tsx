import React from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardTitle, CardDescription } from '../ui/Card';
import { LineChart, Database, ShieldCheck, BarChart, Cloud, BrainCircuit } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <LineChart size={48} className="text-blue-600" />,
      title: 'Data Strategy',
      description: 'Crafting tailored data roadmaps to align with your business objectives and drive meaningful outcomes.'
    },
    {
      icon: <Database size={48} className="text-blue-600" />,
      title: 'Data Engineering',
      description: 'Building robust data infrastructures for seamless data flow, processing, and management across your organization.'
    },
    {
      icon: <ShieldCheck size={48} className="text-blue-600" />,
      title: 'Data Governance & Management',
      description: 'Ensuring data quality, security, and compliance with industry regulations and organizational policies.'
    },
    {
      icon: <BarChart size={48} className="text-blue-600" />,
      title: 'Business Intelligence',
      description: 'Transforming data into actionable insights for informed decision-making through advanced analytics and reporting.'
    },
    {
      icon: <Cloud size={48} className="text-blue-600" />,
      title: 'Data Migration and Modernization',
      description: 'Transitioning legacy systems to modern data platforms for improved performance, scalability, and cost-efficiency.'
    },
    {
      icon: <BrainCircuit size={48} className="text-blue-600" />,
      title: 'Artificial Intelligence',
      description: 'Implementing AI solutions to drive innovation, automate processes, and uncover hidden patterns in your data.'
    }
  ];

  return (
    <Section 
      id="services" 
      title="Our Services"
      subtitle="Comprehensive data solutions tailored to your business needs"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} hover className="h-full">
            <CardContent>
              <div className="mb-4">{service.icon}</div>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Services;