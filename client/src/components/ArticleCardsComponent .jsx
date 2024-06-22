import React from 'react';

const ArticleCardsComponent = () => {
  const articles = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Article 1 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Article 2 Title',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      title: 'Article 3 Title',
      text: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      title: 'Article 4 Title',
      text: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150',
      title: 'Article 5 Title',
      text: 'Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.',
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/150',
      title: 'Article 6 Title',
      text: 'Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
      <h2 className="text-lg md:text-2xl font-bold text-center text-teal-500 mb-4">Artigos de Pós colheita - Freemium</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-40 md:h-48 object-cover" src={article.image} alt={article.title} />
            <div className="p-4">
              <h3 className="text-sm md:text-base font-bold text-gray-800">{article.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 mt-2">{article.text}</p>
              <button className="mt-4 border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:text-white hover:bg-teal-500 transition duration-300">Ler mais</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300">Ver todos</button>
      </div>
    </div>
  );
};

export default ArticleCardsComponent;
