import React ,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import { WorksContext } from '../contexts/WorksContext';
import WorkItem from '../pages/WorkItem';

const Home = () => {
  const { works } = useContext(WorksContext); // Preluam lucrarile din context
  const latestWorks = works.slice(-3).reverse(); // ultimele 3 lucrari și inversam ordinea

  return (
    <div className="bg-gray-800 text-white">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-moving-bg"
          style={{
            backgroundImage: `url('https://media4.giphy.com/media/UYBDCJjwOd9Re/200.webp?cid=790b7611gfnz551h91usj0hj3zwgl8nest3roia84qo14xc8&ep=v1_gifs_search&rid=200.webp&ct=g')`,
            backgroundSize: 'auto',
          }}
          >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 py-32 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4 text-center animate-fade-in">
          Welcome to Portfolio_Project
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl animate-fade-in-delay">
          The ultimate platform for showcasing the stunning creations of digital artists. Here, artists from around the world can publish their unique works, share insights into their creative process, and connect directly with their audience. Each artist has the opportunity to display their portfolio, complete with images, descriptions, and links to their personal profiles or websites.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/Portfolio">
              <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 font-semibold">
                Projects
              </button>
            </Link>
            <Link to="#Contact">
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 font-semibold">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">About Us</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>

      {/* Ultimele lucrari */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
          Newest added projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestWorks.length > 0 ? (
            latestWorks.map((work) => (
              <WorkItem key={work._id} work={work} showDetails={false}/>
            ))
          ) : (
            <p className="text-center text-gray-400">No works found</p>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/Portfolio">
            <button className="bg-yellow-500 text-gray-900 py-2 px-6 rounded hover:bg-yellow-600 transition duration-300 font-semibold">
              See all projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
