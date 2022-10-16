
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
