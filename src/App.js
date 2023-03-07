import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import { Nav, MainVisual, Collection } from './data/Data';

import Header from './components/Header';
import Main from './components/Main';
import Sub01_01 from './components/Sub01_01';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header Nav={Nav} />

      <Routes>
        <Route path="/"
          element={<Main MainVisual={MainVisual} Collection={Collection} />} />
        <Route path="/Sub01_01"
          element={<Sub01_01 MainVisual={MainVisual} Collection={Collection} />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
