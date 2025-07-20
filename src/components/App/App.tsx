import './App.css'
import Logo from '../Logo/Logo';
import '../../global.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import { fetchCategory } from '../../services/productService';
import { Outlet } from 'react-router-dom';


function App() {

  fetchCategory();
  
  return (
     <>
    <header className="header">
      <div className="container header__container">
        <a className="logo" href="./index.html" aria-label="Site logo">
          <Logo />
            </a>
        <ThemeToggle />
        <SearchForm />
        <Navigation />
      </div>
     </header>   

     <main>
        <Outlet />
     </main>  
   
    </>
   
  );
}

export default App
