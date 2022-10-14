
import Header from '../Header/Header.js';   // шапка
import Main from '../Main/Main.js';         // основная часть
import Footer from '../Footer/Footer.js';   // подвал

import React from 'react';

function App() {

  const [content, setContent] = React.useState('Just text');
  const [titleContent, setTitleContent] = React.useState('Just title');

  function women() {
    setTitleContent('WOMEN');
    setContent(<p>women</p>);
  }

  function contacts() {
    setTitleContent('CONTACTS');
    setContent(<p>contacts</p>);
  }

  function become_a_model() {
    setTitleContent('BECOME A MODEL');
    setContent(<p>become a model</p>);
  }

  const changeContent = {
    women: women,
    contacts: contacts,
    become_a_model: become_a_model
  }

  return (
    <>
      <Header objChangeContent={changeContent} />
      <Main title={titleContent}>
        {content}
      </Main>
      <Footer />
    </>
  );
}

export default App;
