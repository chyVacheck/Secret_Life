
import './Header.css';
import instagram from './../../images/icon/instagram.svg';
import telegram from './../../images/icon/telegram.svg';
import logo from './../../images/icon/logo.svg';
import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <header className='header'>
      <section className='header__container'>
        {/* логотип */}
        <NavLink className='header__logo' to='/'>
          <img className='header__logo-img' alt='secret life' src={logo} />
        </NavLink>

        {/* список страниц */}
        <nav className='header__column'>
          <ul className='header__list'>
            {/* WOMEN */}
            <li className='header__element-list'>
              <NavLink className='header__link' to={`/women`}>
                <p className='header__link_text'>Women</p>
              </NavLink>
            </li>
            {/* CastingApplication */}
            <li className='header__element-list'>
              <a className='header__link' href={`/CastingApplication`}>
                <p className='header__link_text'>Casting Application</p>
              </a>
            </li>
            {/* CONTACTS */}
            <li className='header__element-list'>
              <NavLink className='header__link' to={`/contacts`}>
                <p className='header__link_text'>Contacts</p>
              </NavLink>
            </li>
          </ul>

          <ul className='header__social-network-list'>
            {/* instagram */}
            <li className='header__social-network'>
              <a className='header__link' href='https://www.instagram.com/kuchuruk_tatyana/'>
                <img className='header__link_icon' src={instagram} ></img>
              </a>
            </li>
            {/* telegram */}
            <li className='header__social-network'>
              <a className='header__link' href='#'>
                <img className='header__link_icon' src={telegram} ></img>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header >
  );
}

export default Header;
