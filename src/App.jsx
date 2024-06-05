import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import circleDark from './img/circle-dark.svg';
import circleLight from './img/circle-light.svg';
import Home from './routes/Home';
import PageTwo from './routes/PageTwo';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <BrowserRouter>
        <img
          src={`${theme === 'dark' ? circleLight : circleDark}`}
          alt="circle"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </section>
  );
}

export default App;
