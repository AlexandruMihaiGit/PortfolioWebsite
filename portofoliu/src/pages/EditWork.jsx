import React, { useState, useContext, useEffect } from 'react';
import { WorksContext } from '../contexts/WorksContext';
import { useParams, useNavigate } from 'react-router-dom';

const EditWork = () => {
  const { works, updateWork } = useContext(WorksContext);
  const { id } = useParams(); // Obtin ID-ul din URL
  const navigate = useNavigate();
  const [work, setWork] = useState(null);

  // cautam lucrarea pe baza ID-ului din lista de lucrari
  useEffect(() => {
    const workToEdit = works.find((w) => w._id === id);
    if (workToEdit) {
      setWork({ ...workToEdit });
    } else {
      console.error('Work not found');
    }
  }, [id, works]);

  if (!work) {
    return <div className="text-white">Work not found</div>;
  }

  // modificarile din formular
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWork({ ...work, [name]: value });
  };

  // actualizarea lucrarii
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateWork(work);
    navigate('/portfolio');
  };

  // adaugarea si eliminarea imaginilor
  const handleAddImageField = () => {
    setWork({ ...work, imageUrls: [...work.imageUrls, ''] });
  };

  const handleRemoveImageField = (index) => {
    const newImageUrls = [...work.imageUrls];
    newImageUrls.splice(index, 1);
    setWork({ ...work, imageUrls: newImageUrls });
  };

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...work.imageUrls];
    newImageUrls[index] = value;
    setWork({ ...work, imageUrls: newImageUrls });
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Edit Work
          </h2>

          {/* titlu */}
          <div className="mb-4">
            <input
              type="text"
              name="title"
              value={work.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>

          {/* descriere */}
          <div className="mb-4">
            <textarea
              name="description"
              value={work.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded h-24"
            />
          </div>

          {/* URL-urile imaginilor */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image URLs</label>
            {work.imageUrls.map((url, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => handleImageUrlChange(index, e.target.value)}
                  placeholder={`Image URL ${index + 1}`}
                  required
                  className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
                />
                {work.imageUrls.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveImageField(index)}
                    className="ml-2 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddImageField}
              className="mt-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
            >
              Add Another Image
            </button>
          </div>

          {/* Link-ul clientului */}
          <div className="mb-4">
            <input
              type="text"
              name="clientLink"
              value={work.clientLink}
              onChange={handleChange}
              placeholder="Client Link"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <select
              name="status"
              value={work.status}
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            >
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>

          {/* Butonul de actualizare */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-2 rounded hover:bg-yellow-600 transition duration-200 font-semibold"
          >
            Update Work
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditWork;
