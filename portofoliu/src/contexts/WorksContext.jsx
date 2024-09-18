import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WorksContext = createContext();

export const WorksProvider = ({ children }) => {
  const [works, setWorks] = useState([]);

  // obtine toate lucrările din API
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
  }, []);


  // actualizare lucrari
  const updateWork = async (updatedWork) => {
    try {
      if (!updatedWork._id) {
        throw new Error("No ID found for the updated work.");
      }
      // facem cererea PUT către API pentru a actualiza lucrarea
      const response = await axios.put(`http://localhost:5000/works/${updatedWork._id}`, updatedWork);
      
      // actualizam
      setWorks((prevWorks) =>
        prevWorks.map((work) =>
          work._id === updatedWork._id ? response.data : work
        )
      );
    } catch (error) {
      console.error('Error updating work:', error);
    }
  };

  return (
    <WorksContext.Provider value={{ works, setWorks, updateWork }}>
      {children}
    </WorksContext.Provider>
  );
};
