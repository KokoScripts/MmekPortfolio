import React from 'react';

export default function Companies() {
  const companies = [
    {
      name: "VPNCentral",
      image: "/VPNCentral-dark.png"
    },
    {
      name: "Hack51",
      image: "/Hack51.png"
    },
    {
      name: "RoyalAssistants",
      image: "/Royalassistants.jpg"
    },
  ];

  return (
    <section className="py-20 px-6 bg-eerieBlack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Companies I've worked with 🤝</h2>
          <p className="text-gray-400 text-lg">Creating magic with great teams across the globe</p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* First Row - 4 items */}
          <div className="flex justify-center gap-12 flex-wrap">
            {companies.slice(0, 4).map((company) => (
              <a 
                key={company.name}
                href={company.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="w-32 h-12 object-contain mix-blend-luminosity brightness-100"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Second Row - 3 items, centered */}
          <div className="flex justify-center gap-12 w-full flex-wrap">
            {companies.slice(4).map((company) => (
              <a 
                key={company.name}
                href={company.link}
                className="group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/10 hover:bg-white/15 rounded-xl p-6 transition-all duration-300 hover:scale-105">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="w-32 h-12 object-contain mix-blend-luminosity brightness-100"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}