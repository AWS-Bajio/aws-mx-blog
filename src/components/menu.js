import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import MenuWrapper from "../styles/Menu"
import styled from 'styled-components';
import '../styles/global.css';
import { FaTimes } from 'react-icons/fa';
import Logo from "../assets/svg/aws-logo.svg"


const Menu = () => {

    const onClickClose = () => {
      //const menu = document.getElementById("drawer-menu")
      //menu.classList.add("menu-hidden");
      const main_content = document.getElementById("main-content")
      main_content.classList.remove("main-content-mobile-effect")
      main_content.classList.add("main-content-mobile-second-effect")
      main_content.classList.add("overflowx")
    }

  return (
    <MenuWrapper id="drawer-menu">
      <div className="container-logo">
        <Logo className="mobile-logo-menu"/>
      </div>
      <div className="menu-close-icon">
      </div>
      <div>
        <ul>
          <li>
            <Link onClick={()=>{onClickClose()}} to="/">blog</Link>
          </li>
          <li>
            <Link onClick={()=>{onClickClose()}} to="/">eventos</Link>
          </li>
          <li>
            <Link onClick={()=>{onClickClose()}} to="/">contacto</Link>
          </li>
        </ul>
      </div>
    </MenuWrapper>
  )
}
Menu.propTypes = {
  open: PropTypes.bool,
}

Menu.defaultProps = {
  open: false,
}
export default Menu