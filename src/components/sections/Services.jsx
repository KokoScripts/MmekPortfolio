import React from 'react';
import { Code, BookOpen, Files, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "API Documentation",
      description: "I develop detailed API references and guides using industry-standard tools such as OpenAPI, Swagger, and Postman.",
      icon: <Code className="w-8 h-8 mb-4 text-purple-400" />,
      stats: "2+ APIs documented"
    },
    {
      title: "Technical Content",
      description: "I create in-depth technical guides, tutorials, and articles on Cloud, Blockchain, Web3, Cybersecurity for diverse audiences.",
      icon: <Files className="w-8 h-8 mb-4 text-blue-400" />,
      stats: "80+ articles published"
    },
    {
      title: "Content Structuring",
      description: "I design and implement structured documentation frameworks, ensuring clarity, consistency, ease of navigation and alignment with style guides.",
      icon: <BookOpen className="w-8 h-8 mb-4 text-green-400" />,
      stats: "3+ documentation portals"
    },
    {
      title: "Technical Mentoring",
      description: "I hold online and offline classes with students on technical documentation",
      icon: <Users className="w-8 h-8 mb-4 text-yellow-400" />,
      stats: "6+ students mentored"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Professional Focus🎯</h2>
          <p className="text-gray-400 text-lg">A summary of my skills and experience in documentation and technical writing.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0d1117] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon with gradient background */}
                <div className="rounded-lg p-2 w-fit mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>

                {/* Stats with animation */}
                <div className="mt-4 text-sm font-semibold text-purple-400/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}