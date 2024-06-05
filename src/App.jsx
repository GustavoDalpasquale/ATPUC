import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import circleDark from './img/circle-dark.svg';
import circleLight from './img/circle-light.svg';

import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <img
        src={`${theme === 'dark' ? circleLight : circleDark}`}
        alt="circle"
      />
      <Outlet />
      <Navbar />
    </section>
  );
}

export default App;
