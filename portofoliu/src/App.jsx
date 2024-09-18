import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WorksProvider } from './contexts/WorksContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AddWork from './pages/AddWork';
import EditWork from './pages/EditWork';

function App() {
  return (
    <WorksProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/AddWork" element={<AddWork />} />
              <Route path="/EditWork/:id" element={<EditWork />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WorksProvider>
  );
}

export default App;
