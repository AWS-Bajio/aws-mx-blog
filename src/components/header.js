import "../styles/global.css"
import React, { Component, useState } from "react"
import { Link } from "gatsby"
import Logo from '../assets/svg/aws-logo.svg';
import PropTypes from "prop-types"
import Menu from "./menu"
import SearchBar from "./SearchBar"
import Wrapper from "../styles/Header"
import { FaBars, FaSearch, FaArrowLeft} from "react-icons/fa/index"

const Header = ({location}) => {
  const [menu, setMenu] = useState(false)
  const openMenu = menuOption => {
    setMenu(menuOption);
    const main_content = document.getElementById("main-content")
    const bar_icon = document.getElementById("bars-icon")
    const left_icon = document.getElementById("left-arrow-icon")
    if(menuOption) {
      main_content.classList.add("main-content-mobile-effect")
      main_content.classList.remove("main-content-mobile-second-effect")
      bar_icon.classList.add("icon-default-0")
      bar_icon.classList.remove("icon-default")
      left_icon.classList.add("icon-hover-active")
      bar_icon.classList.remove("icon-hover")
    } else {
      main_content.classList.remove("main-content-mobile-effect")
      main_content.classList.add("main-content-mobile-second-effect")
      main_content.classList.add("overflowx")
      bar_icon.classList.add("icon-default")
      bar_icon.classList.remove("icon-default-0")
      left_icon.classList.add("icon-hover")
      left_icon.classList.remove("icon-hover-active")
    }
  }

  /**
   * Method called when the search icon or the close icon are clicked.
   */
  const onClickSearchToggle = () => {
    const headerSearch = document.getElementById("header-search")
    const searchContent = document.getElementById("search-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    headerSearch.classList.toggle("is-hidden")
    searchContent.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")
    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }



  return (
    <Wrapper style={{backgroundColor: location === "/" ? "rgba(0,0,0,0)" : "white" }}>
      <Menu/>
      <div id="header-content" className="container">
        <div id="header-mobile" className="container">
          <div
            className="menu-icon-container pointer"
            onClick={ ()=>openMenu(!menu) }
            onKeyDown={ ()=>openMenu(!menu) }
            role={"button"}
            tabIndex={0}
          >
            <FaBars id="bars-icon" className="behind icon-default"/>
            <FaArrowLeft id="left-arrow-icon" className="behind icon-hover"/>
          </div>
          <Logo className="logo-icon"/>
          <div
            className="search-icon-container pointer"
            onClick={ onClickSearchToggle }
            onKeyDown={ onClickSearchToggle }
            role={"button"}
            tabIndex={0}
          >
            <FaSearch/>
          </div>
        </div>
        <Link to="/">
          <Logo className="logo-icon logo-large"/>
        </Link>
        <ul className="menu-item-toolbar">
          <li>
            <Link to="/">blog</Link>
          </li>
          <li>
            <Link to="/">eventos</Link>
          </li>
          <li>
            <Link to="/">contacto</Link>
          </li>
        </ul>
      </div>
      <SearchBar/>
    </Wrapper>
  )

}

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  location: `/`,
}

export default Header
