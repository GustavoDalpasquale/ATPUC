import React from 'react';
import './styles/style.css';

import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const PageTwo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section>
      <h1>Page #2!</h1>
      <div className="theme-container">
        <p>{theme && theme.toUpperCase()}</p>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </section>
  );
};

export default PageTwo;
