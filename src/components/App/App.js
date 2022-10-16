
import Header from '../Header/Header.js';   // шапка
import Page from '../Page/Page.js';         // основная часть
import Footer from '../Footer/Footer.js';   // подвал
import React from 'react';

import { Routes, BrowserRouter, Route } from "react-router-dom";

import Home from '../../pages/Home/Home.js';
import Women from '../../pages/Women/Women.js';
import Woman from '../../pages/Woman/Woman.js';
import Become_a_model from '../../pages/Become_a_model/Become_a_model.js';
import Contacts from '../../pages/Contants/Contacts.js';

import photo from '../../images/women/first/photo_10.jpg';

function App() {

  const [selectedWoman, setSelectedWoman] = React.useState({
    mainPhoto: photo,
    firstName: 'Ann',
    secondName: 'Lorak',
    age: 19,
    height: 165,
    weight: 42,
    parameter: {
      bust: 85,
      waist: 63,
      hips: 82,
    },
    nationality: 'Ukrainian'
  });

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          {/* Home page */}
          <Route exact path='/'
            element={
              <Page title={'Secret Life'}>
                <Home />
              </Page>
            }
          />

          {/* Women */}
          <Route exact path='/women'
            element={
              <Women setSelectedWoman={setSelectedWoman} />
            }
          />

          {/* Become a model */}
          <Route exact path='/become%20a%20model'
            element={
              <Page title={'BECOME A MODEL'} >
                <Become_a_model />
              </Page>
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
