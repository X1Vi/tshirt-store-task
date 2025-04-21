import React, { createContext, useEffect, useState } from 'react';

import './App.css';
import { darkTheme, lightTheme } from '../theme';
import LandingPage from './pages/LandingPage';
import ProductInformationPage from './pages/ProductInformationPage';

export const AppContext = createContext();

function App() {
  const THEMES = {
    DARK_MODE: 'dark',
    LIGHT_MODE: 'light',
  };

  const PAGES = {
    LANDING_PAGE: "landing",
    PRODUCT_INFORMATION_PAGE: "product_information",
  }
  const [currentPage, setCurrentPage] = useState(PAGES.LANDING_PAGE);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || THEMES.LIGHT_MODE);
  const [currentImage, setCurrentImage] = useState(null);
  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.LIGHT_MODE ? THEMES.DARK_MODE : THEMES.LIGHT_MODE));
  };

  const themePallete = theme === THEMES.DARK_MODE ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, THEMES, toggleTheme, themePallete, currentImage, setCurrentImage, setCurrentPage, currentPage, PAGES }}>
      <div style={{ flex: 1, width: '100%', height: '100vh', overflowY: 'auto', backgroundColor: themePallete.colors.secondary }}>
        {currentPage === PAGES.LANDING_PAGE && <LandingPage />}
        {currentPage === PAGES.PRODUCT_INFORMATION_PAGE && <ProductInformationPage />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
