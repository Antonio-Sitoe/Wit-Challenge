import React from 'react';
import { GlobalStyle } from './styles/Reset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Page404 from './Pages/Page404/Page404';
import Footer from './Components/Footer/Footer';
import Search from './Pages/Search/Search';
import Graph from './Pages/Graph/Graph';
import List from './Pages/List/List';
import { GlobalContext } from './Context/UserContext';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='search' element={<Search />} />
          <Route path='graph' element={<Graph />} />
          <Route path='list' element={<List />} />
          <Route path='*' element={<Page404 />} exact />
        </Routes>
        <Footer />
        <GlobalStyle />
      </GlobalContext>
    </BrowserRouter>
  );
};

export default App;
