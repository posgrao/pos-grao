import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-teal-500 mb-6">As senhoritas do Pós Grãos hehe</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Left Side */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Juliana Zeymer</h3>
            <p className="text-sm md:text-base text-gray-600">PhD, Engenheira Agrônoma</p>
            <p className="text-sm md:text-base text-gray-600 mb-4">Description about Juliana Zeymer.</p>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Juliana Zeymer" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Julia Guerino</h3>
            <p className="text-sm md:text-base text-gray-600">Software Engineer, UX Designer</p>
            <p className="text-sm md:text-base text-gray-600 mb-4">Description about Julia Guerino.</p>
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full mx-auto">
              {/* Placeholder for Julia Guerino's avatar */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Juliana Zeymer" className="w-full h-full object-cover rounded-full" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
