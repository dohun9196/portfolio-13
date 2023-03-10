import React from 'react';

import { Router, Route, Routes } from "react-router-dom";
import { Nav, MainVisual, Collection, News } from './data/Data';
import { SubHeaderData, KSW, Brand, BrandSub, History, CEO, LOGO, Product, BrandNAV01, BrandContent01, BrandNAV02, BrandContent02 } from './data/SubPageData';

import Header from './components/Header';
import Main from './components/Main';
import Sub01_01 from './components/Sub01_01';
import Sub02_01 from './components/Sub02_01';
import Sub02_02 from './components/Sub02_02';
import Sub02_03 from './components/Sub02_03';
import Sub02_04 from './components/Sub02_04';
import Sub02_05 from './components/Sub02_05';
import Sub03_01 from './components/Sub03_01';
import Sub03_02 from './components/Sub03_02';
import Sub03_03 from './components/Sub03_03';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header Nav={Nav} />

      <Routes>
        <Route path="/"
          element={<Main MainVisual={MainVisual} Collection={Collection} News={News} />} />
        <Route path="/Sub01_01"
          element={<Sub01_01 SubHeaderData={SubHeaderData} KSW={KSW} />} />
        <Route path="/Sub02_01"
          element={<Sub02_01 SubHeaderData={SubHeaderData} Brand={Brand} BrandSub={BrandSub} History={History} />} />
        <Route path="/Sub02_02"
          element={<Sub02_02 SubHeaderData={SubHeaderData} CEO={CEO} />} />
        <Route path="/Sub02_03"
          element={<Sub02_03 SubHeaderData={SubHeaderData} LOGO={LOGO} />} />
        <Route path="/Sub02_04"
          element={<Sub02_04 SubHeaderData={SubHeaderData} />} />
        <Route path="/Sub02_05"
          element={<Sub02_05 SubHeaderData={SubHeaderData} />} />
        <Route path="/Sub03_01"
          element={<Sub03_01 SubHeaderData={SubHeaderData} Product={Product} />} />
        <Route path="/Sub03_02"
          element={<Sub03_02 SubHeaderData={SubHeaderData} BrandNAV01={BrandNAV01} BrandContent01={BrandContent01} />} />
        <Route path="/Sub03_03"
          element={<Sub03_03 SubHeaderData={SubHeaderData} BrandNAV02={BrandNAV02} BrandContent02={BrandContent02} />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
