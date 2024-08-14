import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Intro from './components/files/intro';
import Home from './components/files/home';
import Introduction from './components/files/introduction';
import Note from './components/files/note';
import Additional from './components/files/additional';
import Gallery from './components/files/gallery';
import Closing from './components/files/closing';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroDone = () => {
    setIntroComplete(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          !introComplete ? <Intro onIntroDone={handleIntroDone} /> : <Navigate to="/home" replace />
        } />
        <Route path="/home" element={
          introComplete ? <Home /> : <Navigate to="/" replace />
        } />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/note" element={<Note />} />
        <Route path="/additional" element={<Additional />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>
    </Router>
  );
}

export default App;
