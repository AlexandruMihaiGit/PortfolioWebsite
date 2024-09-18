import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkItem = ({ work, onEdit, onDelete, showDetails = true }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/EditWork/${work._id}`);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden text-center">
      {/* Afisam imaginile */}
      <div className="p-4">
        {work.imageUrls && work.imageUrls.length > 0 ? (
          work.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${work.title} ${index + 1}`}
              className="w-full h-48 object-cover mb-2"
            />
          ))
        ) : (
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-full h-48 object-cover mb-2"
          />
        )}

        <h3 className="text-xl font-semibold mb-2 text-white">{work.title}</h3>
        <p className="text-gray-300 mb-4">{work.description}</p>

        {/* afisam sectiunea de detalii doar dacă showDetails este true */}
        {showDetails && (
          <>
            <a
              href={work.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Visit Client
            </a>
            <p className="mt-2 text-gray-400">
              Status:{' '}
              <span
                className={
                  work.status === 'visible' ? 'text-green-400' : 'text-red-400'
                }
              >
                {work.status}
              </span>
            </p>

            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleEdit}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(work._id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkItem;
