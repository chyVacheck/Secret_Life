
import Header from '../Header/Header.js';   // шапка
import Page from '../Page/Page.js';         // основная часть
import Footer from '../Footer/Footer.js';   // подвал
import React from 'react';

import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../../pages/Home/Home.js';
import Women from '../../pages/Women/Women.js';
import Become_a_model from '../../pages/Become_a_model/Become_a_model.js';
import Contacts from '../../pages/Contants/Contacts.js';

function App() {

  return (
    <>
      <Header />

      <Router>
        <Routes>

          {/* Home page */}
          <Route path='/'
            element={
              <Page title={'Secret Life'}>
                <Home />
              </Page>
            }
          />

          {/* Women */}
          <Route path='/women'
            element={
              <Page title={'WOMEN'} >
                <Women />
              </Page>
            }
          />

          {/* Become a model */}
          <Route path='/become%20a%20model'
            element={
              <Page title={'BECOME A MODEL'} >
                <Become_a_model />
              </Page>
            }
          />

          {/* Contacts */}
          <Route path='/contacts'
            element={
              <Contacts />
            }
          />

        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
