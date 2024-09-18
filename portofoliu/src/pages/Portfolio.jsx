import React, { useState, useEffect, useContext } from 'react';
import { WorksContext } from '../contexts/WorksContext';
import WorkItem from '../pages/WorkItem';
import axios from 'axios';

const Portfolio = () => {
  const { works, setWorks } = useContext(WorksContext);
  const [searchTerm, setSearchTerm] = useState(''); // search bar
  const [showVisibleOnly, setShowVisibleOnly] = useState(false); // checkbox

  // useEffect pentru a obtine lucrarile din API
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/works');
        setWorks(response.data);
      } catch (error) {
        console.error('Error fetching works:', error);
      }
    };
    fetchWorks();
  }, [setWorks]);

  // filtrarea lucrarilor
  const filteredWorks = works.filter((work) => {
    const matchesSearchTerm = work.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVisibility = showVisibleOnly ? work.status === 'visible' : true;

    return matchesSearchTerm && matchesVisibility;
  });

  // stergerea unei lucrari
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/works/${id}`);
      setWorks((prevWorks) => prevWorks.filter((work) => work._id !== id));
    } catch (error) {
      console.error('Error deleting work:', error);
    }
  };

  // editarea unei lucrari
  const handleEdit = (work) => {
    console.log('Editing work:', work);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Portfolio</h1>

        {/* search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Checkbox  */}
        <div className="flex justify-center mb-6">
          <label className="text-white">
            <input
              type="checkbox"
              checked={showVisibleOnly}
              onChange={() => setShowVisibleOnly(!showVisibleOnly)}
              className="mr-2"
            />
            Show only visible works
          </label>
        </div>

        {/* lucrarile filtrate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work) => (
              <WorkItem
                key={work._id}
                work={work}
                onEdit={handleEdit}
                onDelete={handleDelete}
                showDetails={true}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">No works found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
