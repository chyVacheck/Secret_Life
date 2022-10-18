
import Header from '../Header/Header.js';   // шапка
import Page from '../Page/Page.js';         // основная часть
import Footer from '../Footer/Footer.js';   // подвал
import React from 'react';

import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from '../../pages/Home/Home.js';
import Women from '../../pages/Women/Women.js';
import Woman from '../../pages/Woman/Woman.js';
import CastingApplication from '../../pages/CastingApplication/CastingApplication.js';
import Contacts from '../../pages/Contants/Contacts.js';
import { ListOfWomen } from '../../utils/constants';


function App() {

  const [selectedWoman, setSelectedWoman] = React.useState(ListOfWomen[0]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          {/* Home page */}
          <Route exact path='/'
            element={
              <Home />
            }
          />

          {/* Women */}
          <Route exact path='/women'
            element={
              <Women setSelectedWoman={setSelectedWoman} />
            }
          />

          {/* CastingApplication */}
          <Route exact path='/CastingApplication'
            element={
              <CastingApplication />
            }
          />

          {/* Contacts */}
          <Route exact path='/contacts'
            element={
              <Contacts />
            }
          />

          {/* Woman */}
          <Route exact path='/woman'
            element={
              <Woman selectedWoman={selectedWoman} />
            }
          />

        </Routes>


      </BrowserRouter>
      <Footer />

    </>
  );
}

export default App;
