import React, { useState, useContext } from 'react';
import { WorksContext } from '../contexts/WorksContext';
import axios from 'axios';

const AddWork = () => {
  const { addWork } = useContext(WorksContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);
  const [clientLink, setClientLink] = useState('');
  const [status, setStatus] = useState('visible');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWork = { title, description, imageUrls, clientLink, status };
    
    try {
      // Trimiterea cererii POST către serverul NestJS
      await axios.post('http://localhost:5000/works', newWork);
      alert('Work added successfully');
      
      // Resetare fields dupa subbmit
      setTitle('');
      setDescription('');
      setImageUrls(['']);
      setClientLink('');
      setStatus('visible');

      // Apel addWork pentru a actualiza contextul
      addWork(newWork);
    } catch (error) {
      console.error('Error adding work:', error);
    }
  };

  const handleAddImageField = () => {
    setImageUrls([...imageUrls, '']);
  };

  const handleRemoveImageField = (index) => {
    const newImageUrls = [...imageUrls];
    newImageUrls.splice(index, 1);
    setImageUrls(newImageUrls);
  };

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Add a New Work
          </h2>
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded h-24"
            />
          </div>
          {/* Image URLs */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Image URLs</label>
            {imageUrls.map((url, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => handleImageUrlChange(index, e.target.value)}
                  placeholder={`Image URL ${index + 1}`}
                  required
                  className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
                />
                {imageUrls.length > 1 && (
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
          {/* Client Link */}
          <div className="mb-4">
            <input
              type="text"
              value={clientLink}
              onChange={(e) => setClientLink(e.target.value)}
              placeholder="Client Link"
              required
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            />
          </div>
          {/* Status */}
          <div className="mb-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
            >
              <option value="visible">Visible</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 py-2 rounded hover:bg-yellow-600 transition duration-200 font-semibold"
          >
            Add Work
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddWork;
