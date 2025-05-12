import React from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardTitle, CardDescription, CardImage } from '../ui/Card';
import Button from '../ui/Button';

const Insights = () => {
  const insights = [
    {
      title: 'Leveraging Big Data for Business Growth',
      category: 'Data Strategy',
      date: 'June 15, 2025',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Discover how businesses are using big data analytics to drive growth and innovation in today\'s competitive landscape.'
    },
    {
      title: 'The Future of Data Engineering',
      category: 'Technology',
      date: 'May 28, 2025',
      image: 'https://images.pexels.com/photos/374899/pexels-photo-374899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Explore emerging trends in data engineering and how they are reshaping the way organizations handle data.'
    },
    {
      title: 'AI and Machine Learning in Healthcare',
      category: 'Industry Insights',
      date: 'April 10, 2025',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'How artificial intelligence and machine learning are transforming patient care and medical research.'
    }
  ];

  const resources = [
    {
      title: 'Data Governance Framework',
      type: 'Whitepaper',
      icon: '📄'
    },
    {
      title: 'Modern Data Stack Implementation',
      type: 'Case Study',
      icon: '📊'
    },
    {
      title: 'Data Scientist\'s Guide to Databricks',
      type: 'eBook',
      icon: '📚'
    }
  ];

  return (
    <Section 
      id="insights" 
      title="Insights & Resources"
      subtitle="Stay updated with the latest trends, insights, and resources in data analytics"
    >
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {insights.map((insight, index) => (
          <Card key={index} hover className="h-full">
            <CardImage 
              src={insight.image} 
              alt={insight.title}
              className="h-48"
            />
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-blue-600">{insight.category}</span>
                <span className="text-sm text-gray-500">{insight.date}</span>
              </div>
              <CardTitle>{insight.title}</CardTitle>
              <CardDescription className="mb-4">{insight.excerpt}</CardDescription>
              <Button variant="outline" className="w-full">Read More</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Download Our Resources
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="text-3xl mb-4">{resource.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{resource.type}</p>
              <Button 
                variant="outline"
                className="mt-auto w-full"
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest insights, trends, and updates in data analytics and AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"
          />
          <Button className="bg-white text-blue-600 hover:bg-gray-100">
            Subscribe
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Insights;