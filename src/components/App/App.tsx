// App.tsx
import { useState } from 'react';
import './App.css';
import Logo from '../Logo/Logo';
import '../../global.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a className="logo" href="./index.html" aria-label="Site logo">
            <Logo />
          </a>
          <ThemeToggle />
          <SearchForm setSearchQuery={setSearchQuery} />
          <Navigation />
        </div>
      </header>

      <main>
        {/* Передаємо searchQuery у дочірні сторінки */}
        <Outlet context={{ searchQuery }} />
      </main>
    </>
  );
}

export default App;
