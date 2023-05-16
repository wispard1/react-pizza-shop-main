import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/skeleton';
import Home from './pages/Home';
import NothingFound from './components/NotFoundBlock';
import Cart from './pages/Cart';

export const AppContext = React.createContext();

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    fetch('https://64546d93c18adbbdfeb60c80.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NothingFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
