import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Technical Writer 👩🏾‍💻',
              2000,
              'Simplifying Complex Technical Information ✍🏾',
              2000,
              'Creating API Documsentation ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={30}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
            Hi there! 👋 Mmek Ekon Here.
          </p>
          <br />
          <p className="text-xl text-gray-300">
          I'm experienced in creating API documentation, user manuals/guides, FAQs, Installation guides,Technical blogposts, process documentation and policies & procedures. 
          I also enjoy sharing knowledge and exchanging ideas and tips.
          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/my-cover-image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
